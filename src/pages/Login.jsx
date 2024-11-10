// src/components/Form.js
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  singInUserWithEmainPass,
  userSigninWithFacebook,
  userSigninWithGoogle,
} from "../firebase";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await singInUserWithEmainPass(formData.email, formData.password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handelSocialGoogle = async () => {
    try {
      await userSigninWithGoogle();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handelSocialFacebook = async () => {
    try {
      await userSigninWithFacebook();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">User Log-in</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
        <a
          onClick={handelSocialGoogle}
          className="w-full block text-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
        >
          Google Login
        </a>
        <a
          onClick={handelSocialFacebook}
          className="w-full block text-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
        >
          Login with Facebook
        </a>
      </form>
      <p className="my-4">
        Dont have an account?{" "}
        <NavLink to="/singup">
          <u className="text-blue-500 cursor-pointer">Click Hare</u>
        </NavLink>
      </p>
      <NavLink to="/reset" className="text-blue-500 underline text-xs">
        Forget Password
      </NavLink>
    </div>
  );
}

export default Login;
