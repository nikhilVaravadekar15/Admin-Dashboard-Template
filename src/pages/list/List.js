import React from 'react'
import DataTable from '../../components/dataTable/DataTable'
import LeftSidebar from '../../components/leftSidebar/LeftSidebar'
import Navbar from '../../components/navbar/Navbar'
import "./List.css"



function List() {
  return (
    <div className="List">
      <LeftSidebar /> 
      <div className="listContainer">
        <Navbar />
        <DataTable />
      </div>     
    </div>
  )
}

export default List