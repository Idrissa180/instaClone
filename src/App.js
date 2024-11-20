import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import Login from "./pages/Auth/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/Auth/register/Register";
import { ForgetPass } from "./pages/Auth/forgetPass/ForgetPass";
import { Search } from "./pages/search/Search";
import { Footer } from "./components/footer/Footer";
import Aside from "./components/aside/Aside";
import Auth from "./context/Auth";
import Reel from "./pages/reel/Reel";
import axios from "axios";
import Story from "./components/stories/Story";
import NewStory from "./components/modal/add modal/story/NewStory";
import NewPost from "./components/modal/add modal/post/NewPost";
import UserContext from "./context/UserContext";

function App() {
  const { isAuthenticated } = useContext(Auth);
  const { isUser } = useContext(UserContext);

  const [storyData, setStoryData] = useState("");
  const [story, setStory] = useState(false);
  const [newStoryState, setNewStoryState] = useState(false);
  const [newPostState, setNewPostState] = useState(false);
  const [modalPost, setModalPost] = useState(false);
  const [postForModal, setPostForModal] = useState("");

  const storyActivation = (data)=>{
    setStoryData(data)
    setStory(!story)
  }
  const NewStoryActivation = ()=>{
    setNewStoryState(!newStoryState)
  }
  const NewPostActivation = ()=>{
    setNewPostState(!newPostState)
  }

  const onModalPost = async (id) => {
    if (modalPost) {
      setModalPost(false);
    } else {
      const res = await axios.get(
        `http://localhost:5000/api/posts/${id}`
      );
      setPostForModal(res.data);
      setModalPost(true);
    }
  };

  if (isAuthenticated) {
    return (
      <div className="App">
        <Aside NewStoryActivation={NewStoryActivation} NewPostActivation={NewPostActivation}/>
        <div className="App_main">
          <Routes>
            <Route path="/" element={<Home storyActivation={storyActivation} modalPost={modalPost} onModalPost={onModalPost} postForModal={postForModal}/>} />
            <Route path="/profile" element={<Profile  modalPost={modalPost} onModalPost={onModalPost} postForModal={postForModal}/>} />
            <Route path="/search" element={<Search />} />
            <Route path="/reels" element={<Reel />} />
          </Routes>
          {story && (<Story storyData={storyData} storyActivation={storyActivation}/>) }
          {newStoryState && (<NewStory id={isUser.id} NewStoryActivation={NewStoryActivation}/>) }
          {newPostState && (<NewPost id={isUser.id} NewPostActivation={NewPostActivation}/>) }

        </div>
      </div>
    );
  } else {
    return (
      <div className="Applog">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetPass" element={<ForgetPass />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
