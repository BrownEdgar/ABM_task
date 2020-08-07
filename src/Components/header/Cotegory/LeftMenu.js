import React from 'react'


export default function LeftMenu() {
    return (
        <div>
        <ul>
            <li> <i className="far fa-user"></i>         </li>
            <li> <i className="far fa-heart"></i>        </li>
            <li> <i className="fas fa-shopping-bag"></i> </li>
        </ul>
        <select name="" id="curency">
            <option value="amd" >AMD</option>
            <option value="eur" >EUR</option>
            <option value="usd" >USD</option>
        </select>
        <select name="" id="lang">
            <option value="arm"></option>
            <option value="ru"></option>
            <option value="en"></option>
        </select>
    </div>
    
    )
}
