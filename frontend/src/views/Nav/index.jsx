import React, { useContext, useEffect, useState } from "react";
import {
  Navlink,
  NavLogo,
  NavWrapper,
  BakeryLogo,
  ProfileIcon,
  ProfileIconWrap,
  ResponsiveNav,
} from "../../styles/Nav";

import {
  faCartShopping,
  faBurger,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Nav = ({ logo, navLinks }) => {
  const baseURL = "http://localhost:1337";
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  nav
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "auto");

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("top-products");
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCart = () => {
    const prodCart = document.querySelector(".show-cart");
    prodCart.classList.add("openCart");
  };

  return (
    <NavWrapper scrolled={scrolled}>
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
      {nav && (
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
      )}

      <ProfileIconWrap>
        <ProfileIcon icon={faCartShopping} onClick={handleCart} />
        <ProfileIcon icon={faBurger} onClick={() => setNav(!nav)} />
      </ProfileIconWrap>
    </NavWrapper>
  );
};

export default Nav;
