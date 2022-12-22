/** @format */

import React from 'react';

function Footer() {
  return (
    <footer className="container mx-auto my-4 flex flex-col justify-center px-6 text-center text-xs text-slate-500">
      <p className="mb-2">
        React-based{' '}
        <a
          className="whitespace-nowrap hover:underline"
          href="https://news.ycombinator.com"
        >
          {' '}
          Hacker News{' '}
        </a>{' '}
        clone &#9883;
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

export default Footer;
