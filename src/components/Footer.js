/** @format */

import React from 'react';

function Header() {
    return (
        <footer className="container mx-auto my-4 flex flex-row justify-center">
            <div className="text-center text-xs text-slate-500">
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
                <br />
                <a
                    className="hover:underline"
                    href="https://github.com/dsoreilly/hn-react"
                >
                    View the source on GitHub
                </a>
            </div>
        </footer>
    );
}

export default Header;
