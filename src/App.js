import * as S from "./style";
import "./App.css";
import { useRef, useEffect, useState } from "react";

function App() {
  const outerDivRef = useRef();
  const [number, setNumber] = useState(10);
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
      // console.log(scrollTop, pageHeight);

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop + 1 < pageHeight) {
          console.log("1");
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setNumber(20);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("2"); //2341.25 1171
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setNumber(20);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          console.log("3"); //2341.25 1171
          outerDivRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
          setNumber(20);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          console.log("4");
          outerDivRef.current.scrollTo({
            top: pageHeight * 4,
            left: 0,
            behavior: "smooth",
          });

          setNumber(20);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
          console.log("5");
          outerDivRef.current.scrollTo({
            top: pageHeight * 5,
            left: 0,
            behavior: "smooth",
          });

          setNumber(20);
        } else {
          console.log("6");
          outerDivRef.current.scrollTo({
            top: pageHeight * 5 + pageHeight / 1.7,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        if (scrollTop >= 0 && scrollTop <= pageHeight) {
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setNumber(20);
        } else if (scrollTop >= pageHeight && scrollTop <= pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setNumber(20);
        } else if (scrollTop >= pageHeight && scrollTop <= pageHeight * 3) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop <= pageHeight * 4) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
          setNumber(20);
        } else if (scrollTop >= pageHeight && scrollTop <= pageHeight * 5) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 4,
            left: 0,
            behavior: "smooth",
          });
          setNumber(20);
        } else {
          outerDivRef.current.scrollTo({
            top: pageHeight * 5,
            left: 0,
            behavior: "smooth",
          });
          setNumber(20);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  const onClickUp = () => {
    outerDivRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setNumber(10);
  };
  return (
    <>
      <S.MainHeader>
        <S.Header1>
          <S.BgCrop1>
            <img
              src="https://images-ext-2.discordapp.net/external/OvNEqyRkN80MLqmLbXMcZxtUaTOoVFwBFEO9qxX_ytE/https/m.media-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png"
              alt=""
            />
          </S.BgCrop1>
          <S.imgContainer>
            <S.subContainer>
              <select>
                <option value="001">EN</option>
              </select>
              <S.reverseImg src="https://cdn-icons-png.flaticon.com/128/2321/2321232.png" />
              <S.BgCrop2>
                <img
                  src="https://images-ext-2.discordapp.net/external/OvNEqyRkN80MLqmLbXMcZxtUaTOoVFwBFEO9qxX_ytE/https/m.media-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png"
                  alt=""
                />
              </S.BgCrop2>
            </S.subContainer>
          </S.imgContainer>
        </S.Header1>
        <S.Header2>
          <S.cartegory>
            <nav>All</nav>
            <nav>Today's Deals</nav>
            <nav>Customer Survice</nav>
            <nav>Registry</nav>
            <nav>Gift Cards</nav>
            <nav>Sell</nav>
          </S.cartegory>
          <div>
            <input />
            <button>검색</button>
          </div>
        </S.Header2>
      </S.MainHeader>
      <S.btnContainer>
        <S.signBtn>
          <p>sign in</p>
          <div></div>
        </S.signBtn>
        {number > 10 ? <S.upBtn onClick={onClickUp}>1</S.upBtn> : <></>}
      </S.btnContainer>
      <S.MainDiv ref={outerDivRef}>
        <S.FirstPage></S.FirstPage>
        <S.SecondPage></S.SecondPage>

        <S.list_img>
          <S.thirdPage></S.thirdPage>
          <S.franchiseBtnContainer>
            <button class="custom-btn">
              Shoping Now
              <img
                className="arrow"
                src="https://www.twosome.co.kr/resources/images/main/ico_arrow_right.svg"
                alt=""
              />
            </button>
          </S.franchiseBtnContainer>
        </S.list_img>
        <div className="inner bg-pink">6</div>
        <div className="inner bg-yellow">6</div>
        <div className="inner bg-blue">5</div>
        <div className="inner bg-pink">6</div>
        <S.endInner>hello</S.endInner>
      </S.MainDiv>
    </>
  );
}

export default App;
