import { useState } from "react";
import { NavLink } from "react-router-dom";
import { resetUserPass } from "../firebase";

function ResetPass() {
  const [formData, setFormData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetUserPass(formData);
    } catch (error) {
      console.log(error);
    }
    setFormData("");
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
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
      <p className="my-4">
        Alrady have an account?{" "}
        <NavLink to="/login">
          <u className="text-blue-500 cursor-pointer">Log-in</u>
        </NavLink>
      </p>
    </div>
  );
}

export default ResetPass;
