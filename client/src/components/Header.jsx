import { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="header" style={{ padding: "16px", textAlign: "center" }}>
        <a href="#" className="logo" style={{ textDecoration: "none", color: "#333", fontSize: "24px" }}>
          {" "}
          <i className="fas fa-utensils"></i> PostPlaza{" "}
        </a>

        <nav className="navbar" style={{ display: isMenuOpen ? "none" : "flex", justifyContent: "center", marginTop: "16px", flexWrap: "wrap" }}>
          <Link to="/" style={{ margin: "0 8px", textDecoration: "none", color: "#333" }}>Home</Link>
          <Link to="/author" style={{ margin: "0 8px", textDecoration: "none", color: "#333" }}>Author</Link>
          <Link to="/mypost" style={{ margin: "0 8px", textDecoration: "none", color: "#333" }}>My Post</Link>
          <Link to="/myaccount" style={{ margin: "0 8px", textDecoration: "none", color: "#333" }}>My Account</Link>
        </nav>

        <div className="sidebar" style={{ display: isMenuOpen ? "block" : "none", position: "fixed", top: 0, left: 0, width: "200px", backgroundColor: "#fff", height: "100vh", zIndex: 999 }}>
          <nav className="sidebar-menu" style={{ paddingTop: "60px", textAlign: "center" }}>
            <Link to="/" style={{ display: "block", margin: "8px 0", textDecoration: "none", color: "#333" }}>Home</Link>
            <Link to="/author" style={{ display: "block", margin: "8px 0", textDecoration: "none", color: "#333" }}>Author</Link>
            <Link to="/mypost" style={{ display: "block", margin: "8px 0", textDecoration: "none", color: "#333" }}>My Post</Link>
            <Link to="/myaccount" style={{ display: "block", margin: "8px 0", textDecoration: "none", color: "#333" }}>My Account</Link>
          </nav>
        </div>

        <div className="icons" style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
          <div id="search-btn" style={{ margin: "0 8px", cursor: "pointer" }}><CiSearch /></div>
          <div id="cart-btn" style={{ margin: "0 8px", cursor: "pointer" }}><Link to="/myaccount" style={{ textDecoration: "none", color: "#333" }}><MdAccountCircle /></Link></div>
          <div id="login-btn" style={{ margin: "0 8px" }}><Link to="/login" style={{ textDecoration: "none", color: "#333" }}><IoIosLogOut /></Link></div>
          <div id="login-btn" style={{ margin: "0 8px" }}><IoAddCircleOutline /></div>
          <div id="menu-btn" style={{ margin: "0 8px", cursor: "pointer" }} onClick={toggleMenu}><CiMenuFries /></div>
        </div>
      </header>
      <br /><br /><br /><br /><br />
    </div>
  );
};

export default Header;
