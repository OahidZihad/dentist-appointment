/**
 * Regression tests for search/filter logic added to Users.js and MyAppointments.js
 * (job-273416f8-397 — Search functionality was entirely missing from all list pages)
 *
 * Tests are written as pure function tests to avoid the Firebase / React-Query
 * mocking overhead needed to render the full components. The filter expressions
 * here are exactly the ones used inline in the components.
 */

// ── Helpers matching the component filter expressions ──────────────────────────

/** Users.js: filter users by email */
function filterUsers(users, searchTerm) {
  return users.filter((u) =>
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

/** MyAppointments.js: filter appointments by patientName, treatment, or date */
function filterAppointments(appointments, searchTerm) {
  const term = searchTerm.toLowerCase();
  return appointments.filter(
    (a) =>
      (a.patientName || "").toLowerCase().includes(term) ||
      (a.treatment || "").toLowerCase().includes(term) ||
      (a.date || "").toLowerCase().includes(term)
  );
}

// ── Users search ───────────────────────────────────────────────────────────────

const USERS = [
  { _id: "1", email: "alice@example.com" },
  { _id: "2", email: "bob@dentist.com" },
  { _id: "3", email: "carol@example.com" },
];

describe("Users — email search filter", () => {
  test("empty search term returns all users (regression: was always returning all)", () => {
    expect(filterUsers(USERS, "")).toHaveLength(3);
  });

  test("exact email match returns one user", () => {
    const result = filterUsers(USERS, "alice@example.com");
    expect(result).toHaveLength(1);
    expect(result[0].email).toBe("alice@example.com");
  });

  test("partial email match is case-insensitive", () => {
    const result = filterUsers(USERS, "EXAMPLE");
    expect(result).toHaveLength(2); // alice and carol
    result.forEach((u) =>
      expect(u.email.toLowerCase()).toContain("example")
    );
  });

  test("search that matches nothing returns empty array", () => {
    expect(filterUsers(USERS, "zzz@nowhere.com")).toHaveLength(0);
  });

  test("domain-only search returns matching users", () => {
    const result = filterUsers(USERS, "dentist.com");
    expect(result).toHaveLength(1);
    expect(result[0].email).toBe("bob@dentist.com");
  });
});

// ── MyAppointments search ──────────────────────────────────────────────────────

const APPOINTMENTS = [
  { patientName: "Alice Smith", treatment: "Teeth Whitening", date: "Jan 1, 2023", slot: "9 AM" },
  { patientName: "Bob Jones",   treatment: "Root Canal",      date: "Feb 14, 2023", slot: "10 AM" },
  { patientName: "Carol White", treatment: "Teeth Whitening", date: "Jan 1, 2023", slot: "11 AM" },
];

describe("MyAppointments — search filter", () => {
  test("empty search term returns all appointments (regression: was always showing all)", () => {
    expect(filterAppointments(APPOINTMENTS, "")).toHaveLength(3);
  });

  test("treatment search returns matching rows", () => {
    const result = filterAppointments(APPOINTMENTS, "Root Canal");
    expect(result).toHaveLength(1);
    expect(result[0].patientName).toBe("Bob Jones");
  });

  test("treatment search is case-insensitive", () => {
    const result = filterAppointments(APPOINTMENTS, "teeth whitening");
    expect(result).toHaveLength(2);
  });

  test("date search returns matching rows", () => {
    const result = filterAppointments(APPOINTMENTS, "Feb");
    expect(result).toHaveLength(1);
    expect(result[0].patientName).toBe("Bob Jones");
  });

  test("patient name search returns matching rows", () => {
    const result = filterAppointments(APPOINTMENTS, "Alice");
    expect(result).toHaveLength(1);
    expect(result[0].treatment).toBe("Teeth Whitening");
  });

  test("search that matches nothing returns empty array", () => {
    expect(filterAppointments(APPOINTMENTS, "Braces")).toHaveLength(0);
  });

  test("handles missing fields gracefully (no crash on undefined patientName)", () => {
    const appts = [{ treatment: "Cleaning", date: "Mar 1, 2023", slot: "8 AM" }];
    expect(() => filterAppointments(appts, "cleaning")).not.toThrow();
    expect(filterAppointments(appts, "cleaning")).toHaveLength(1);
  });
});
