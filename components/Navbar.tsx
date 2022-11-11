import { StyledNav } from '../styles/navbarStyles/Navbar.styled';
import { StyledUl } from '../styles/navbarStyles/NavUL.styled';
import { StyledA } from '../styles/navbarStyles/NavA.styled';
import { StyledLi } from '../styles/navbarStyles/NavLI.styled';
import React from 'react';

function Navbar() {
	return (
		<StyledNav>
			<StyledUl>
				<StyledLi><StyledA>Home</StyledA></StyledLi>
				<StyledLi><StyledA>Store</StyledA></StyledLi>
				<StyledLi><StyledA>Marketplace</StyledA></StyledLi>
				<StyledLi><StyledA>Dexicon</StyledA></StyledLi>
			</StyledUl>
		</StyledNav>
	);
}

export default Navbar;
