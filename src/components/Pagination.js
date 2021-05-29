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
      onClick={() => handlePage(props.page - 1)}
    >
      <FontAwesomeIcon icon={faAngleDoubleLeft} />
    </button>
  );

  for (let i = 1; i <= pages; i++) {
    buttons.push(
      <button
        onClick={() => {
          console.log(i);
          handlePage(i);
        }}
        key={i}
        className="pagination-button"
      >
        {i}
      </button>
    );
  }

  buttons.push(
    <button
      key={99}
      className="pagination-button"
      disabled={!props.next && true}
      onClick={() => handlePage(props.page + 1)}
    >
      <FontAwesomeIcon icon={faAngleDoubleRight} />
    </button>
  );
  return <div className="pagination">{buttons}</div>;
};

export default Pagination;
