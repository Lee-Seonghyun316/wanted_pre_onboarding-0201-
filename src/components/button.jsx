import styled from "styled-components";
import React from "react";

const Button = ({ prev, next, handleSlide }) => {
  return <ButtonStyle prev={prev} next={next} onClick={handleSlide} />;
};

const ButtonStyle = styled.div`
  position: absolute;
  top: 50%;
  width: 30px;
  height: 60px;
  background-color: #fff;
  transform: translateY(-50%);
  border-radius: 15px;
  cursor: pointer;
  z-index: 1001;
  border: 1px solid grey;

  &:after {
    content: " ";
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    left: 54%;
    border-right: 1px solid grey;
    border-bottom: 1px solid grey;
    transform: translate(-50%, -50%) rotate(135deg);
  }

  ${({ prev }) =>
    prev &&
    `
    left:0;
  `}

  ${({ next }) =>
    next &&
    `
    right:0;

    &:after {
      left: 47%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  `}
`;

export default Button;
