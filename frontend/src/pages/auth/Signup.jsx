import React from "react";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className=" min-h-screen flex justify-center items-center">
        <form className="w-full max-w-md p-6 rounded shadow" action="">
          <h2 className="text-2xl text-shadow-base-200 my-2">
            Sign Up to Doctor-Appointment
          </h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Full Name</legend>
            <input type="text" placeholder="Full Name" className="input" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Username</legend>
            <input
              type="text"
              className="input validator"
              required
              placeholder="Username"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minLength="3"
              maxLength="30"
              title="Only letters, numbers or dash"
            />
            <p className="validator-hint">Must be 3 to 30 characters</p>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              className="input validator"
              type="email"
              required
              placeholder="mail@site.com"
            />
            <div className="validator-hint">Enter valid email address</div>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input validator"
              required
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
            <p className="validator-hint">
              Must be more than 8 characters, including At least one number,one
              lowercase letter, one uppercase letter
            </p>
          </fieldset>
          <button className="btn btn-active btn-primary">Sign Up</button>
          <p className="text-gray-500 whitespace-pre-line dark:text-gray-400 mt-2.5">
            I have an account?
            <NavLink
              to="/signin"
              className="text-blue-500 hover:underline mx-1"
            >
              Sing in Here
            </NavLink>
          </p>
        </form>
      </div>
    </>
  );
}

export default Signup;
