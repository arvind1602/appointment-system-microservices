import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { login, logout, userDetails } from "../features/UserSlice";

function NavBar() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [menu, setMenu] = useState(false);

  // Navigate to signin page
  const SignInPage = () => {
    navigate("/signin");
  };

  // Auto-refresh access token on component mount
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/users/refresh-token",
          null,
          {
            withCredentials: true,
          }
        );
        dispatch(login());
        dispatch(userDetails(res?.data?.data));
      } catch (error) {
        if (error.response) {
          console.error(
            "❌ Token refresh failed:",
            error.response.data.message
          );
        } else {
          console.error(
            "❌ Network error during token refresh:",
            error.message
          );
        }
        dispatch(logout());
        dispatch(userDetails(null));
      }
    })();
  }, [dispatch]);

  // Logout handler
  const handleLogout = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/users/logout-user",
        {
          withCredentials: true,
        }
      );
      dispatch(logout());
      dispatch(userDetails(null));
    } catch (error) {
      if (error.response) {
        console.error("❌ Logout failed:", error.response.data.message);
      } else {
        console.error("❌ Network error during logout:", error.message);
      }
    }
  };

  return (
    <>
      <nav className="w-full flex items-center justify-around h-15 text-amber-50 bg-slate-700">
        {/* Logo */}
        <div>
          <img
            className="h-12"
            src="https://imgs.search.brave.com/JyBBtJv1hn1xwoo3f-yP-26nX7tIcHaXmxLYeTqY6Ew/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzM4LzIvbWVkaWNh/bC1ob3NwaXRhbC1s/b2dvLXBuZ19zZWVr/bG9nby0zODg2MjEu/cG5n"
            alt="logo"
          />
        </div>

        {/* Desktop Navigation */}
        <div>
          <ul className="hidden md:flex gap-7 text-lg font-semibold text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-amber-300 underline font-semibold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-amber-300 underline font-semibold" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  isActive ? "text-amber-300 underline font-semibold" : ""
                }
              >
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appointments"
                className={({ isActive }) =>
                  isActive ? "text-amber-300 underline font-semibold" : ""
                }
              >
                Appointments
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Auth Buttons + Mobile Menu */}
        <div>
          {!user.active ? (
            <button className="btn btn-soft btn-primary" onClick={SignInPage}>
              Login
            </button>
          ) : (
            <button className="btn btn-soft btn-error" onClick={handleLogout}>
              Logout
            </button>
          )}

          <button
            type="button"
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-3.5 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 md:hidden"
            onClick={() => setMenu(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menu && (
        <div className="fixed right-0 md:hidden">
          <ul className="menu bg-base-200 rounded-box w-50 p-4">
            {/* Close Button */}
            <div className="flex justify-end mb-2">
              <button
                type="button"
                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                onClick={() => setMenu(false)}
              >
                ❌
              </button>
            </div>

            {/* Mobile Links */}
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/doctors">Doctors</NavLink>
            </li>
            <li>
              <NavLink to="/appointments">Appointments</NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default NavBar;
