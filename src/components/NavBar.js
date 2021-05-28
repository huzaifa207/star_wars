import React from "react";

import "./styles/navbar.css";

let NavBar = (props) => {
  let active_category = props.category;

  let set_active_category = (category) => {
    props.handleClick(category);
  };

  let set_active_page = (page) => {
    props.handlePage(page);
  };

  return (
    <nav className="navbar">
      <ul className="categories_list">
        <li className={active_category === "films" ? "active-category" : null}>
          <button
            onClick={() => {
              set_active_category("films");
              set_active_page(1);
            }}
          >
            Films
          </button>
        </li>
        <li className={active_category === "people" ? "active-category" : null}>
          <button
            onClick={() => {
              set_active_category("people");
              set_active_page(1);
            }}
          >
            People
          </button>
        </li>
        <li
          className={active_category === "planets" ? "active-category" : null}
        >
          <button
            onClick={() => {
              set_active_category("planets");
              set_active_page(1);
            }}
          >
            Planets
          </button>
        </li>
        <li
          className={active_category === "species" ? "active-category" : null}
        >
          <button
            onClick={() => {
              set_active_category("species");
              set_active_page(1);
            }}
          >
            Species
          </button>
        </li>
        <li
          className={active_category === "starships" ? "active-category" : null}
        >
          <button
            onClick={() => {
              set_active_category("starships");
              set_active_page(1);
            }}
          >
            Starships
          </button>
        </li>
        <li
          className={active_category === "vehicles" ? "active-category" : null}
        >
          <button
            onClick={() => {
              set_active_category("vehicles");
              set_active_page(1);
            }}
          >
            Vehicles
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
