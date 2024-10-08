
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavBarProps {
    brandName: string;
    navItems: { name: string, path: string }[];
}

function NavBar({ brandName, navItems }: NavBarProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <nav className="navbar navbar-expand-md navbar-light shadow fixed-top">  
            <div className="container-fluid">
            <div className="d-flex flex-grow-1">
                <Link className="navbar-brand ms-0" to="/home">
                <span className="fw-bolder fs-3">{brandName}</span>
                </Link>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
            </div>
            <div className="collapse navbar-collapse align-items-start flex-column flex-md-row" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-md-1">
                {navItems.map((item, index) => (
                    <li key={item.name} className="nav-item me-3" onClick={() => setSelectedIndex(index)}>
                    <Link className={selectedIndex === index ? "nav-link active fw-bold text-white" : "nav-link"} to={item.path}>
                        {item.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default NavBar;
