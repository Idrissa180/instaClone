import React, { useRef, useState } from "react";
import "./style.css";
import { MdClose } from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Story = ({ storyActivation, storyData }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const handlSlideChange = (swiper)=>{
    if(swiper.activeIndex===storyData.items.length -1){
      // storyActivation("")
      setTimeout(() => {
        storyActivation("")
      }, 5000);
    }
  }

  return (
    <div className="storyContaint">
      <div className="closeBtnContaint">
        <button className="closeBtn" onClick={() => storyActivation("")}>
          <MdClose />
        </button>
      </div>
      <div className="storie_user_info">
        <div className="storie_user_img">
          <img src={storyData.user.img} alt="" />
        </div>
        <div className="storie_username">
          <p>{storyData.user.nom}</p>
        </div>
      </div>
      <div className="stories_swiper">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        onSlideChange={handlSlideChange}
        className="mySwiper"
      >
        {storyData?.items.map((item) => (
        <SwiperSlide><img className="img_story_swiper" key={item.id} src={item.img} alt="" /></SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div>
    </div>
  );
};

export default Story;
