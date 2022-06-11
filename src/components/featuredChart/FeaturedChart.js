import React from 'react'

import "./FeaturedChart.css"
import 'react-circular-progressbar/dist/styles.css';
import { MoreVertOutlined } from '@mui/icons-material'
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { CircularProgressbar } from 'react-circular-progressbar';

import { featured_data } from '../../data/Chart_data';

function FeaturedChart() {
  const featuredData = featured_data;
  const featuredData_mapper = featuredData.map((item, index) => {
    return (
      <GetFeaturedDataItem title={item.title} amount={item.amount} key={index} />
    )
  })

  return (
    <div className='FeaturedChart'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlined fontSize='small' />
      </div>
      <div className="bottom">
        <div className="featuredProgressbarChart">
          <CircularProgressbar value={70} text={`70%`} strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="description">Previous transactions processing. Last payments may not be included</p>
        <div className="summary">
          {featuredData_mapper}
        </div>
      </div>
    </div>
  )
}

function GetFeaturedDataItem({title, amount, index}){
  return (
    <div className="item" key={index}>
      <div className="item__title">{title}</div>
      <div className={amount > 0 ? "item__result positive" : "item__result negative"}>
        {amount > 0 ? <KeyboardArrowUpOutlinedIcon fontSize='small'/> : <KeyboardArrowDownOutlinedIcon fontSize='small'/>}
        <div className="resultAmount">${amount}k</div>
      </div>
    </div>
  )
}

export default FeaturedChart
