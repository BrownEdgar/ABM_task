import React from 'react'
import style from "./Component.module.css"
export default function Component(props) {
    return (
        <div className={style.wrapper}>
            <div className={style.wrapper_text_box}>
            <h1>{props.title.toUpperCase()}</h1>
            <p>{props.description}</p>
            </div>
            <div className={style.mainImg}>      
                <img src={props.imageUrl} alt="my image"></img>
            </div>
        </div>
    )
}
