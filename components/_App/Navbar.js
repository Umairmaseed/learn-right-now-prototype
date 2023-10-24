import React, { useState } from 'react';

function Navbar() {
  const [mobileNav, setMobileNav] = useState(true);
  const toggleNavbar = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <header className="header main-nav">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <a href="/">
          <img className="logo" src="/Icon.png" alt="skip - by lrn" />
        </a>
        <h1 className="heading-nav">
          {' '}
          <span>E</span>
          <span>T</span>
          <span>S</span>
          <span>O</span>
        </h1>
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li className="main-nav-list ">
            <a className="main-nav-link " href="/categories">
              Categories
            </a>
          </li>
          <li className="main-nav-list ">
            <a className="main-nav-link " href="path">
              Learning Path
            </a>
          </li>
          <li className="main-nav-list ">
            <a className="main-nav-link " href="/leaderboard">
              Leaderboard
            </a>
          </li>
          <li className="main-nav-list ">
            <a className="main-nav-link nav-cta " href="/learning">
              My Learning
            </a>
          </li>
          <li className="">
            <a className="" href="/profile">
              <img
                src="user3.jpg"
                className="logo"
                style={{ borderRadius: '50%' }}
              />
            </a>
          </li>
        </ul>
        {/* <button class="btn-mobile-nav" onClick={toggleNavbar}>
          <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
          <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
        </button> */}
      </div>
    </header>
  );
}

export default Navbar;
