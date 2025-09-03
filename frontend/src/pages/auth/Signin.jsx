import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, userDetails } from "../../features/UserSlice";
import { useNavigate } from "react-router-dom";

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/users/login-user",
        form,
        {
          withCredentials: true,
        }
      );
      setError(false);
      setErrorMsg(null);
      dispatch(login());
      dispatch(userDetails(res?.data?.data));
      navigate("/");
    } catch (error) {
      setError(true);
      setErrorMsg(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg(null);
      setError(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [errorMsg]);

  return (
    <>
      {error && (
        <div
          role="alert"
          className="alert alert-error fixed top-5 left-1/2 transform -translate-x-1/2 z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{errorMsg}</span>
        </div>
      )}
      <div className=" min-h-screen flex justify-center items-center">
        <form
          className="w-full max-w-md p-6 rounded shadow"
          action=""
          onSubmit={formSubmit}
        >
          <h2 className="text-2xl text-shadow-base-200 my-2">
            Sign In to Doctor-Appointment
          </h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Username</legend>
            <input
              type="username"
              className="input validator"
              required
              placeholder="Username"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minLength="3"
              maxLength="30"
              title="Only letters, numbers or dash"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
            <p className="validator-hint">Must be 3 to 30 characters</p>
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
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            <p className="validator-hint">
              Must be more than 8 characters, including At least one number,one
              lowercase letter, one uppercase letter
            </p>
          </fieldset>
          <button
            className="btn btn-active btn-primary"
            type="submit"
            onClick={formSubmit}
          >
            login
          </button>
          <p className="text-gray-500 whitespace-pre-line dark:text-gray-400 mt-2.5">
            Don’t have an account?
            <NavLink
              to="/signup"
              className="text-blue-500 hover:underline mx-1"
            >
              SingUp Here
            </NavLink>
          </p>
        </form>
      </div>
    </>
  );
}

export default Signin;
