import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../../ui";

export default function register() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <Input label={"Fullname"} state={fullName} setState={setFullName} />
          <Input label={"Email"} state={email} setState={setEmail} />
          <Input label={"Username"} state={userName} setState={setUserName} />
          <Input
            label={"Password"}
            type="password"
            state={password}
            setState={setPassword}
          />
          <Button title={"Sign up"} />
        </form>
      </div>
    </div>
  );
}
