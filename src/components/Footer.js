/** @format */

import React from 'react';

function Header() {
    return (
        <footer className="container mx-auto my-4 flex flex-col justify-center px-6 text-center text-xs text-slate-500">
            <p className="mb-2">
                React-based{' '}
                <a
                    className="hover:underline"
                    href="https://news.ycombinator.com"
                >
                    Hacker News
                </a>{' '}
                clone using the{' '}
                <a
                    className="hover:underline"
                    href="https://github.com/HackerNews/API"
                >
                    official Firebase API &#9883;
                </a>
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
