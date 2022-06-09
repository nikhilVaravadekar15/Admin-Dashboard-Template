import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

import "./DataTable.css"
import { userColumns, userRows } from "../../data/DataTable_data"


function DataTable() {
    const columns = userColumns
    const rows = userRows

    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 224,
        renderCell: (param) => {
          return (
            <div className="actionCell">
              <div className="viewButton">View</div>
              <div className="deleteButton">Delete</div>
            </div>
          )
        }
      }
    ]

  return (
    <div className='DataTable'>
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