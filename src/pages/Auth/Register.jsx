import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";

const SignUp = () => {
  const [role, setRole] = useState("Customer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full h-screen flex">

      {/* KIRI GAMBAR */}
      <div className="hidden md:block w-1/2 h-full">
        <img
          src="/src/assets/Car_Rental.jpeg"
          alt="Sign Up"
          className="w-full h-full object-cover"
        />
      </div>

      {/* KANAN FORM */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-12">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 ml-[72px]">Create Account</h1>

          <form className="flex flex-col gap-4">

            {/* Full Name */}
            <div className="flex flex-col gap-1 mr-[188px] w-[80%]">
              <label className="font-medium ml-[72px]">Full Name</label>
              <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1 mr-[188px] w-[80%]">
              <label className="font-medium ml-[72px]">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1 mr-[188px] w-[80%]">
              <label className="font-medium ml-[72px]">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Dropdown Role */}
            <div className="flex flex-col gap-1 mr-[188px] w-[80%]">
              <label className="font-medium ml-[72px]">Login as</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border rounded-xl  py-3 shadow-md bg-white ml-[72px]"
              >
                <option value="Customer">Customer</option>
                <option value="Driver">Driver</option>
              </select>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl mt-6 ml-[72px] w-[80%] shadow-md"
            >
              Sign Up
            </button>

            {/* Login redirect */}
            <p className="text-sm text-gray-600 mt-3 ml-[72px]">
              You have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
