import {Link, useMatch} from "react-router-dom";

import React from 'react';

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch(to);
    console.log({match});

    return (
        <Link
            to={to}
            {...props}
            style={{
                color: match ? 'var(--color-active)' : 'white'
            }}
        >
            {children}
        </Link>
    );
};

export default CustomLink;