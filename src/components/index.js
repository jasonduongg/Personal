import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements.js";
import './style.css';
const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
			<div id = "farleft">
        <NavLink to="/" activeStyle>
			Main
		</NavLink>
		</div>
        <NavLink to="/projects" activeStyle>
			Project
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;