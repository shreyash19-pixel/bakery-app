import React from 'react'
import {
  Navlink,
  NavLogo,
  NavWrapper,
  BakeryLogo,
  ProfileIcon,
} from "../../styles/Nav";
import Logo from "../../assests/HeroImages/Logo.svg";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {

    const Links = [
      { id: "#Home", name: "Home" },
      { id: "#contact", name: "Contact Us" },
      { id: "#About", name: "About" },
      { id: "#profile", name: "Profile" },
    ];

  return (
    <NavWrapper>
      <NavLogo>
        <BakeryLogo src={Logo} alt="Logo" />
      </NavLogo>
      <Navlink>
        {Links.map((link, index) => (
          <a href={link.id} key={index}>
            {link.name}
          </a>
        ))}
      </Navlink>
      <ProfileIcon icon={faCartShopping} />
    </NavWrapper>
  );
}

export default Nav