import React from 'react';
import Pack from './Pack';
import {StyledPack} from '../styles/packStyles/Pack.styled';
import {packType, pack} from '../types'






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

const packs: pack[] = [
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

const listItems = packs.map((item: pack, index: number) => (
	<Pack {...item} key={index}></Pack>
));

function PackList() {
	return <StyledPack>{listItems}</StyledPack>;
}

export default PackList;
