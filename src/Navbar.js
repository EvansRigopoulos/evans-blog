import React from 'react';
import {Link} from "react-router-dom";

export function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                <Link to="/" >Home</Link>
                </li>
                <li>
                <Link to="/About" >About</Link>
                </li>
                <li>
                <Link to="/ArticlesListPage" >Articles</Link>
                </li>
              
            </ul>
        </nav>
    )
}