import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #EAEAEB;
height: 5vh;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-family: 'Courier New', Courier, monospace;
font-weight: 650;
&.active {
	color: #9999FF;
}

`;

export const Bars = styled(FaBars)`
display: none;
color: #9999FF;
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
white-space: nowrap; */
`;