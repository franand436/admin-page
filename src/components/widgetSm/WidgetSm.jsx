import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";

export default function widgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Newly Joined Members</span>
      <br />
      <ul className="widgetSmList">
      <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Andrade 😉</span>
            <span className="widgetSmUserTitle">Professional Wife</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/> Display
          </button>
        </li><li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Andrade 😉</span>
            <span className="widgetSmUserTitle">Professional Wife</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/> Display
          </button>
        </li><li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Andrade 😉</span>
            <span className="widgetSmUserTitle">Professional Wife</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/> Display
          </button>
        </li><li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Andrade 😉</span>
            <span className="widgetSmUserTitle">Professional Wife</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/> Display
          </button>
        </li><li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Andrade 😉</span>
            <span className="widgetSmUserTitle">Professional Wife</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/> Display
          </button>
        </li>
      </ul>
    </div>
  );
}
