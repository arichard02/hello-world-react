import "./Header.css";

function Header({name}) {
  return (
    <header className="Header">
      <h2>Welcome {name}</h2>
      <div className="Menu">
        <a href="#">Dashboard</a>
        <a href="#">Favorite</a>
        <a href="#">Profile</a>
      </div>
    </header>
  );
}

export default Header;
