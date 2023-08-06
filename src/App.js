import { useContext} from "react";
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

function App() {
  const { isAuthenticated } = useContext(Auth);

  

  if (isAuthenticated) {
    return (
      <div className="App">
        <Aside />
        <div className="App_main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
          </Routes>
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
