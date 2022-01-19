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
            title: "포트폴리오를 부탁해!",
            text: "디자이너의 포폴 살펴보기",
        },
        {
            img: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.thumb_1006_280.jpg",
            title: "개발자 되고 싶은 분들!?",
            text: "프론트엔드 무료 교육과정 참여하기",
        },
        {
            img: "https://static.wanted.co.kr/images/banners/1488/baa54448.thumb_1006_280.jpg",
            title: "UX 디자이너의 커리어 설계",
            text: "브랜드 가치를 더하는 디자인",
        },
        {
            img: "https://static.wanted.co.kr/images/banners/1486/fba2df30.thumb_1006_280.jpg",
            title: "성과를 내는 마케팅",
            text: "실제 사례를 공개합니다!",
        },
        {
            img: "https://static.wanted.co.kr/images/banners/1460/619f3af7.thumb_1006_280.jpg",

            title: "개발자 성장 비결 공개!",
            text: "Velog, 글 쓰는 개발자들의 이야기",
        },
        {
            img: "https://static.wanted.co.kr/images/banners/1468/3df61cbc.thumb_1006_280.jpg",
            title: "해, 커리어 EP 02 공개",
            text: "마지막 관문 2라운드의 승자는?",
        },
        {
            img: "https://static.wanted.co.kr/images/banners/1484/b2853456.thumb_1006_280.jpg",
            title: "성장하는 개발자가 되려면?",
            text: "OOO 검색하지 말 것!",
        },
        {
            img: "https://static.wanted.co.kr/images/banners/1490/0b775035.thumb_1006_280.jpg",
            title: "마케팅 주니어를 찾습니다",
            text: "기업 과제 풀고 취업까지 한번에!",
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
