import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const logout = true;
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="w-full flex items-center justify-around  h-15 text-amber-50 bg-slate-700">
        <div>
          <img
            className="h-12"
            src="https://imgs.search.brave.com/JyBBtJv1hn1xwoo3f-yP-26nX7tIcHaXmxLYeTqY6Ew/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzM4LzIvbWVkaWNh/bC1ob3NwaXRhbC1s/b2dvLXBuZ19zZWVr/bG9nby0zODg2MjEu/cG5n"
            alt="logo"
          />
        </div>
        <div>
          <ul className="hidden md:flex gap-7 max-w-lg text-lg font-semibold leading-relaxed text-gray-900 dark:text-white ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive && "text-amber-300 underline font-semibold"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive && "text-amber-300 underline font-semibold"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  isActive && "text-amber-300 underline font-semibold"
                }
              >
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appointments"
                className={({ isActive }) =>
                  isActive && "text-amber-300 underline font-semibold"
                }
              >
                Appointments
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          {logout ? (
            <button className="btn btn-soft btn-primary">Login</button>
          ) : (
            <button className="btn btn-soft btn-error">Logout</button>
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
      {menu && (
        <div className=" right-0 md:hidden fixed">
          <ul className="menu bg-base-200 rounded-box w-50 p-4">
            {/* Cancel Button Row */}
            <div className="flex justify-end mb-2">
              <button
                type="button"
                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                onClick={() => setMenu(false)}
              >
                ❌
              </button>
            </div>

            {/* Menu Items */}
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
