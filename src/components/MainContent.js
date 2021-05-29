import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Loading from "./Loading";
import PeopleContent from "./PeopleContent";
import Pagination from "./Pagination";

import "./styles/mainContent.css";

let MainContent = (props) => {
  let category = props.category;
  let isLoading = props.isLoading;
  let objects = props.objects;
  let page = props.page;

  const [count, setCount] = useState(0);
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();

  let pages = Math.floor(count / 10) + (count % 10 === 0 ? 0 : 1);
  let fetch_data = () => {
    let handleLoading = props.handleLoading;
    let handleObjects = props.handleObjects;
    handleLoading(true);
    fetch(`https://swapi.dev/api/${category}/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        handleLoading(false);
        setCount(data["count"]);
        setNext(data["next"]);
        setPrevious(data["previous"]);
        return handleObjects(data["results"]);
      })
      .catch((error) => console.log(error));
  };

  let category_name = () => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  useEffect(() => {
    fetch_data();
  }, [category, page]);

  let renderable_objects = objects.map((obj) => (
    <PeopleContent key={uuidv4()} obj={obj} />
  ));
  return (
    <div className="main-container">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <p className="total_count">
            Total {category_name()} : {count}
          </p>
          <ul className="object-container">{renderable_objects}</ul>
          <Pagination
            pages={pages}
            category={category}
            handlePage={props.handlePage}
            next={next}
            previous={previous}
            page={page}
          />
        </div>
      )}
    </div>
  );
};

export default MainContent;
