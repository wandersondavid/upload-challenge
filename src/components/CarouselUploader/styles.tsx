import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

type ContentProps = {
  isBorder: boolean;
};

export const Content = styled.div<ContentProps>`
  display: flex;
  position: relative;
  border-radius: 20px;
  border: 2px dashed ${({ isBorder }) => (isBorder ? "#AEAEAE" : "transparent")};
  background: #fff;
  box-shadow: 0px 24.72px 32.96px -32.96px rgba(2, 43, 73, 0.25);
  width: 824px;
  height: 239px;
`;

export const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 239px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  svg {
    width: 24px;
    height: 24px;
  }

  &.arrow-right {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  &.arrow-left {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  &.swiper-button-disabled {
    cursor: not-allowed;
    svg {
      path:first-child {
        fill: none;
      }
      path:last-child {
        fill: #a3a3a3;
      }
    }
  }
`;

export const ContentSwiper = styled.div`
  width: 209px;
  height: 209px;
  border-radius: 15px;
  background: #cfcfcf;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  justify-content: center;
  position: relative;
  cursor: pointer;
  div {
    display: none;
    position: absolute;
    transform: translate(10px, -10px);
    top: 0;
    right: 0;
    z-index: 3;
  }
  &:hover {
    &:after {
      content: "";
      position: absolute;
      width: 209px;
      height: 209px;
      border-radius: 15px;
      background: rgba(21, 21, 21, 0.73);
    }
    div {
      display: flex;
      cursor: pointer;
    }
  }
  img {
    width: 209px;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    background: #cfcfcf;
  }
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 209px !important;
  height: 100%;
  margin-right: 0;
  margin: 0 10px;
`;
export const SwiperStyled = styled(Swiper)`
  display: flex;
  justify-content: flex-start;
  margin: 0;
`;

export const DropContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 13px;
  width: 100%;
`;

export const UploadMessage = styled.div`
  position: absolute;
  width: 824px;
  left: 0;
  right: 0;
  top: 0;
  border-radius: 20px;
  flex: 1;
  display: flex;
  height: 239px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(24, 24, 24, 0.9);
  z-index: 44444;
  h2 {
    color: #fff;
    font-size: 28px;
    font-weight: 400;
    line-height: 20px;
  }
  p {
    margin: 0;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    span {
      font-weight: 600;
      cursor: pointer;
      color: #fff;
      margin-left: 5px;
      text-decoration-line: underline;
    }
  }
  svg {
    width: 67px;
    height: 67px;
  }
`;

export const ContainerButton = styled.div`
  width: 209px;
  height: 209px;
  border-radius: 15px;
  background: #cfcfcf;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  justify-content: center;
  span {
    font-size: 1.25rem;
    color: #505050;
    font-weight: 400;
  }
  img {
    width: 209px;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;
