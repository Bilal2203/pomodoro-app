import "./Header.css";

const Header = (props) => {
  return (
      <button onClick={props.modalstatus} className="btn">
        <img className="img" src={props.icon} />
        <p className="report">{props.name}</p>
      </button>
  );
};

export default Header;
