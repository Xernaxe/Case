import React from 'react';
import { StyledHeader } from '../styles/headerStyles/Header.styled';
import { StyledH1 } from '../styles/headerStyles/HeaderH1.styled';
import { StyledH2 } from '../styles/headerStyles/HeaderH2.styled';

function Header() {
	return (
		<StyledHeader>
			<StyledH1>My Inbox</StyledH1>
			<StyledH2>Redeem your packs</StyledH2>
		</StyledHeader>
	);
}

export default Header;
