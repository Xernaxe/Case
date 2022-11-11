import React from 'react';
import {StyledPack} from '../styles/packStyles/Pack.styled';
import { StyledWrapper } from '../styles/packStyles/PackWrapper.styled'
import {StyledImg} from '../styles/packStyles/PackImg.styled';
import { StyledTextWrapper } from '../styles/packStyles/PackTextWrapper.styled'
import { StyledHeader } from '../styles/packStyles/PackHeader.styled'
import { StyledName } from '../styles/packStyles/PackName.styled'
import { StyledPrice } from '../styles/packStyles/PackPrice.styled'

type packType = {
	[key: string]: {
		name: string;
		price: number;
		image: string;
	};
};

type Pack = {
	type: {
		name: string;
		price: number;
		image: string;
	};
	count: number;
	currency: string;
};

const packTypes: packType = {
	starterPack: {
		name: 'Basic Beast Starter Pack',
		price: 10,
		image: '/starter.png',
	},
	cursedBlackPack: {
		name: 'Cursed Black Pack',
		price: 300,
		image: '/cursed.png',
	},
	shinyGoldPack: {
		name: 'Shiny Gold',
		price: 999,
		image: '/shiny.png',
	},
};

const packs: Pack[] = [
	{
		type: packTypes.starterPack,
		count: 4,
		currency: 'USD',
	},
	{
		type: packTypes.cursedBlackPack,
		count: 2,
		currency: 'USD',
	},
	{
		type: packTypes.shinyGoldPack,
		count: 1,
		currency: 'USD',
	},
];

const listItems = packs.map((item: Pack, index: number) => (
	<StyledWrapper key={index}>
		<StyledImg src={item.type.image} alt={item.type.name} />
		<StyledTextWrapper>
			<StyledHeader>You received {item.count} {item.count > 1 ? 'packs.' : 'pack.'} </StyledHeader>
			<StyledName>{item.type.name}</StyledName>
			<StyledPrice>
				{item.currency} ${item.type.price * item.count}
			</StyledPrice>
		</StyledTextWrapper>
	</StyledWrapper>
));

function Pack() {
	return <><StyledPack>{listItems}</StyledPack></>;
}

export default Pack;
