import React, { useState } from "react";
import axios from "axios";

const Modal = ({ setIsToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const getUserName = (e) => {
    setUsername(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleClick = () => {
    axios({
      method: "POST",
      url: "https://fakestoreapi.com/auth/login",
      data: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(({ data }) => setIsToken(data));
  };
  return (
    <>
      <div class="flex items-center min-h-screen bg-white dark:bg-gray-900">
        <div class="container mx-auto">
          <div class="max-w-md mx-auto my-10">
            <div class="text-center">
              <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Sign in
              </h1>
              <p class="text-gray-500 dark:text-gray-400">
                Sign in to access your account
              </p>
            </div>
            <div class="m-7">
              <form action="">
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Email Address - mor_2314
                  </label>
                  <input
                    onInput={getUserName}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div class="mb-6">
                  <div class="flex justify-between mb-2">
                    <label
                      for="password"
                      class="text-sm text-gray-600 dark:text-gray-400"
                    >
                      Password - 83r5^_
                    </label>
                    <a
                      href="#!"
                      class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    onInput={getPassword}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div class="mb-6">
                  <button
                    onClick={handleClick}
                    type="button"
                    class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Sign in
                  </button>
                </div>
                <p class="text-sm text-center text-gray-400">
                  Don&#x27;t have an account yet?{" "}
                  <a
                    href="#!"
                    class="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                  >
                    Sign up
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
