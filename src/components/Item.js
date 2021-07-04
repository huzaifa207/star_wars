import { Link } from "react-router-dom";

import "./styles/item.css";

let Item = ({ obj, category, id }) => {
  return (
    <li className="people-container">
      <p className="people-object">{obj.name ? obj.name : obj.title}</p>
      <Link to={`/details/${category}/${id + 1}`}>
        <button className="people-button">Full Details</button>
      </Link>
    </li>
  );
};

export default Item;
