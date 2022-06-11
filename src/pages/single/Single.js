import React from 'react'
import "./Single.css"

import LeftSidebar from "../../components/leftSidebar/LeftSidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import BasicTable from "../../components/basicTable/BasicTable"

import PROFILE_AVATAR from "../../assets/images/PROFILE_AVATAR.png"

function Single() {
  return (
    <div className="Single">
      <LeftSidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="top__left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={PROFILE_AVATAR} alt="" draggable="false"/>
              <div className="details">
                <h1 className="item__title">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">jane_doe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Elton St. 234 Garden Td. NewYork</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="top__right">
            <Chart title={"User Spending (Last 6 Months)"} aspect_ratio={7/2}/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <BasicTable />
        </div>
      </div>
    </div>
  )
}

export default Single