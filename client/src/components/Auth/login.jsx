import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../ui";
import { useDispatch, useSelector } from "react-redux";
import { loginUserStart } from "../../slice/auth";

export default function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const loginHandler = (e) => {
    e.preventDefault()
    dispatch(loginUserStart());
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <Input label={"Username"} state={userName} setState={setUserName} />

          <Input
            label={"Password"}
            type="password"
            state={password}
            setState={setPassword}
          />

          <div>
            <button
              type="submit"
              disabled={isLoading}
              onClick={loginHandler}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLoading ? "Loading..." : "Sign in"}
            </button>
          </div>
        </form>

        <div className=" mt-10 flex justify-between">
          <p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Forgot password
          </p>
          <Link to="/register">
            <p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Don't have an account ?
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
