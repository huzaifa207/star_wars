import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Loading from "./Loading";
import PeopleContent from "./PeopleContent";

import "./styles/mainContent.css";

let MainContent = (props) => {
  let category = props.category;
  let isLoading = props.isLoading;
  let objects = props.objects;

  let [count, setCount] = useState(0);
  let [next_link, set_next_link] = useState("");

  let fetch_data = () => {
    let handleLoading = props.handleLoading;
    let handleObjects = props.handleObjects;
    handleLoading(true);
    fetch(`https://swapi.dev/api/${category}/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        handleLoading(false);
        setCount(data["count"]);
        set_next_link(data["next"]);
        return handleObjects(data["results"]);
      })
      .catch((error) => console.log(error));
  };

  let category_name = () => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  useEffect(() => {
    fetch_data();
  }, [category]);

  let renderable_objects = objects.map((obj) => (
    <PeopleContent key={uuidv4()} obj={obj} />
  ));
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <p className="total_count">
            Total {category_name()} : {count}
          </p>
          <ul className="object-container">{renderable_objects}</ul>
        </div>
      )}
    </div>
  );
};

export default MainContent;
