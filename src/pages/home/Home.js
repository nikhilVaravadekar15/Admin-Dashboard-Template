import React from 'react'

import "./Home.css"
import LeftSidebar from '../../components/leftSidebar/LeftSidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'

function Home() {
  return (
    <div className="Home">
      <LeftSidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="orders"/>
          <Widget type="earnings"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">charts</div>
      </div>
    </div>
  )
}

export default Home