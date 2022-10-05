import styled, { keyframes } from "styled-components";
export const MainDiv = styled.div`
  height: 100vh;
  overflow-y: auto;
`;
export const reverseImg = styled.img`
  filter: invert(100%);
  width: 40px;
  height: 40px;
`;
export const MainHeader = styled.div`
  position: absolute;
  width: 100%;
`;
export const subContainer = styled.div`
  position: absolute;
  width: 250px;
  justify-content: space-between;
  height: 100%;
  margin-right: 40px;
  display: inline-flex;
  align-items: center;
`;
export const Header1 = styled.div`
  position: block;
  display: flex;
  width: 100%;
  background-color: black;
  height: 80px;
  overflow: hidden;
  select {
    margin-bottom: -10px;
    border-radius: 15px;
    height: 40px;
    width: 70px; /* 원하는 너비설정 */
  }
`;
export const BgCrop2 = styled.div`
  position: relative;
  width: 50px; // 자를 사이즈를 명시해준다.
  height: 50px;
  overflow: hidden;
  img {
    position: absolute; // 포지션을 주고,
    top: -324px; // 보이기 원하는 위치를 지정
    left: -5px;
  }
`;
export const BgCrop1 = styled.div`
  margin-left: calc(1920px / 2);
  position: relative;
  width: 240px; // 자를 사이즈를 명시해준다.
  height: 50px;
  overflow: hidden;
  img {
    position: absolute; // 포지션을 주고,
    top: -37px; // 보이기 원하는 위치를 지정
    left: -5px;
  }
`;
export const FirstPage = styled.div`
  margin-top: 130px;
  width: 100vw;
  height: 410px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://m.media-amazon.com/images/I/51z7JtD5pUL._SX1500_.jpg");
`;
export const SecondPage = styled.div`
  width: 100vw;
  height: 440px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg");
`;
export const franchiseBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  div {
    button {
      margin-bottom: 10vh;
      flex-wrap: wrap;
      min-width: 240px;
      height: 64px;
      padding-left: 24px;
      padding-right: 24px;
      font-weight: 600;
      font-size: 16px;
      overflow: hidden;
    }
  }
`;

export const thirdPage = styled.div`
  width: 160vw;
  height: 500px;

  margin-top: 170px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg");
`;
export const endInner = styled.div`
  width: 100%;
  height: 600px;
  background-color: #333333;
`;
export const upBtn = styled.button`
  transition: 0.5s all;
  height: 64px;
  border-radius: 15;
  margin-top: 16px;
  font-size: 26px;
  float: right;
  width: 64px;
  margin-right: 4px;
  border: none;
  color: #fff;
  background-color: rgba(120, 120, 120, 0.7);
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.16, 0.04, 0.03, 0.95);
`;
export const cartegory = styled.div`
  display: inline-flex;
  left: 0;
  width: 1000px;
  nav {
    color: #fff;
    width: 130px;
    text-align: center;
  }
`;
export const BackImg = styled.img`
  width: 1307px;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
export const list_img = styled.div`
  z-index: 1000;
  width: 100%;
  height: calc(100vh - 170px);
`;
export const Header2 = styled.div`
  position: block;
  background-color: black;
  width: 100%;
  height: 50px;
  > div {
    position: absolute;
    right: 500px;
    input {
      position: absolute;
      width: 350px;
      height: 32px;
      font-size: 15px;
      border: 0;
      border-radius: 15px;
      outline: none;
      padding-left: 10px;
      background-color: #fdf4e3;
    }
    button {
      position: absolute;
      width: 45px;
      height: 34px;
      margin-left: 320px;
      border-radius: 15px;
      background-color: #ffb862;
      color: #000;
    }
  }
`;
export const imgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  right: 0;
  z-index: 200;
  display: inline-flex;
  align-items: center;
  margin-top: -7px;
  padding-left: -30px;
  justify-content: flex-end;
`;
export const signBtn = styled.button`
  display: flex;
  overflow: hidden;
  float: right;
  width: 191px;
  height: 72px;
  border-radius: 72px;
  background-color: orange;
  border: 0;
  outline: 0;
  align-items: center;
  justify-content: center;
  transition: all 0.5s cubic-bezier(0.16, 0.04, 0.03, 0.95);

  p {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.1;
    margin-right: 12px;
    white-space: nowrap;
    color: #fff;
  }
  div {
    display: inline-block;
    width: 37px;
    height: 37px;
    background-size: 100% auto;
    background-image: url("https://www.twosome.co.kr/resources/images/main/ico_floating.svg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    position: relative;
    margin-top: 2px;
  }
`;

export const btnContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  right: 32px;
  bottom: 32px;
  z-index: 1;
`;
