import { StyledNav } from '../styles/navbarStyles/Navbar.styled';
import { StyledUL } from '../styles/navbarStyles/NavUL.styled';
import { StyledA } from '../styles/navbarStyles/NavA.styled';
import { StyledLI } from '../styles/navbarStyles/NavLI.styled';
import React from 'react';

function Navbar() {
	return (
		<StyledNav>
			<StyledUL>
				<StyledLI><StyledA>Home</StyledA></StyledLI>
				<StyledLI><StyledA>Store</StyledA></StyledLI>
				<StyledLI><StyledA>Marketplace</StyledA></StyledLI>
				<StyledLI><StyledA>Dexicon</StyledA></StyledLI>
			</StyledUL>
		</StyledNav>
	);
}

export default Navbar;
