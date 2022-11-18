import React, { useState } from "react";
import Header from "../MainBody/Header";
import { BsList } from "react-icons/bs";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <label
          htmlFor="dashboard-drawer"
          className=" text-2xl drawer-button lg:hidden"
        >
          <BsList></BsList>
        </label>
      </div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          {/* <!-- Page content here --> */}

          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
