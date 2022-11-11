import React from 'react';
import { StyledButton } from '../styles/buttonStyles/Button.styled';
import { StyledBorderY } from '../styles/buttonStyles/ButtonBorderY.styled';
import { StyledBorderX } from '../styles/buttonStyles/ButtonBorderX.styled';
import { StyledText } from '../styles/buttonStyles/ButtonText.styled';

function Button() {
	return (
		<StyledButton>
			<StyledBorderY></StyledBorderY>
			<StyledBorderY></StyledBorderY>
			<StyledBorderX></StyledBorderX>
			<StyledBorderX></StyledBorderX>
			<StyledText>Claim All</StyledText>
		</StyledButton>
	);
}

export default Button;
