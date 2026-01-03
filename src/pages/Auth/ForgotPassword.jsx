import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-white flex justify-between items-center">

      {/* Left */}
      <div className="flex flex-col ml-[65px]">
        <p className="font-bold text-2xl text-[#3563E9]">FuaDiRents</p>

        <p className="font-normal text-2xl text-black ml-[23px] mt-[172px]">
          Forgot your password?
        </p>

        <p className="text-sm mt-2 text-gray-600">
          Please enter the email address you'd like your password<br/>
          reset information sent to
        </p>

        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          
        />

        <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl mt-6 ml-[72px] w-[80%] shadow-md"
            >
              Send the verification code
            </button>

        <p className="text-sm mt-2 text-center">
          Back to{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>

      {/* Right */}
      <div className="w-1/2 h-screen overflow-hidden">
        <img
          src="./src/assets/Car_Rental.jpeg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
