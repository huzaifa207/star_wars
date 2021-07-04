import React, { useState, useEffect, useCallback } from "react";

import Loading from "./Loading";
import Item from "./Item";
import Pagination from "./Pagination";

import "./styles/mainContent.css";

let MainContent = (props) => {
  let category = props.category;
  let isLoading = props.isLoading;
  let objects = props.objects;
  let page = props.page;
  let handleLoading = props.handleLoading;
  let handleObjects = props.handleObjects;

  const [count, setCount] = useState(0);
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();

  let pages = Math.floor(count / 10) + (count % 10 === 0 ? 0 : 1);

  let category_name = () => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  let fetch_data = useCallback(async () => {
    handleLoading(true);
    let url = `https://swapi.dev/api/${category}/?page=${page}`;
    let response = await fetch(url);
    let data = await response.json();
    setCount(data["count"]);
    setNext(data["next"]);
    setPrevious(data["previous"]);
    handleObjects(data["results"]);
    handleLoading(false);
  }, [category, page, handleLoading, handleObjects]);

  useEffect(() => {
    fetch_data();
  }, [category, page, fetch_data]);

  let renderable_objects = objects.map((obj, index) => (
    <Item
      key={(page - 1) * 10 + index}
      id={(page - 1) * 10 + index}
      category={category}
      obj={obj}
    />
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
