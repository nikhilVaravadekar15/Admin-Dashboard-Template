import React from 'react'

import "./Widget.css"
import {
  widget_user_data,
  widget_orders_data,
  widget_earnings_data,
  widget_balance_data
} from '../../data/Widget_data';

import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function Widget({ type }) {
    let data;
    switch (type) {
        case "user":
            data = widget_user_data
            break;
        case "orders":
            data = widget_orders_data
            break;
        case "earnings":
            data = widget_earnings_data
            break;
        case "balance":
            data = widget_balance_data
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