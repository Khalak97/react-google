import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../components/Search';

import './Home.css';

import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>

        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://www.google.com.ua/logos/doodles/2020/ukraine-independence-day-2020-6753651837108509-l.png"
          alt="logo"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
