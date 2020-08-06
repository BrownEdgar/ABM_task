import React from 'react'
import style from "./FooterComponent.module.css";
import logo from "../../logo.png"
import Fitems from './Fitems';

export default function FooterComponent() {
    return (
        <div className={style.footer_box} >
            <Fitems>
                <img src={logo} alt="logo"/>
            </Fitems>
            <Fitems>
            <h1>Assortiment</h1>
                    <nav >
                        <ul>
                        <li>Clothing</li>
                        <li>Jewellery</li>
                        <li>Brands</li>
                        <li>Sales</li>
                        <li>New Arrivals</li>
                        </ul>
                    </nav> 
            </Fitems>
          <Fitems>
                <h1>About us</h1>
                    <nav >
                        <ul>
                        <li>Company</li>
                        <li>Contact us</li>
                        </ul>
                    </nav>  
          </Fitems>
          <Fitems>
            <h1>Found us</h1>
                <ul>
                <span> <i class="fab fa-facebook-square"></i> </span>
                <span> <i class="fab fa-instagram"></i>       </span>
                <span> <i class="fab fa-twitter"></i>         </span>
                <span> <i class="fab fa-linkedin"></i>        </span>
                </ul>
          </Fitems>
        </div>
    )
}
