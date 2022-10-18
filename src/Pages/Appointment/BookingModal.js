import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <form className="grid grid-cols-1 gap-4 justify-items-center">
            <input
              type="text"
              value="dento sistitrng"
              disabled
              class="input input-bordered w-full max-w-sm"
            />
            <select class="select select-bordered w-full max-w-sm">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <input
              type="text"
              disabled
              value={user?.displayName}
              class="input input-bordered w-full max-w-sm"
            />
            <input
              type="email"
              disabled
              value={user?.email}
              class="input input-bordered w-full max-w-sm"
            />
            <input
              type="text"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-sm"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-secondary w-full max-w-sm"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
