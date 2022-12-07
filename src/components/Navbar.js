/** @format */

import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul className="mx-2 flex flex-row">
        <li className="mx-2 text-slate-100 dark:text-orange-500">
          <NavLink className="hover:text-orange-300" to="/newest">
            New
          </NavLink>
        </li>
        <li className="mx-2 text-slate-100 dark:text-orange-500">
          <NavLink className="hover:text-orange-300" to="/ask">
            Ask
          </NavLink>
        </li>
        <li className="mx-2 text-slate-100 dark:text-orange-500">
          <NavLink className="hover:text-orange-300" to="/show">
            Show
          </NavLink>
        </li>
        <li className="mx-2 text-slate-100 dark:text-orange-500">
          <NavLink className="hover:text-orange-300" to="/jobs">
            Jobs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
