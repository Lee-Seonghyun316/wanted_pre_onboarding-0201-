import React from "react";
import styled from "styled-components";
import MenuImg from "../img/icon-menu.png";
import { ReactComponent as ShowMoreIcon } from "../svg/showMore.svg";
import { ReactComponent as BellIcon } from "../svg/bell.svg";

const Header = (props) => (
  <Wrap>
    <Nav>
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
        <SearchButton>
          <ShowMoreIcon />
        </SearchButton>
        <AlarmButton>
          <BellIcon />
        </AlarmButton>
        <UserContainer>
          <User>이</User>
        </UserContainer>
        <Line />
        <Business>기업 서비스</Business>
      </Shortcuts>
    </Nav>
  </Wrap>
);

export default Header;

const Wrap = styled.div`
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) and (max-width: 1199px) {
    height: 50px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    height: 110px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    height: 60px;
  }
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
  padding: 0;
  @media (min-width: 992px) and (max-width: 1100px) {
    flex: 1 1;
    justify-content: space-evenly;
  }
`;

const MenuItem = styled.li`
  position: relative;
  font-weight: 600;
  font-size: 14px;
  padding: 15px;
  @media (min-width: 992px) and (max-width: 1100px) {
    font-size: 13px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding: 11px 10px 19px 10px;
    font-size: 13px;
  }
`;

const PlusText = styled.span`
  color: #3366ff;
  font-size: 7px;
  position: absolute;
  @media (min-width: 768px) and (max-width: 991px) {
    top: 0px;
  }
`;

const Shortcuts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  height: 29px;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AlarmButton = styled.button`
  background: none;
  border: none;
  height: 29px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Line = styled.div`
  background: #e1e2e3;
  height: 10px;
  width: 1px;
  margin: 10px;
`;

const Business = styled.div`
  font-size: 13px;
  color: #666;
  line-height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px;
  font-weight: 400;
`;
