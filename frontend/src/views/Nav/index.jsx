import React, { useState } from "react";
import {
  Navlink,
  NavLogo,
  NavWrapper,
  BakeryLogo,
  ProfileIcon,
  ProfileIconWrap,
  ResponsiveNav,
} from "../../styles/Nav";
import Logo from "../../assests/HeroImages/Logo.svg";
import { faCartShopping, faBurger, faXmark } from "@fortawesome/free-solid-svg-icons";


const Nav = ({ logo, navLinks }) => {
  const baseURL = "http://localhost:1337";
  const [nav, setNav] = useState(false);

  nav
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "auto");

  // function scrollFunc(e)
  // {
  //   console.log(e.target.getElementById("top-products"));

  // }

  // document.addEventListener("scroll", scrollFunc)

  return (
    <NavWrapper>
      <NavLogo>
        <BakeryLogo src={`${baseURL}${logo}`} alt="Logo" />
      </NavLogo>
      <Navlink>
        {navLinks.map((link) => (
          <a href={link.URL} key={link.id}>
            {link.Name}
          </a>
        ))}
      </Navlink>
      <ResponsiveNav nav={nav}>
        {navLinks.map((link) => (
          <a href={link.URL} key={link.id}>
            {link.Name}
          </a>
        ))}
        <div onClick={() => setNav(!nav)}>
          <ProfileIcon icon={faXmark} /> 
        </div>
      </ResponsiveNav>

      <ProfileIconWrap>
        <ProfileIcon icon={faCartShopping} />
        <ProfileIcon icon={faBurger} onClick={() => setNav(!nav)} />
      </ProfileIconWrap>
    </NavWrapper>
  );
};

export default Nav;
