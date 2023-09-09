import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top-content">
        <a href="/">
          <img src="icon.png" alt="learn right now icon" />
        </a>
        <a href="" className="sidebar-link">
          <img src="Dashboard.png" />
        </a>
        <a href="" className="sidebar-link">
          <img src="search.png" />
        </a>
        <a href="" className="sidebar-link">
          <img src="user.png" />
        </a>
      </div>
      <div className="bottom-content">
        <a href="" className="sidebar-link">
          <img src="setting.png" />
        </a>
        <a href="" className="sidebar-link">
          <img src="logout.png" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
