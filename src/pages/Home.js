import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar, Button } from "@material-ui/core";
import Search from "../components/Search";
function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
          {/* Link */}
          {/* Link */}
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
          {/* Link */}
          {/* Link */}
          {/* Icon */}
          {/* Avatar */}
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg
"
        />
        <div className="home__inputContainer">
          {/* Search */}
          <Search />
        </div>
      </div>
    </div>
  );
}
export default Home;
