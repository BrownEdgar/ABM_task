import React from 'react'
import style from './SubMenu.module.css'
export default function AllProducts(props) {
	console.log('props.options', props.options)
	return (
		<div className="part2">
			<h3>{props.options.title}</h3>
			<ul className={style.allProducts}>
				{props.options.cotegories.map((item, index) => {
					return <li key={index}>{item}</li>	
				})}
			</ul>
		</div>
	)
}
