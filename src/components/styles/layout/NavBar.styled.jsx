import styled, { keyframes, css } from "styled-components";

const navItemFadeOut = keyframes`
from{
  opacity:1;
  transform:translateY(10px);
  }
  to{
  opacity:0;
  transform:translate(0px);
  display:none;
  }
`;

const navItemFadeIn = keyframes`
from{
  opacity:0;
  }
  to{
  opacity:1;
  }
`;

const navItemAnimationOut = ({ index }) => css`
  animation: ${navItemFadeOut} 0.5s ease ${index / 7 + 0.5}s;
`;
const navItemAnimationIn = ({ index }) => css`
  animation: ${navItemFadeIn} 0.5s ease-in-out;
`;

const navItemColumnOut = keyframes`
from{
  opacity:0;
  transform:translateY(0px);
  }
  to{
  opacity:0;
  transform:translateY(0px);
  }
`;

const navItemColumnIn = keyframes`
from{
  opacity:0;
  transform:translate(300px);
  }
  to{
  opacity:1;
  transform:translate(-1px);
  }
`;

const navItemAnimationOutColumn = ({ index }) => css`
  animation: ${navItemColumnOut} 2s ease  ${index / 7 + 0.5}s;
`;
const navItemAnimationInColumn = ({ index }) => css`
  animation: ${navItemColumnIn} 2s ease;
`;

export const Nav = styled.nav`
  height: ${({ menuOpen }) => (menuOpen ? "100%" : "115px")};
  width: 100%;
  padding: 0 30px;
  display: Flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background: ${({ theme }) => theme.colors.black};
  z-index: 101;
  transition: all 1.3s ease-in-out;
`;

export const Logo = styled.p`
  font-size: ${({ theme }) => theme.text.xl};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: 900;
  margin-left: 2rem;
  top:30px;
  position:fixed;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size:${({ theme }) => theme.text.s};
    margin:0;
}

  span {
    font-size: ${({ theme }) => theme.text.xs};
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: ${({ theme }) => theme.text.m};
  flex-wrap: wrap;
  gap:20px

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display:none;
   
  }
}
`;

export const NavListColumn = styled.ul`
display:flex;
flex-direction:column;
gap:50px;
font-size:${({ theme }) => theme.text.xl};
width:100%;
text-align:right;
@media (max-width: ${({ theme }) => theme.mobile}) {
  font-size:${({ theme }) => theme.text.s};
}


`
export const NavItemStyledColumn = styled.li`
border-bottom:1px solid grey;
${({ menuOpen }) => (menuOpen ? navItemAnimationInColumn: navItemAnimationOutColumn)}

`
export const NavLinkColumn = styled.a`
text-transform: uppercase;
color: ${({ theme }) => theme.colors.white};
letter-spacing: 1.5px;
`



export const NavItemStyled = styled.li`
  margin: 0.2rem 0.7rem;
  ${({ menuOpen }) => (menuOpen ? navItemAnimationOut : navItemAnimationIn)}
`;

export const NavLink = styled.a`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grey};
  letter-spacing: 1.5px;
  

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display:none;
  }

  &::after {
    content: "";
    display: block;
    height: 1px;
    width: 0%;
    background: ${({ theme }) => theme.colors.white};
    transition: all ease-in-out 300ms;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    transition: all ease-in-out 300ms;
    &::after {
      width: 100%;
    }
  }
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  display: flex;
  gap: 5px;
  margin-left: 7rem;
  margin-right: 1.5rem;
`;

export const DotOne = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
 
`;

export const DotTwo = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
`;

export const DotThree = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
`;
