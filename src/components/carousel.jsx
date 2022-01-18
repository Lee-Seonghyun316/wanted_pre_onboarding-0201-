import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Item from "./item";
import Button from "./button";

const Carousel = () => {
  const totalItems = 8;
  const [current, setCurrent] = useState(0);

  const isMoving = useRef(false);

  useEffect(() => {
    isMoving.current = true;
    setTimeout(() => {
      isMoving.current = false;
    }, 500);
  }, [current]);

  const moveNext = () => {
    if (!isMoving.current) {
      if (current === totalItems - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }
  };
  const movePrev = () => {
    if (!isMoving.current) {
      if (current === 0) {
        setCurrent(totalItems - 1);
      } else {
        setCurrent(current - 1);
      }
    }
  };

  const srcList = [
    "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.thumb_1006_280.jpg",
    "https://static.wanted.co.kr/images/banners/1473/41f7b36e.thumb_1006_280.jpg",
    "https://static.wanted.co.kr/images/banners/1488/baa54448.thumb_1006_280.jpg",
    "https://static.wanted.co.kr/images/banners/1486/fba2df30.thumb_1006_280.jpg",
    "https://static.wanted.co.kr/images/banners/1460/619f3af7.thumb_1006_280.jpg",
    "https://static.wanted.co.kr/images/banners/1468/3df61cbc.thumb_1006_280.jpg",
    "https://static.wanted.co.kr/images/banners/1484/b2853456.thumb_1006_280.jpg",
    "https://static.wanted.co.kr/images/banners/1490/0b775035.thumb_1006_280.jpg",
  ];

  const ItemList = Array(totalItems)
    .fill()
    .map((_, index) => {
      const key = `item_${index}`;

      const prev = current === 0 ? totalItems - 1 : current - 1;
      const next = current === totalItems - 1 ? 0 : current + 1;

      return (
        <Item
          src={srcList[index]}
          key={key}
          active={index === current}
          prev={index === prev}
          next={index === next}
        />
      );
    });

  return (
    <CarouselStyle>
      <div className="carousel">
        {ItemList}

        <Button prev handleSlide={movePrev} />
        <Button next handleSlide={moveNext} />
      </div>
    </CarouselStyle>
  );
};
export default Carousel;

const CarouselStyle = styled.div`
  overflow: hidden;
  width: 90%;
  margin: auto;
  * {
    box-sizing: border-box;
  }
  .carousel {
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
`;
