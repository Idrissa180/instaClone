import React, { useContext, useEffect, useState } from "react";
import "./profile.css";
import user from "../../assets/images/user.png";
import { FaRegSun } from "react-icons/fa";
import Post from "../../components/profil/Post";
import UserContext from "../../context/UserContext";
import axios from "axios";
import ModalPost from "../../components/modal/ModalPost";
import Setting from "../../components/profil/Setting";
import Folowers from "../../components/profil/Folowers";

const Profile = ({ modalPost, onModalPost, postForModal }) => {
  const [userInfo, setUserInfo] = useState("");
  const [posts, setPosts] = useState([]);
  const { isUser } = useContext(UserContext);

  const [active, setActive] = useState("publication");
  const [settingState, setSettingState] = useState(false);
  const [followerState, setFollowerState] = useState(false);
  const [followState, setFollowState] = useState(false);

  useEffect(() => {
    const handleGet = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/${isUser.id}`
        );
        setUserInfo(response.data);
        const res = await axios.get(
          `http://localhost:5000/api/posts/user/${isUser.id}`
        );
        setPosts(res.data);
      } catch (err) {
        // alert("Wrong credentials!!!");
        console.log(err);
      }
    };

    handleGet();
  }, []);

  console.log(userInfo._id);

  const handdleActiveWindow = (param) => {
    // console.log(param);
    if (param === "setting") {
      settingState ? setSettingState(false) : setSettingState(true);
    } else if (param === "follower") {
      followerState ? setFollowerState(false) : setFollowerState(true);
    } else if (param === "follow") {
      followState ? setFollowerState(false) : setFollowState(true);
    }
  };

  return (
    <>
      <div className="profile_container">
        <div className="info_line">
          <div className="info_line_left">
            <img src={user} alt="" />
          </div>
          <div className="info_line_right">
            <div className="info_line_right_l1">
              <h3>idrisstoure18</h3>
              <button>Modifier profil</button>
              <FaRegSun
                className="icon"
                onClick={() => handdleActiveWindow("setting")}
              />
            </div>
            <div className="info_line_right_l2">
              <p>9 publications</p>
              <p
                className="linker"
                onClick={() => handdleActiveWindow("follower")}
              >
                505 followers
              </p>
              <p
                className="linker"
                onClick={() => handdleActiveWindow("follow")}
              >
                370 suivi(e)s
              </p>
            </div>
            <h4>{`${userInfo.nom} ${userInfo.prenom}`}</h4>
            <h4>{isUser.email}</h4>
            <div>
              <p className="title">
                <strong>Ing. CyberSecurity</strong>
              </p>
              <p className="desc">
                <strong>
                  Développer Web & Mobile#php #html #css #js #laravel #react
                  #symfony #flutter
                </strong>
              </p>
            </div>
          </div>
        </div>

        <div className="profil_navigation">
          <div
            onClick={() => setActive("publication")}
            className={`profil_navigation_item ${
              active === "publication" && "active"
            }`}
          >
            PUBLICATIONS
          </div>
          <div
            onClick={() => setActive("enregistrement")}
            className={`profil_navigation_item ${
              active === "enregistrement" && "active"
            }`}
          >
            ENREGISTREMENTS
          </div>
          <div
            onClick={() => setActive("indentification")}
            className={`profil_navigation_item ${
              active === "indentification" && "active"
            }`}
          >
            IDENTIFIÉ(E)
          </div>
        </div>

        {active === "publication" && (
          <div className="profile_post">
            {posts?.map((post) => (
              <Post post={post} onModalPost={onModalPost} />
            ))}
          </div>
        )}
        {active === "enregistrement" && (
          <div className="profile_post">
            <Post img={user} />
            <Post img={user} />
            <Post img={user} />
            <Post img={user} />
          </div>
        )}
        {active === "indentification" && (
          <div className="profile_post">
            <Post img={user} />
            <Post img={user} />
            <Post img={user} />
          </div>
        )}
      </div>
      {modalPost && <ModalPost postForModal={postForModal} onModalPost={onModalPost} />}
      {settingState && <Setting close={handdleActiveWindow} />}
      {followerState && <Folowers close={handdleActiveWindow} />}
    </>
  );
};

export default Profile;
