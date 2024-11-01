import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="border-2 border-emerald-500 p-12 rounded-lg">
        <h3 className="mb-3">Log in</h3>
        <form className="flex flex-col" onSubmit={submitHandler}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            id="email"
            placeholder="bkatre563@gmail.com"
            className="border-2 border-emerald-200 bg-transparent rounded-lg py-3 px-5 m-3 text-xl placeholder:text-gray-200 outline-none"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            name="password"
            id="password"
            placeholder="********"
            className="border-2 border-emerald-200 bg-transparent rounded-lg py-3 px-5 m-3 text-xl placeholder:text-gray-200 outline-none"
          />
          <button
            type="submit"
            className="border-2 border-emerald-200 bg-emerald-400 rounded-lg py-3 px-5 m-3 text-xl text-white outline-none"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
