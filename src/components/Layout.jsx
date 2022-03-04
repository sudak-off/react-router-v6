import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <Link to="/">Home</Link>
                <Link to="/blog">Post</Link>
                <Link to="/about">About</Link>
            </header>

            <Outlet />
            // вся динамика будет здесь

            <footer>2022</footer>
        </>
    );
};

export default Layout;