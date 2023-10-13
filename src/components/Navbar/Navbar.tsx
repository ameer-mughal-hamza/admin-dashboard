import "./Navbar.scss";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="logo.svg" alt="" />
          <span>Admin Dashboard</span>
        </div>
        <ul className="icons">
          <img src="/search.svg" alt="icon" />
          <img src="/app.svg" alt="icon" />
          <img src="/expand.svg" alt="icon" />
          <div className="notification">
            <img src="/notifications.svg" alt="" />
            <span>1</span>
          </div>
          <div className="user">
            <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            <span>Jane</span>
          </div>
          <img src="/settings.svg" alt="" />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
