import React from "react";
import Link from "next/link";
import { APP_NAME } from "../config";
import { NavLink } from "reactstrap";
import Search from "./Search";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/">
          <NavLink style={{fontSize: '25px'}} className="font-weight-bold">{APP_NAME}</NavLink>
        </Link>
        <ul className="navbar-nav mr-auto">
          <Link href="/myfavorite">
            <NavLink style={{ cursor: "pointer" }}>My Favorite</NavLink>
          </Link>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabIndex={-1}
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
        <Search />
      </nav>
    </div>
  );
};

export default Header;
