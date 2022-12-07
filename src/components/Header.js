/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="sticky top-0 w-full border-slate-800 bg-orange-500/90 shadow backdrop-blur dark:border-b dark:bg-slate-900/90">
      <div className="container mx-auto flex flex-row p-6">
        <h1 className="font-semibold">
          <Link
            className="text-slate-100 hover:text-orange-300 dark:text-orange-500"
            to="/"
          >
            HN
          </Link>
        </h1>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
