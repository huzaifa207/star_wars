import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/pagination.css";

let Pagination = (props) => {
  let pages = props.pages;
  let handlePage = props.handlePage;
  let buttons = [];

  buttons.push(
    <button
      key={0}
      className="pagination-button"
      disabled={!props.previous && true}
    >
      <FontAwesomeIcon icon={faAngleDoubleLeft} />
    </button>
  );

  let i = 1;
  for (i; i <= pages; i++) {
    buttons.push(
      <button
        onClick={() => handlePage(i)}
        key={i}
        className="pagination-button"
      >
        {i}
      </button>
    );
  }

  buttons.push(
    <button key={i} className="pagination-button">
      <FontAwesomeIcon icon={faAngleDoubleRight} />
    </button>
  );
  return <div className="pagination">{buttons}</div>;
};

export default Pagination;
