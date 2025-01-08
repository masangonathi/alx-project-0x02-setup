import React from 'react';
import Link from 'next/link';


const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 p-4">
            <nav className="container mx-auto">
            <ul className="flex space-x-4">
                <li>
                <Link href="/home">
                    <span className="text-white hover:text-gray-400">Home</span>
                </Link>
                </li>
                <li>
                <Link href="/about">
                    <span className="text-white hover:text-gray-400">About</span>
                </Link>
                </li>
                <li>
                <Link href="/posts">
                    <span className="text-white hover:text-gray-400">Posts</span>
                </Link>
                </li>
                <li>
                <Link href="/users">
                    <span className="text-white hover:text-gray-400">Users</span>
                </Link>
                </li>
            </ul>
            </nav>
        </header>
    );
};

export default Header;
