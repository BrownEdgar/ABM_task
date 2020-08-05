import React from 'react'
import style from "./Arrivals.module.css"
export default function ItemComponent(props) {
	console.log(props.imageUrl);
	return (
		<div className={style.main_flex_item}>
			<div className={props.imgBox}>
				<img src={props.imageUrl} alt="producr Image"/>
			</div>
			<span className={style.ex}></span>
			<div className={style.infobox}>
				<h3>{props.title}</h3>
				<span>{props.description}</span>
				<p>{props.price}</p>
			</div>
		</div>
	)
}
