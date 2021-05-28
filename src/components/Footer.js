import "./styles/footer.css";

let Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-content">
        <p>
          Created by <a href="https://github.com/huzaifa207">Huzaifa Khan</a>
        </p>
        <p>
          Data from <a href="https://swapi.dev/">Star Wars Api (swapi)</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
