import "@fortawesome/fontawesome-free";
//component
//css
import "./navheader.css";
const NavHeader = (props) => {
  return (
    <div className="navheader-section">
      <div className="navheader-links container">
        <span>
          <i className="fa fa-home"></i>
        </span>
        <a href="#/vehicles/home">Home </a>/
        {props.parent ? <a href={props.parentUrl}> {props.parentName}</a> : ""}
        {props.parent ? " /" : ""}
        <span> {props.pageName}</span>
      </div>
    </div>
  );
};

export default NavHeader;
