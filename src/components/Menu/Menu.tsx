import { Link } from "react-router-dom";
import "./Menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((m) => {
        return (
          <>
            <div className="item" key={m.id}>
              <span className="title">{m.title}</span>
              {m.listItems.map((listItem) => {
                return (
                  <>
                    <Link to={listItem.url} className="list-item">
                      <img src={listItem.icon} alt="" />
                      <span className="list-item-title">{listItem.title}</span>
                    </Link>
                  </>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Menu;
