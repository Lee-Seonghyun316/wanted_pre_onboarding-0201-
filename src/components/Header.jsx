import React from "react";
import styled from "styled-components";
import MenuImg from "../img/icon-menu.png";
import { ReactComponent as ShowMoreIcon } from "../svg/showMore.svg";
import { ReactComponent as BellIcon } from "../svg/bell.svg";

const Header = (props) => (
  <Wrap>
    <TitleContainer>
      <MenuIcon src={MenuImg} />
      <Title>wanted</Title>
    </TitleContainer>
    <Menu>
      <MenuItem>채용</MenuItem>
      <MenuItem>이벤트</MenuItem>
      <MenuItem>직군별 연봉</MenuItem>
      <MenuItem>이력서</MenuItem>
      <MenuItem>
        커뮤니티<PlusText>New</PlusText>
      </MenuItem>
      <MenuItem>프리랜서</MenuItem>
      <MenuItem>
        AI 합격예측<PlusText>Beta</PlusText>
      </MenuItem>
    </Menu>
    <Shortcuts>
      <ShowMoreIcon />
      <BellIcon />
      <UserContainer>
        <User>이</User>
      </UserContainer>
    </Shortcuts>
  </Wrap>
);

export default Header;

const Wrap = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  height: 50px;
`;

const TitleContainer = styled.div`
  background: pink;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MenuIcon = styled.img`
  width: 17px;
  height: 14px;
  margin-right: 15px;
`;

const Title = styled.h2`
  margin: 0;
`;

const Menu = styled.ul`
  list-style-type: none;
  display: flex;
`;

const MenuItem = styled.li`
  padding: 11px 10px 19px 10px;
  font-size: 14px;
`;

const PlusText = styled.span`
  color: #3366ff;
  font-size: 7px;
  position: absolute;
  top: 20px;
`;

const Shortcuts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const UserContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e1e2e3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const User = styled.div`
  width: 28px;
  height: 28px;
  background: #798f9c;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
