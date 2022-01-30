import styled from 'styled-components';

import { MAIN_COLOR } from '@utility/COLORS';
import { StyledSidePadding } from '@utility/COMMON_STYLE';

export const NavBarBackground = styled.div`
  background-color: rgb(245, 245, 245);
`;

export const NavBarContainer = styled(StyledSidePadding)`
  display: flex;
  justify-content: space-between;
  height: 90px;
  background-color: white;
  @media (max-width: 1224px) {
    padding-left: 5.64%;
    padding-right: 5.64%;
    height: 65px;
  }
`;

export const NavBarLogoConatiner = styled.div`
  margin-top: -7px;
  margin-right: 5px;
`;

export const NavBarTextContainer = styled.div`
  display: flex;
`;

export const NavBarText = styled.div`
  cursor: pointer;
  color: ${props =>
    props.hoverState && props.hoverState !== props.text ? 'gray' : 'black'};
  font-size: 15px;
  font-family: 'NexonBo';
  padding: 20px;
  @media (max-width: 1224px) {
    font-size: 12px;
    padding: 15px;
    padding-top: 25px;
  }
`;
