import React, { useState, useEffect } from "react";
import "./home.css";
import statut from "../../assets/images/user.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { story, userSuggestions } from "../../assets/data";
import { NavLink } from "react-router-dom";
import Suggestion from "../../components/user/Suggestion";
import Item from "../../components/post/Item";
import axios from "axios";
import ModalPost from "../../components/modal/ModalPost";
import user from "../../assets/images/user.png"

export const Home = ({ onModalPost, postForModal, modalPost, storyActivation }) => {
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const handleGet = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts`);
        const res = await axios.get(`http://localhost:5000/api/stories`);
        setPosts(response.data);
        setStories(res.data);
      } catch (err) {
        // alert("Wrong credentials!!!");
        console.log(err);
      }
    };

    handleGet();
  }, []);
  return (
    <>
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
              {stories?.map((story) => (
                <SwiperSlide key={story.id} onClick={()=>storyActivation(story)}>
                  <img src={user} alt="" />
                  <p>{story.user.nom}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="statut_pots">
            {posts?.map((post) => (
              <Item key={post._id} post={post} onModalPost={onModalPost} setPosts={setPosts} />
            ))}
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
      {modalPost && (
        <ModalPost postForModal={postForModal} onModalPost={onModalPost} />
      )}
    </>
  );
};
