import React from 'react'
import style from "./ProductItem.module.css"
import formatCurrency from '../../../util';
export default function ItemComponent(props) {
	return (
		
		<div className={style.main_flex_item}>
			<div className={props.imgBox}>
				<img src={props.imageUrl} alt="product Image" />
			</div>
			<span className={style.ex}></span>
			<div className={style.infobox}>
				<h3>{props.title}</h3>
				<span>{props.description}</span>
				<p>{formatCurrency(props.price)}</p>
			</div>
		</div>
	)
}