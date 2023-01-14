import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import logoImg from "../../assets/static/logo-img.png";
import LessonCard from './LessonCard';


const SlideShow = ({slideSm,slideMd,slideLg,imgMargin,imgWidth,imgHeight,flexICenter,counts}) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
      <>
        <Swiper
          className={"grid grid-cols-1 mt-5"}
          modules={[Navigation]}
          spaceBetween={20}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            100: {
              slidesPerView: slideSm,
            },
            768: {
              slidesPerView: slideMd,
            },
            1024: {
              slidesPerView: slideLg,
            },
          }}
        >
            {counts.map((count,index) => <SwiperSlide key={count} className={`${flexICenter}`}>
                <LessonCard logoImg={logoImg} imgMargin={imgMargin} imgWidth={imgWidth} imgHeight={imgHeight}/>
            </SwiperSlide>)}

        </Swiper>
        <i
          ref={nextRef}
          className="text-[30px] cursor-pointer fa fa-square-caret-right absolute text-gradient right-0 top-0 z-[1]"
        />
        <i
          ref={prevRef}
          className="text-[30px] cursor-pointer fa fa-square-caret-left
                           absolute text-gradient right-[3%] top-0 z-[1]"
        />
      </>
    );
};

export default SlideShow;