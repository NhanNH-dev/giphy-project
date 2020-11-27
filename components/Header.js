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
          <NavLink style={{ fontSize: "25px" }} className="font-weight-bold">
            
            
            {APP_NAME}
          </NavLink>
        </Link>
        <ul className="navbar-nav marginUl">
          <Link href="/myfavorite">
            <NavLink className="navItem myfavorite-animate">My Favorite</NavLink>
          </Link>
        </ul>
        <Search />
      </nav>
    </div>
  );
};

export default Header;
