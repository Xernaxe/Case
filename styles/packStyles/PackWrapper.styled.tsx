import styled from 'styled-components';

export const StyledWrapper = styled.div`
	display: flex;
	align-items: center;
  padding: 1.9rem 0;
  border-bottom: 1px solid #595959;
  cursor: pointer;
  transition: scale 0.5s;
  &:hover img, &:hover div{
    scale: 1.1
  };
`;
