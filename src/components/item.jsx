import styled from "styled-components";
import React from "react";

const Item = ({src, active, prev, next, title, text}) => {
    return (
        <Wrap active={active} prev={prev} next={next} >
            <ImgContainer>
                <ItemStyle src={src} alt=""/>
                <Des>
                    <DesTitle>
                        {title}
                    </DesTitle>
                    <DesText>{text}</DesText>
                    <Move>바로가기 ></Move>
                </Des>
            </ImgContainer>
        </Wrap>);
};

const Wrap = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  margin: auto;
  padding: 1rem 4rem;
  z-index: 100;
  transition: transform 0.5s, opacity 0.5s, z-index 0.5s;

  transform: ${(props) => (props.prev ? "translateX(-100%)" : "")};
  transform: ${(props) => (props.next ? "translateX(100%)" : "")};
  z-index: ${(props) => (props.prev || props.next ? 800 : "")};

  ${({active}) =>
    active &&
    `
    opacity: 1;
    position: relative;
    z-index: 900;
  `}`;

const ImgContainer = styled.div`
position: relative;
`;

const Des = styled.div`
position: absolute;
background: white;
bottom: 28px;
left: 28px;
width: 330px;
border-radius: 5px;
text-align: left;
opacity: 0;
@media (min-width: 1200px){
opacity: 1;
}
`;

const DesTitle = styled.h2`
margin: 20px 20px 0 20px;
font-size: 20px;
line-height: 1.5;
`

const DesText = styled.h3`
font-weight: 500;
margin: 0 20px;
font-size: 14px;
height: 44px;
line-height: 1.64;
`;

const Move = styled.a`
display: block;
border-top: 1px solid #ececec;
font-size: 14px;
font-weight: 600;
color: #36f;
padding: 15px 20px;
`;

const ItemStyle = styled.img`
  width: 100%;
`;

export default Item;
