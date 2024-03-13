import React, { useState } from "react";
import axios from "../../api/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let registerData = new FormData();
    registerData.append("username", register.username);
    registerData.append("password", register.password);
    registerData.append("email", register.email);

    try {
      const response = await axios.post(
        "/api/auth/local/register",
        registerData,
        config
      );
      navigate("/login");
      if (response.data.jwt && response.data.user) {
        setMessage(response.message);
      }

      if (response.data.error) {
        setMessage(response.data.error.message);
      }
    } catch (error) {
      alert("Could not submit");

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
          <h1 className="text-center text-4xl font-black">Register</h1>
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
                placeholder="Enter your email"
                className="p-2 mt-2 text-lg font-medium border-2 border-solid border-slate-400 rounded-md"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col justify-start mb-4">
              <label htmlFor="" className="text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 mt-2 text-lg font-medium border-2 border-solid border-slate-400 rounded-md"
                name="email"
                onChange={handleChange}
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
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="text-center mt-12 ">
              <button
                type="submit"
                className="p-4 border-2 border-solid border-amber-500 rounded-lg w-[20%]"
              >
                Submit
              </button>
            </div>
            <div className="text-black">{message}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
