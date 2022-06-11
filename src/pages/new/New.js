import React, { useState } from 'react'
import "./New.css"

import LeftSidebar from "../../components/leftSidebar/LeftSidebar"
import Navbar from "../../components/navbar/Navbar"

import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import icon__no_image from "../../assets/images/icon__no_image.jpg"

function New({title, inputs}) {
  const [file, setFile] = useState("");
  return (
    <div className="New">
      <LeftSidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : icon__no_image} alt="" draggable="false"/>
          </div>
          <div className="right">
            <form action="" className='forms'>
              <div className="formInput file">
                <label htmlFor="fileUpload">Image: <UploadFileOutlinedIcon className='icon'/></label>
                <input type="file" name="file" id="fileUpload"
                  style={{display: "none"}}
                  onChange={(e) => {setFile(e.target.files[0])}}  
                />
              </div>
              
              {
                inputs.map((input) => {
                  return (
                    <div className="formInput" key={input.id}>
                      <label htmlFor="">{input.label}</label>
                      <input type={input.type} placeholder={input.placeholder} />
                    </div>
                  )
                })
              } 
              
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New