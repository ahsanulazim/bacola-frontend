import { Link, NavLink } from "react-router";
import LayoutFull from "../components/layout/LayoutFull";
import { LuChevronRight, LuEye, LuLock, LuMail, LuUser } from "react-icons/lu";

const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <LayoutFull>
      <section className="max-w-340 mx-auto w-full px-2">
        <form
          onSubmit={handleSubmit}
          className="fieldset bg-base-200 border-base-300 rounded-box max-w-lg w-full mx-auto border p-10 font-inter"
        >
          <div className="flex gap-8 justify-center mb-8">
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "" : "opacity-30")}
            >
              <h2 className="text-xl uppercase text-center font-semibold font-dosis">
                Login
              </h2>
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "" : "opacity-30")}
            >
              <h2 className="text-xl uppercase text-center font-semibold font-dosis">
                Register
              </h2>
            </NavLink>
          </div>

          <label className="label">Full Name</label>
          <label className="input w-full">
            <LuUser className="opacity-50" />
            <input type="text" placeholder="Full Name" required />
          </label>
          <label className="label">Email Address</label>
          <label className="input w-full">
            <LuMail className="opacity-50" />
            <input type="email" placeholder="Email" required />
          </label>

          <label className="label">Password</label>
          <label className="input w-full">
            <LuLock className="opacity-50" />
            <input type="password" placeholder="Password" required />
            <button type="button">
              <LuEye />
            </button>
          </label>
          <button type="submit" className="btn btn-info mt-2">
            Register <LuChevronRight />
          </button>
          <div className="divider">OR LOGIN WITH</div>
          <div className="flex gap-5">
            <button className="btn flex-1 bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <button className="btn flex-1 bg-[#1A77F2] text-white border-[#005fd8]">
              <svg
                aria-label="Facebook logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  fill="white"
                  d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
                ></path>
              </svg>
              Login with Facebook
            </button>
          </div>
        </form>
      </section>
    </LayoutFull>
  );
};

export default Register;
