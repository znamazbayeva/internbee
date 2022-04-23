import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import "./SideBar.css";

function SideBar({ data }) {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <nav className={sidebar ? "side-menu active" : "side-menu"}>
        <ul className="side-menu-items" onClick={showSidebar}>
          {data.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default SideBar;
