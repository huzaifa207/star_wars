import "./styles/item.css";

let Item = (props) => {
  return (
    <li className="people-container">
      <p className="people-object">
        {props.obj.name ? props.obj.name : props.obj.title}
      </p>
      <button className="people-button">Full Details</button>
    </li>
  );
};

export default Item;
