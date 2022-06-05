import React from 'react'

import "./Widget.css"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

function Widget({ type }) {
    let data;
    switch (type) {
        case "user":
            data = {
                title: "users",
                counter: 21325,
                isMoney: false,
                link: "See all Users",
                percentage: 20,
                icon: (
                    <PersonOutlinedIcon
                      className="icon"
                      style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                      }}
                    />
                )
            }
            break;
        case "orders":
            data = {
                title: "orders",
                counter: 21131,
                isMoney: false,
                percentage: -22.5,
                link: "See all orders",
                icon: (
                    <ShoppingCartOutlinedIcon
                      className="icon"
                      style={{
                        backgroundColor: "rgba(218, 165, 32, 0.2)",
                        color: "goldenrod",
                      }}
                    />
                )
            }
            break;
        case "earnings":
            data = {
                title: "earnings",
                counter: 125358,
                isMoney: true,
                link: "See all earnings",
                percentage: 35,
                icon: (
                    <MonetizationOnOutlinedIcon
                      className="icon"
                      style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                    />
                )                
            }
            break;
        case "balance":
            data = {
                title: "balance",
                counter: 23324,
                isMoney: true,
                link: "balance sheet",
                percentage: -8,
                icon: (
                    <AccountBalanceWalletOutlinedIcon
                      className="icon"
                      style={{
                        backgroundColor: "rgba(128, 0, 128, 0.2)",
                        color: "purple",
                      }}
                    />
                )
            }
            break;
        default:
            break;
    }
  return (
    <div className='Widget'>
        <div className="widget__left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {data.counter}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="widget__right">
            <div className={data.percentage > 0 ? "percentage positive" : "percentage negative" }>
                {data.percentage > 0 ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon /> }
                {data.percentage}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget