import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

// Inline stub for UserRow so we don't need Firebase / toast context
jest.mock("./UserRow", () => ({ user }) => <tr data-testid="user-row"><td>{user.email}</td></tr>);
// Stub Loading to keep it simple
jest.mock("../Shared/Loading", () => () => <div data-testid="loading" />);

import Users from "./Users";

// Helper: wrap with a fresh QueryClient on every test to avoid cache bleed
const renderUsers = () => {
  const qc = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return render(
    <QueryClientProvider client={qc}>
      <Users />
    </QueryClientProvider>
  );
};

// Seed localStorage with a dummy token
beforeEach(() => {
  localStorage.setItem("accessToken", "test-token");
});
afterEach(() => {
  localStorage.clear();
  jest.resetAllMocks();
});

describe("Users pagination", () => {
  test("calls GET /user with page=1&limit=10 on initial render", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => ({ users: [], total: 0 }),
    });

    renderUsers();

    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining("page=1&limit=10"),
        expect.any(Object)
      )
    );
  });

  test("renders pagination controls when total > 10", async () => {
    const mockUsers = Array.from({ length: 10 }, (_, i) => ({
      _id: `id${i}`,
      email: `user${i}@test.com`,
    }));

    global.fetch = jest.fn().mockResolvedValue({
      json: async () => ({ users: mockUsers, total: 15 }),
    });

    renderUsers();

    // Prev and Next buttons should appear
    await waitFor(() => expect(screen.getByText(/Next »/i)).toBeInTheDocument());
    expect(screen.getByText(/« Prev/i)).toBeInTheDocument();
    expect(screen.getByText(/Page 1 of 2/i)).toBeInTheDocument();
    // Prev should be disabled on first page
    expect(screen.getByText(/« Prev/i).closest("button")).toBeDisabled();
  });

  test("does NOT render pagination controls when total ≤ 10", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => ({ users: [{ _id: "a1", email: "a@b.com" }], total: 1 }),
    });

    renderUsers();

    await waitFor(() => expect(screen.queryByText(/Next »/i)).not.toBeInTheDocument());
    expect(screen.queryByText(/« Prev/i)).not.toBeInTheDocument();
  });

  test("clicking Next fetches page 2", async () => {
    const mockUsers = Array.from({ length: 10 }, (_, i) => ({
      _id: `id${i}`,
      email: `user${i}@test.com`,
    }));

    global.fetch = jest.fn().mockResolvedValue({
      json: async () => ({ users: mockUsers, total: 15 }),
    });

    renderUsers();

    const nextBtn = await screen.findByText(/Next »/i);
    fireEvent.click(nextBtn);

    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining("page=2&limit=10"),
        expect.any(Object)
      )
    );
  });
});
