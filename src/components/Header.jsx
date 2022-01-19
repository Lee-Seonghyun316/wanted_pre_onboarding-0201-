import React from "react";
import styled from "styled-components";
import MenuImg from "../img/icon-menu.png";
import {ReactComponent as ShowMoreIcon} from "../svg/showMore.svg";
import {ReactComponent as BellIcon} from "../svg/bell.svg";
import {ReactComponent as NewIcon} from "../svg/new.svg";
import {ReactComponent as BetaIcon} from "../svg/beta.svg";
import {ReactComponent as NIcon} from "../svg/NIcon.svg";
// import { ReactComponent as SVGDot } from "../svg/dot.svg";
import dotIcon from "../img/dotIcon.png";

const Header = (props) => (
    <Wrap>
        <NavContainer>
            <Nav>
                <TitleContainer>
                    <MenuIcon src={MenuImg}/>
                    <Title>wanted</Title>
                </TitleContainer>
                <Menu>
                    <MenuItem>채용</MenuItem>
                    <MenuItem>이벤트</MenuItem>
                    <MenuItem>직군별 연봉</MenuItem>
                    <MenuItem>이력서</MenuItem>
                    <MenuItem>
                        커뮤니티
                        <PlusText>
                            <NewIcon/>
                        </PlusText>
                    </MenuItem>
                    <MenuItem>프리랜서</MenuItem>
                    <MenuItem>
                        AI 합격예측
                        <PlusText>
                            <BetaIcon/>
                        </PlusText>
                    </MenuItem>
                </Menu>
                <MobileMenu>
                    <ChoiceItem>홈</ChoiceItem>
                    <MobileItem>채용</MobileItem>
                    <MobileItem>이벤트</MobileItem>
                </MobileMenu>
                <Shortcuts>
                    <SearchButton>
                        <ShowMoreIcon/>
                    </SearchButton>
                    <AlarmButton>
                        <BellIcon/>
                        <NIconContainer>
                            <NIcon/>
                        </NIconContainer>
                    </AlarmButton>
                    <UserContainer>
                        <User>이</User>
                        <NIconContainer>
                            <NIcon/>
                        </NIconContainer>
                    </UserContainer>
                    <Line/>
                    <Business>기업 서비스</Business>
                    <DotIconContainer>
                        {/*<SVGDot/>*/}
                        <img src={dotIcon} alt=""/>
                    </DotIconContainer>
                </Shortcuts>
            </Nav>
        </NavContainer>
    </Wrap>
);

export default Header;

const Wrap = styled.div`
  z-index: 1000;
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
  height: 50px;
  @media (max-width: 991px) {
    height: 110px;
  }
  @media (max-width: 767px) {
    width: 100%;
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
  @media (max-width: 767px) {
    padding: 15px 20px;
    width: 100%;
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
  margin: 0;
  @media (min-width: 992px) and (max-width: 1100px) {
    flex: 1 1;
    justify-content: space-evenly;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  position: relative;
  font-weight: 600;
  font-size: 14px;
  @media (min-width: 1101px) {
    padding: 15px;
  }
  @media (min-width: 992px) and (max-width: 1100px) {
    font-size: 13px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding: 11px 10px 19px 10px;
    font-size: 13px;
  }
`;

const PlusText = styled.span`
  position: absolute;
  @media (min-width: 768px) and (max-width: 991px) {
    top: 4px;
  }
  @media (min-width: 992px) and (max-width: 1100px) {
    top: -5px;
  }
  @media (min-width: 1101px) {
    top: 7px;
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
  position: relative;
  background: none;
  border: none;
  height: 34px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserContainer = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e1e2e3;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    display: none;
  }
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
  @media (max-width: 991px) {
    display: none;
  }
`;

const Business = styled.div`
  font-size: 13px;
  color: #666;
  line-height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px;
  font-weight: 400;
  @media (max-width: 991px) {
    display: none;
  }
`;

const NIconContainer = styled.span`
  position: absolute;
  top: -5px;
  right: -3px;
  background: rgb(51, 102, 255);
  width: 13px;
  height: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const DotIconContainer = styled.div`
  margin-right: 10px;
  display: none;
  @media (max-width: 991px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  display: none;
  list-style-type: none;
  padding: 0;
  margin: 0;
  @media (max-width: 767px) {
    display: flex;
  }
`;

const MobileItem = styled.li`
  font-weight: 600;
  font-size: 14px;
  padding: 11px 10px 19px 10px;
  @media (max-width: 767px) {
  }
  @media (max-width: 320px) {
    font-size: 13px;
  }
`;

const ChoiceItem = styled.li`
  font-weight: 600;
  font-size: 14px;
  padding: 11px 10px 19px 20px;
  @media (max-width: 767px) {
  }
  @media (max-width: 320px) {
    font-size: 13px;
  }
  border-bottom: solid 2px blue;
`;
