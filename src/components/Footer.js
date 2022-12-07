/** @format */

import React from 'react';

function Header() {
  return (
    <footer className="container mx-auto my-4 flex flex-col justify-center px-6 text-center text-xs text-slate-500">
      <p className="mb-2">
        React-based{' '}
        <a
          className="whitespace-nowrap hover:underline"
          href="https://news.ycombinator.com"
        >
          Hacker News
        </a>{' '}
        clone using the official{' '}
        <span className="whitespace-nowrap">
          <a
            className=" hover:underline"
            href="https://github.com/HackerNews/API"
          >
            Firebase API
          </a>{' '}
          &#9883;
        </span>
      </p>
      <p>
        <a
          className="hover:underline"
          href="https://github.com/dsoreilly/hn-react"
        >
          View on GitHub
        </a>
      </p>
    </footer>
  );
}

export default Header;
