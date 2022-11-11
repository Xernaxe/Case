import styled from 'styled-components';

export const StyledBorderX = styled.div`
	position: absolute;
	top: -3px;
  left: 50%;
  transform: translateX(-50%);
	height: 3px;
	width: 100%;
	background: #9D5112;
	z-index: 1002;
  :nth-child(4){
    right: 0;
    top: auto;
    bottom: -3px;
  }
`;
