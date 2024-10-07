import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

interface NavBarProps {
    brandName: string;
    navItems: { name: string, path: string }[]; 
}

function NavBar({ brandName, navItems }: NavBarProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                    <span className="fw-bolder fs-4">{brandName}</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse align-items-start flex-column flex-md-row" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-md-1">
                        {navItems.map((item, index) => (
                            <li key={item.name} className="nav-item" onClick={() => setSelectedIndex(index)}>
                                <Link className={selectedIndex === index ? "nav-link active fw-bold" : "nav-link"} to={item.path}>
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
