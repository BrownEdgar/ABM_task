import React from 'react'
import style from "./Arrivals.module.css"
export default function Arrivals() {
    return (
        <div className={style.main}>
            <h1>New Arrivals</h1>
            <div className={style.flexBox}>
                <div className={style.flexItem}>
                {/* <img src={""} alt="products image"> */}
                    <h3>New Version</h3>
                    <h3>Luis VIton</h3>
                    <p>Printed custom t-shirt</p>
                    <span>$541</span>
                </div> 
                <div className={style.flexItem}>
                {/* <img src={""} alt="products image"> */}
                    <h3>New Version</h3>
                    <h3>Luis VIton</h3>
                    <p>Printed custom t-shirt</p>
                    <span>$541</span>
                </div> 
                <div className={style.flexItem}>
                {/* <img src={""} alt="products image"> */}
                    <h3>New Version</h3>
                    <h3>Luis VIton</h3>
                    <p>Printed custom t-shirt</p>
                    <span>$541</span>
                </div> 
            </div>
        </div>
    )
}
