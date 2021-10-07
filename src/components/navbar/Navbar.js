import React, { useContext, useState } from "react";
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logoutStart } from "../../authContext/AuthActions";

import "./navbar.scss";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movie</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.6435-9/125186298_1714940745347025_5286789999763661560_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-mfrsQjz_IeqfpdEToegm-bA7HNqiHbn5sDsc2qIduZAk4Ru0W_C9wbjbhVMghbdOhgdx0QJ8qnRxezm6oGVX&_nc_ohc=Hz8dKUs7a6EAX-j3yQr&_nc_ht=scontent.fbkk5-5.fna&oh=c92f1a7160d6e4aee02c7cef1d5dad21&oe=615C7CF2"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => dispatch(logoutStart())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
