import React from 'react'
import { StyledWrapper } from '../styles/packStyles/PackWrapper.styled'
import {StyledImg} from '../styles/packStyles/PackImg.styled';
import { StyledTextWrapper } from '../styles/packStyles/PackTextWrapper.styled'
import { StyledHeader } from '../styles/packStyles/PackHeader.styled'
import { StyledName } from '../styles/packStyles/PackName.styled'
import { StyledPrice } from '../styles/packStyles/PackPrice.styled'
import { pack} from '../types'

function Pack({type, count, currency}:pack) {
  const {image, name, price} = type
  return (
    <StyledWrapper>
		<StyledImg src={image} alt={name} />
		<StyledTextWrapper>
			<StyledHeader>You received {count} {count > 1 ? 'packs.' : 'pack.'} </StyledHeader>
			<StyledName>{name}</StyledName>
			<StyledPrice>
				{currency} ${price * count}
			</StyledPrice>
		</StyledTextWrapper>
	</StyledWrapper>
  )
}

export default Pack