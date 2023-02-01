import { useState } from "react";

import "./NavBar.css";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsBookmarkCheck, BsPencil } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";

function NavBar() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#header"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#header" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsBookmarkCheck />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BsPencil />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageRoundedDetail />
      </a>
    </nav>
  );
}

export default NavBar;
