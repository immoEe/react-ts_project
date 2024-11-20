import React, { useState } from "react";
import { Search, Shopbag, User } from "../../img/index";
import { useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const currentUrl = useLocation();
  const [showSearch, setSearch] = useState(false);
  return (
    <div className={currentUrl.pathname === "/" ? "header" : "header-red"}>
      <ul className="navbar">
        <li>
          <a
            href="/about"
            className={
              currentUrl.pathname === "/" ? "link-header" : "link-header-red"
            }
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/shop"
            className={
              currentUrl.pathname === "/" ? "link-header" : "link-header-red"
            }
          >
            Shop
          </a>
        </li>
        <li>
          <a
            href="/"
            className={
              currentUrl.pathname === "/" ? "link-header" : "link-header-red"
            }
          >
            Contact
          </a>
        </li>
      </ul>
      <ul className="navbar-img">
        {showSearch === true && (
          <li>
            <input
              type="text"
              placeholder="Search"
              className={
                currentUrl.pathname === "/"
                  ? "search-header"
                  : "search-header-red"
              }
            />
          </li>
        )}
        <li>
          <img
            src={Search}
            onClick={() => setSearch(!showSearch)}
            alt="Search"
            className={
              currentUrl.pathname === "/" ? "img-header" : "img-header-red"
            }
          />
        </li>
        <li>
          <img
            src={Shopbag}
            alt="Shopbag"
            className={
              currentUrl.pathname === "/" ? "img-header" : "img-header-red"
            }
          />
        </li>
        <li>
          <img
            src={User}
            alt="User"
            className={
              currentUrl.pathname === "/" ? "img-header" : "img-header-red"
            }
          />
        </li>
      </ul>
    </div>
  );
};

export default Header;
