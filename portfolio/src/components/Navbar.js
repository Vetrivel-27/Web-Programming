import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineMail, AiOutlineCode } from "react-icons/ai";

function NavBar({ navigateTo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const styles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 900
  }
  return (
    <nav className="navbar" style = {styles}>
      <div className="navContainer">
        <ul className={menuOpen ? "navLinksOpen" : "navLinks"}>
          <li>
            <button onClick={() => { setMenuOpen(false); navigateTo('home'); }}>
              <AiOutlineHome /> Home
            </button>
          </li>
          <li>
            <button onClick={() => { setMenuOpen(false); navigateTo('about'); }}>
              <AiOutlineUser /> About
            </button>
          </li>
          <li>
            <button onClick={() => { setMenuOpen(false); navigateTo('skills')}}>
              <AiOutlineCode /> Skills
            </button>
          </li>
          <li>
            <button onClick={() => { setMenuOpen(false); navigateTo('contact')}}>
              <AiOutlineMail /> Contact
            </button>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
