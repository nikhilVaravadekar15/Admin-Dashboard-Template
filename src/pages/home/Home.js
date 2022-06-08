import React from 'react'

import "./Home.css"
import LeftSidebar from '../../components/leftSidebar/LeftSidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import FeaturedChart from '../../components/featuredChart/FeaturedChart'
import Chart from '../../components/chart/Chart'
import BasicTable from '../../components/basicTable/BasicTable'

function Home() {
  const widgetArr = ["user", "orders", "earnings", "balance"]
  const widgetArr_mapper = widgetArr.map((item, index) => {
    return (
      <Widget type={item} key={index}/>
    )
  })

  return (
    <div className="Home">
      <LeftSidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {widgetArr_mapper}
        </div>
        <div className="charts">
          <FeaturedChart />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transtions</div>
          <BasicTable />
        </div>
      </div>
    </div>
  )
}

export default Home