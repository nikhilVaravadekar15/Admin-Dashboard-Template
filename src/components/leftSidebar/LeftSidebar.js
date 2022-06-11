import React from 'react'
import "./LeftSidebar.css"

import {
  LeftSidebar_main_data,
  LeftSidebar_lists_data,
  LeftSidebar_useful_data,
  LeftSidebar_service_data,
  LeftSidebar_user_data
} from '../../data/LeftSidebar_data'
import {Link} from "react-router-dom"

function LeftSidebar() {

  const custom_LeftSidebar_main = LeftSidebar_main_data.map((item, index) => {
    return (
      <SidebarItem item={item} index={index}/>
    )
  })
  const custom_LeftSidebar_lists = LeftSidebar_lists_data.map((item, index) => {
    return (
      <SidebarItem item={item} index={index}/>
    )
  })
  const custom_LeftSidebar_useful = LeftSidebar_useful_data.map((item, index) => {
    return (
      <SidebarItem item={item} index={index}/>
    )
  })
  const custom_LeftSidebar_service = LeftSidebar_service_data.map((item, index) => {
    return (
      <SidebarItem item={item} index={index}/>
    )
  })
  const custom_LeftSidebar_user = LeftSidebar_user_data.map((item, index) => {
    return (
      <SidebarItem item={item} index={index}/>
    )
  })

  return (
    <div className="LeftSidebar">
        <div className="top">
          <Link to="/" >
            <span className="logo">DASHBOARD</span>
          </Link>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className='title'>MAIN</p>
            {custom_LeftSidebar_main}
          </ul>
          <ul>
            <p className='title'>LISTS</p>
            {custom_LeftSidebar_lists}
          </ul>
          <ul>
            <p className='title'>USEFUL</p>
            {custom_LeftSidebar_useful}
          </ul>
          <ul>
            <p className='title'>SERVICES</p>
            {custom_LeftSidebar_service}
          </ul>
          <ul>
            <p className='title'>USER</p>
            {custom_LeftSidebar_user}
          </ul>
        </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
    </div>
  )
}

function SidebarItem({item, index}){
  return (
    <Link to={item.linkTo} style={{textDecoration: "none"}}>
      <li key={index}>
        <item.icon className="icon"/>
        <span>{item.value}</span>
      </li>
    </Link>
  )
}

export default LeftSidebar