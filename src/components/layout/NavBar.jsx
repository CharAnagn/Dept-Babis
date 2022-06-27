import { useState } from "react";
import {
  Nav,
  Logo,
  NavList,
  NavItemStyled,
  NavLink,
  MenuIcon,
  DotOne,
  DotTwo,
  DotThree,
  NavListColumn,
  NavItemStyledColumn,
  NavLinkColumn
} from "../styles/layout/NavBar.styled";
import { NavItems } from "../data/NavItems";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Nav menuOpen={menuOpen}>
        <div>
          <a href="#home">
            <Logo menuOpen={menuOpen}>
              Dept <span>&reg;</span>
            </Logo>
          </a>
        </div>
      {!menuOpen ? <NavList>
          {NavItems &&
            NavItems.map((navItem, index) => (
              <NavItemStyled key={index} index={index} menuOpen={menuOpen} onClick={() => setMenuOpen(false)}>
                {navItem.text ? (
                  <NavLink href={navItem.href}>{navItem.text}</NavLink>
                ) : null}
              </NavItemStyled>
            ))}
          <MenuIcon menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <DotOne />
            <DotTwo />
            <DotThree />
          </MenuIcon>
        </NavList> : <NavListColumn>
        {NavItems &&
            NavItems.map((navItem, index) => (
              <NavItemStyledColumn key={index} index={index} menuOpen={menuOpen} onClick={() => setMenuOpen(false)}>
                {navItem.text ? (
                  <NavLinkColumn href={navItem.href}>{navItem.text}</NavLinkColumn>
                ) : null}
              </NavItemStyledColumn>
            ))}
          
          </NavListColumn>}
        
      </Nav>
    </>
  );
};
