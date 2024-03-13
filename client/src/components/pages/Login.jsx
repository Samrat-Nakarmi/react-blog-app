import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/api";

const Login = () => {
  const [identifier, SetName] = useState();
  const [password, SetPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/auth/local",
        JSON.stringify({ identifier, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
        console.log(response)
      const JWT_TOKEN = response?.data?.jwt;
      localStorage.setItem("私は猫が大好き", JWT_TOKEN);
      navigate("/");
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid grid-cols-2 gap-5 h-screen w-4/5 m-auto">
      <div className="flex items-center  justify-center">
        <img
          src="https://samyam.netlify.app/assets/Exihibition-54732bc4.jpg"
          alt=""
          className="object-cover w-full"
        />
      </div>
      <div className="flex flex-cols items-center justify-center">
        <div className="mb-12 w-full">
          <h1 className="text-center text-4xl font-black">Login</h1>
          <p className="text-center text-slate-600 font-normal">
            Join the Skill Share Community now!
          </p>
          <form action="" className="p-8 w-full " onSubmit={handleSubmit}>
            <div className="flex flex-col justify-start mb-4">
              <label htmlFor="" className="text-lg font-semibold">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="p-2 mt-2 text-lg font-medium border-2 border-solid border-slate-400 rounded-md"
                onChange={(e) => SetName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="p-2 mt-2 text-lg font-medium border-2 border-solid border-slate-400 rounded-md"
                onChange={(e) => SetPassword(e.target.value)}
              />
            </div>
            <div className="text-center mt-12 ">
              <button className="p-4 border-2 border-solid border-amber-500 rounded-lg w-[20%]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
