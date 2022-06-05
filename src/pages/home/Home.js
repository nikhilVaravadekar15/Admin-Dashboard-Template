import React from 'react'

import "./Home.css"
import LeftSidebar from '../../components/leftSidebar/LeftSidebar'
import Navbar from '../../components/navbar/Navbar'


function Home() {
  return (
    <div className="Home">
      <LeftSidebar />
      <div className="homeContainer">
        <Navbar />
        homeContainer
      </div>
    </div>
  )
}

export default Home