import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-white flex justify-between items-center">

      {/* Left Column */}
      <div className="flex flex-col">
        <p className="font-bold text-2xl text-[#3563E9] ml-[65px]">FuaDiRents</p>

        <p className="font-normal text-2xl text-black ml-[72px] mt-[172px]">
          Welcome to FuaDiRents
          <br />
          Sign into your account
        </p>

        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        {/* Forgot Password + Register Link */}
        <div className="flex justify-between items-center px-3 mt-2 ml-[72px] text-sm">
          <Link to="/forgot-password" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>

          <Link to="/register" className="text-blue-600 hover:underline ml-[65px]">
            Create Account
          </Link>
        </div>

        <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl mt-6 ml-[110px] w-[80%] shadow-md"
            >
              login
            </button>
      </div>

      {/* Right Column */}
      <div className="w-1/2 h-screen overflow-hidden">
        <img
          src="./src/assets/Car_Rental.jpeg"
          alt="Illustration"
          className="h-full w-full object-cover object-center"
        />
      </div>

    </div>
  );
};

export default Login;
