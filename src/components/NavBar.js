import React from "react";

import "./styles/navbar.css";

let NavBar = (props) => {
  let active_category = props.category;

  let set_active_category = (category) => {
    props.handleClick(category);
  };

  return (
    <nav className="navbar">
      <ul className="categories_list">
        <li className={active_category === "films" ? "active-category" : null}>
          <button onClick={() => set_active_category("films")}>Films</button>
        </li>
        <li className={active_category === "people" ? "active-category" : null}>
          <button onClick={() => set_active_category("people")}>People</button>
        </li>
        <li
          className={active_category === "planets" ? "active-category" : null}
        >
          <button onClick={() => set_active_category("planets")}>
            Planets
          </button>
        </li>
        <li
          className={active_category === "species" ? "active-category" : null}
        >
          <button onClick={() => set_active_category("species")}>
            Species
          </button>
        </li>
        <li
          className={active_category === "starships" ? "active-category" : null}
        >
          <button onClick={() => set_active_category("starships")}>
            Starships
          </button>
        </li>
        <li
          className={active_category === "vehicles" ? "active-category" : null}
        >
          <button onClick={() => set_active_category("vehicles")}>
            Vehicles
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
