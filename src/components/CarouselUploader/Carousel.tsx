import React, { useEffect, useRef } from "react";
import { SwiperRef } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Arrow, Container, Content, SwiperStyled } from "./styles";

import ArrowLeftIcon from "../../assets/icons/arrow_left.svg?react";
import ArrowRightIcon from "../../assets/icons/arrow_right.svg?react";
import { DropzoneRootProps } from "react-dropzone";

type Props = {
  setAutoScroll: (value: boolean) => void;
  autoScroll: boolean;
  componentList: React.ReactNode;
  isBorder: boolean;
  getRootProps: <T extends DropzoneRootProps>(
    props?: T | undefined
  ) => T | undefined;
  children?: React.ReactNode;
};

export const Carousel = ({
  setAutoScroll,
  autoScroll,
  componentList,
  isBorder,
  getRootProps,
  children,
}: Props) => {
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    handleAutoScroll();
  }, [autoScroll]);

  const handleAutoScroll = () => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      const lastSlideIndex = swiperInstance.slides.length - 1;
      swiperInstance.slideTo(lastSlideIndex, 100, false);
      setAutoScroll(false);
    }
  };
  return (
    <Container {...getRootProps()}>
      <Arrow className="arrow-right arrow">
        <ArrowRightIcon />
      </Arrow>
      <Content isBorder={isBorder}>
        <SwiperStyled
          ref={swiperRef}
          spaceBetween={10}
          pagination={true}
          grabCursor={false}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          modules={[Navigation]}
          slidesPerView={"auto"}
        >
          {componentList && componentList}
        </SwiperStyled>
        {children && children}
      </Content>

      <Arrow className="arrow-left arrow">
        <ArrowLeftIcon />
      </Arrow>
    </Container>
  );
};
