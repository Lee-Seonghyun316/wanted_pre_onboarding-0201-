import React, {useState, useRef, useEffect, useCallback} from "react";
import styled from "styled-components";
import Item from "./item";
import Button from "./button";

const Carousel = ({flowTime}) => {
    const totalItems = 8;
    const [current, setCurrent] = useState(0);
    const isMoving = useRef(false);
    const [isFlowing, setIsFlowing] = React.useState(true);

    useEffect(() => {
        isMoving.current = true;
        setTimeout(() => {
            isMoving.current = false;
        }, 500);
    }, [current]);

    const moveNext = useCallback(() => {
        if (!isMoving.current) {
            if (current === totalItems - 1) {
                setCurrent(0);
            } else {
                setCurrent(current + 1);
            }
        }
    }, [current]);

    const movePrev = useCallback(() => {
        if (!isMoving.current) {
            if (current === 0) {
                setCurrent(totalItems - 1);
            } else {
                setCurrent(current - 1);
            }
        }
    },[current]);

    React.useLayoutEffect(() => {
        let intervalId;
        if (isFlowing) {
            intervalId = setInterval(() => {
                moveNext();
            }, flowTime);
        }
        return () => clearTimeout(intervalId);
    }, [isFlowing, setCurrent, current, moveNext, flowTime]);

    const [mouseDownClientX, setMouseDownClientX] = useState(0);
    const [mouseUpClientX, setMouseUpClientX] = useState(0);
    const [cursorOn, setCursorOn] = useState(false);

    const onMouseDown = (e) => {
        setMouseDownClientX(e.clientX);
        setCursorOn(true);
    };
    const onMouseUp = (e) => {
        setMouseUpClientX(e.clientX);
        setCursorOn(false);
    };

    useEffect(() => {
        const dragSpace = Math.abs(mouseDownClientX - mouseUpClientX);

        if (mouseDownClientX !== 0) {
            if (mouseUpClientX < mouseDownClientX && dragSpace > 100) {
                moveNext();
            } else if (mouseUpClientX > mouseDownClientX && dragSpace > 100) {
                movePrev();
            }
        }
    }, [mouseUpClientX, moveNext, movePrev, mouseDownClientX]);

    const srcList = [
        {
            img: "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.thumb_1006_280.jpg",
            title: "?????????????????? ?????????!",
            text: "??????????????? ?????? ????????????",
        },
        {
            img: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.thumb_1006_280.jpg",
            title: "????????? ?????? ?????? ??????!?",
            text: "??????????????? ?????? ???????????? ????????????",
        },
        {
            img: "https://static.wanted.co.kr/images/banners/1488/baa54448.thumb_1006_280.jpg",
            title: "UX ??????????????? ????????? ??????",
            text: "????????? ????????? ????????? ?????????",
        },
        {
            img: "https://static.wanted.co.kr/images/banners/1486/fba2df30.thumb_1006_280.jpg",
            title: "????????? ?????? ?????????",
            text: "?????? ????????? ???????????????!",
        },
        {
            img: "https://static.wanted.co.kr/images/banners/1460/619f3af7.thumb_1006_280.jpg",

            title: "????????? ?????? ?????? ??????!",
            text: "Velog, ??? ?????? ??????????????? ?????????",
        },
        {
            img: "https://static.wanted.co.kr/images/banners/1468/3df61cbc.thumb_1006_280.jpg",
            title: "???, ????????? EP 02 ??????",
            text: "????????? ?????? 2???????????? ??????????",
        },
        {
            img: "https://static.wanted.co.kr/images/banners/1484/b2853456.thumb_1006_280.jpg",
            title: "???????????? ???????????? ??????????",
            text: "OOO ???????????? ??? ???!",
        },
        {
            img: "https://static.wanted.co.kr/images/banners/1490/0b775035.thumb_1006_280.jpg",
            title: "????????? ???????????? ????????????",
            text: "?????? ?????? ?????? ???????????? ?????????!",
        },
    ];

    const ItemList = Array(totalItems)
        .fill()
        .map((_, index) => {
            const key = `item_${index}`;

            const prev = current === 0 ? totalItems - 1 : current - 1;
            const next = current === totalItems - 1 ? 0 : current + 1;

            return (
                <Item
                    src={srcList[index].img}
                    key={key}
                    active={index === current}
                    prev={index === prev}
                    next={index === next}
                    title={srcList[index].title}
                    text={srcList[index].text}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    cursorOn={cursorOn}
                />
            );
        });

    return (
        <CarouselStyle onMouseOver={() => setIsFlowing(false)}
                       onMouseOut={() => setIsFlowing(true)}
        >
            <div className="carousel">
                {ItemList}
                <Button prev handleSlide={movePrev}/>
                <Button next handleSlide={moveNext}/>
            </div>
        </CarouselStyle>
    );
};
export default Carousel;

const CarouselStyle = styled.div`
  overflow: hidden;
  width: 80%;
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
