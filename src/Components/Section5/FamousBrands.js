import React,{ useState, useEffect }from 'react'
import style from "./FamousBrands.module.css"
export default function FamousBrands() {
	const [brands, setbrands] = useState([
		{ id:1,title: "Dolce & Gabana"},
		{ id:2,title: "Guchii"},
		{ id:3,title: "BurBerry"},
	])
	return (
	
			<div className={style.main}>
				<h1>Famous Brands</h1>
			<div className={style.flex}>
			{brands.map((product) =>{
				return (
					<div 
					key={product.id}
					className={style.flexItems}>
						<h5>{product.title}</h5>
					</div>
				)
			})}
				</div>
			</div>
	)
}
