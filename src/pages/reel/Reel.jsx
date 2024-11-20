import React from "react";
import "./style.css";
import CardReel from "../../components/reels/CardReel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { useSpring, animated } from "react-spring";
// import { useGesture } from "react-use-gesture";

function Reel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true, // Active le mode vertical
      verticalSwiping: true, // Active le défilement vertical
      swipeToSlide: true, // Permet de changer de slide en faisant glisser
      arrows: false, // Désactive les flèches de navigation
      responsive: [
        {
          breakpoint: 768,
          settings: {
            vertical: false,
            verticalSwiping: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

//   const [{ y }, set] = useSpring(() => ({ y: 0 }));

//   // Utilisez react-use-gesture pour détecter le geste de défilement
//   const bind = useGesture(
//     ({ down, movement: [mx, my], direction: [dx, dy], velocity }) => {
//       set({ y: down ? my : 0 });
//     }
//   );

  return (
    <div className="reel_page">
      <div className="card_container">
        <Slider {...settings}>
          <CardReel text={"text1"}/>
          <CardReel text={"text2"}/>
          <CardReel text={"text3"}/>
          <CardReel text={"text4"}/>
          <CardReel text={"text5"}/>
          <CardReel text={"text6"}/>
          <CardReel text={"text7"}/>
        </Slider>

        {/* <animated.div
          {...bind()}
          style={{
            transform: y.interpolate((y) => `translate3d(0, ${y}px, 0)`),
          }}
        >
          <CardReel text={"text1"} />
          <CardReel text={"text2"} />
          <CardReel text={"text3"} />
          <CardReel text={"text4"} />
          <CardReel text={"text5"} />
          <CardReel text={"text6"} />
          <CardReel text={"text7"} />
        </animated.div> */}
      </div>
    </div>
  );
}

export default Reel;
