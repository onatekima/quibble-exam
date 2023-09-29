import React, { useState } from 'react';
import './Dashboard.scss';

const initial_nav = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [navArr, setNavArr] = useState(initial_nav)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const reset = () => {
    setNavArr(initial_nav);
  }

  const shiftUp = () => {
    const arr = [...navArr];

    const firstItem = arr.shift();
    arr.push(firstItem);

    setNavArr(arr);
  };

  const shiftDown = () => {
    const arr = [...navArr];

    const lastItem = arr.pop();
    arr.unshift(lastItem);

    setNavArr(arr);
  };

  return (
    <div className={`dashboard ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="sidebar">
        <div className="sidebar-header">
          <button className="toggle-button" onClick={toggleSidebar}>
            {isSidebarOpen ? 'Close' : 'Open'}
          </button>
        </div>
        {isSidebarOpen && (
          <ul className="nav-list">
            {navArr.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="content">
        <div className="header">
          <button className="reset-button" onClick={reset}>
            Reset
          </button>
        </div>
        <div className="buttons">
          <button className="shift-button" onClick={shiftUp}>
            Shift Up
          </button>
          <button className="shift-button" onClick={shiftDown}>
            Shift Down
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
