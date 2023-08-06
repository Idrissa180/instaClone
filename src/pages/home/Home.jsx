import React from "react";
import "./home.css";
import statut from "../../assets/images/user.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { story, userSuggestions } from "../../assets/data";
import { NavLink } from "react-router-dom";
import Suggestion from "../../components/user/Suggestion";
import Item from "../../components/post/Item";


export const Home = () => {
  return (
    <div className="home_container">
      <div className="item_left">
        <div className="statut_users">
          <Swiper
            defaultValue={4}
            navigation={true}
            slidesPerView={8}
            spaceBetween={30}
            modules={[Navigation]}
            className="mySwiper"
          >
            {story?.map((story) => (
              <SwiperSlide key={story.id}>
                <img src={story.img} alt="" />
                <p>{story.username}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="statut_pots">
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </div>
      </div>
      <div className="item_right">
        <div className="profil">
          <img src={statut} alt="statut" />
          <div>
            <h5>idrisstoure18</h5>
            <p>Idrissa Alassane Toure</p>
          </div>
          <NavLink to="/profil">Basculer</NavLink>
        </div>
        <div className="title">
          <p>Suggestions pour vous</p>
          <NavLink to="/">Voir tout</NavLink>
        </div>
        {userSuggestions?.map((user) => (
          <Suggestion user={user} key={user.id} />
        ))}
        <p className="link">
          <NavLink to="/">À propos</NavLink> <span> . </span>
          <NavLink to="/">Aide</NavLink> <span> . </span>
          <NavLink to="/">Presse</NavLink> <span> . </span>
          <NavLink to="/">API</NavLink> <span> . </span>
          <NavLink to="/">Emplois</NavLink> <span> . </span>
          <NavLink to="/">Confidentialité</NavLink> <span> . </span>
          <NavLink to="/">Conditions</NavLink> <span> . </span>
          <NavLink to="/">Lieux</NavLink> <span> . </span>
          <NavLink to="/">Langue</NavLink> <span> . </span>
          <NavLink to="/">Meta Verified</NavLink>
        </p>
        <p className="copyRight">© 2023 INSTAGRAM PAR META</p>
      </div>
    </div>
  );
};
