import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="mx-2 flex flex-row">
        <li className="mx-2">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "block border-b-2 border-slate-100 py-6 text-slate-100 hover:text-orange-300 dark:text-orange-500"
                : "block border-b-2 border-transparent py-6 text-slate-100 hover:text-orange-300 dark:text-orange-500"
            }
            to="/newest"
          >
            New
          </NavLink>
        </li>
        <li className="mx-2">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "block border-b-2 border-slate-100 py-6 text-slate-100 hover:text-orange-300 dark:text-orange-500"
                : "block border-b-2 border-transparent py-6 text-slate-100 hover:text-orange-300 dark:text-orange-500"
            }
            to="/ask"
          >
            Ask
          </NavLink>
        </li>
        <li className="mx-2 ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "block border-b-2 border-slate-100 py-6 text-slate-100 hover:text-orange-300 dark:text-orange-500"
                : "block border-b-2 border-transparent py-6 text-slate-100 hover:text-orange-300 dark:text-orange-500"
            }
            to="/show"
          >
            Show
          </NavLink>
        </li>
        <li className="mx-2">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "block border-b-2 border-slate-100 py-6 text-slate-100 hover:text-orange-300 dark:text-orange-500"
                : "block border-b-2 border-transparent py-6 text-slate-100 hover:text-orange-300 dark:text-orange-500"
            }
            to="/jobs"
          >
            Jobs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
