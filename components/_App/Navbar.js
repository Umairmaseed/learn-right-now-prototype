import React from 'react';

function Navbar() {
  return (
    <header className="header">
      <a href="/">
        <img className="logo" src="/Logo-normal.png" alt="skip - by lrn" />
      </a>
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
      </div>
    </header>
  );
}

export default Navbar;
