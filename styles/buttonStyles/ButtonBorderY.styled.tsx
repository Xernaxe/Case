import styled from 'styled-components';

export const StyledBorderY = styled.div`
	position: absolute;
	top: 50%;
	left: -3px;
	height: 100%;
  transform: translateY(-50%);
	width: 3px;
	background: #9D5112;
	z-index: 100;
  :nth-child(2){
    top: 50%;
    right: -3px;
    left: auto;
  }
`;
