import { useState } from "react";
import { CiUnread, CiRead } from "react-icons/ci";

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen gap-10 md:gap-20 p-4">
     
      <div className="flex justify-center items-center">
        <img
          src="testtube.svg"
          alt="table image"
          className="w-64 md:w-[450px]"
        />
      </div>

    
      <div className="w-full max-w-md">
        <div className="flex flex-col justify-center gap-5">
          <img src="logo.svg" alt="logo" className="w-32" />

          <span className="text-2xl font-semibold">Login</span>

          <span className="text-[#374151]">
            Use your company provided Login credentials
          </span>

          <form className="flex flex-col gap-4">
            <label className="text-[#374151]">User ID</label>

            <input
              className="w-full p-3 border border-[#9CA3AF] rounded-xl placeholder:text-[#D1D5DB]"
              placeholder="Enter User ID"
            />

            <label className="text-[#374151]">Password</label>

            <div className="relative">
              <input
                className="w-full p-3 border border-[#9CA3AF] rounded-xl placeholder:text-[#D1D5DB] pr-12"
                type={show ? "text" : "password"}
                placeholder="Enter Password"
              />

              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-xl"
                onClick={() => setShow(!show)}
              >
                {show ? <CiRead /> : <CiUnread />}
              </span>
            </div>

            <span className="text-[#5988EF] cursor-pointer">
              Forgot password?
            </span>

            <button
              type="submit"
              className="w-full p-3 bg-[#5988EF] text-white rounded-xl hover:bg-[#4b78db] transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;