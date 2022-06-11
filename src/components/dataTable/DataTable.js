import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

import "./DataTable.css"
import { userColumns, userRows } from "../../data/DataTable_data"
import {Link} from "react-router-dom"

function DataTable() {
    const columns = userColumns
    const [rows, setRows] = useState(userRows)

    function handleDelete(id){
      setRows((prevRows) => {
        return prevRows.filter((item) => item.id !== id)
      })
    }

    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 224,
        renderCell: (param) => {
          return (
            <div className="actionCell">
              <Link to="/users/testuser" style={{textDecoration: "none"}}>
                <div className="viewButton">View</div>  
              </Link>
              <div className="deleteButton"
                onClick={() => handleDelete(param.row.id)}
              >Delete</div>
            </div>
          )
        }
      }
    ]

  return (
    <div className='DataTable'>
      <div className="title">
        Add New user
        <Link to="/users/new" className='link' style={{textDecoration: "none"}}>Add New</Link>
      </div>
        <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={12}
        rowsPerPageOptions={[12]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable