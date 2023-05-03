import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const WhiteLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const BlackLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

type IconButtonProps = {
  width: string;
  height: string;
  maxWidth?: string;
};

export const IconButton = styled.button<IconButtonProps>`
  all: unset;
  background-color: ${(props) => props.theme.color.main.orange};
  display: flex;
  color: white;
  font-family: ${(props) => props.theme.font.family.pretendard_medium};
  border-radius: 8px;
  padding: 12px 18px;
  align-items: center;
  justify-content: space-around;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  min-width: 80px;
  max-width: ${(props) => props.maxWidth};
  cursor: pointer;
  margin-left: 16px;
  &:hover {
    filter: brightness(1.2);
  }
`;
