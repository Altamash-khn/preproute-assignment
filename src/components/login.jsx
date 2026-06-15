import { useState } from "react";
import { CiUnread, CiRead } from "react-icons/ci";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    
    if (!storedUser) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email,
          password,
        })
      );

      alert("User Registered Successfully");
      return;
    }

    
    if (
      email === storedUser.email &&
      password === storedUser.password
    ) {
      alert("Login Successful");
      console.log("Logged In User:", storedUser);
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen gap-10 md:gap-20 p-4">
      <div className="flex justify-center items-center">
        <img
          src="testtube.svg"
          alt="table image"
        />
      </div>

          <span className="text-2xl font-semibold">Login</span>

          <span className="text-[#374151]">
            Use your company provided Login credentials
          </span>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="text-[#374151]">User ID</label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-[#9CA3AF] rounded-xl placeholder:text-[#D1D5DB]"
              placeholder="Enter User ID"
            />

            <label className="text-[#374151]">Password</label>

            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
    
    
  );
};

export default Login;