import React, { useState, useEffect } from 'react'
import style from "./Arrivals.module.css"
import ItemComponent from './ItemComponent'
import data from '../../data/data.json'


export default function Arrivals() {
	const [productData, setproductData] = useState(data.bestSellers);
    return (
		<div className={style.wrapper}>
			<h1 className={style.hedding}>Best Sellers</h1>
		<div className={style.main_flex}>
				{productData.map(product => {
					return (
						<ItemComponent
							key={product._id}
							title={product.title}
							description={product.description}
							price={product.price}
							imageUrl={product.image}
						/>
					)
				})}
		</div>
				<button>View All</button>
		</div>
    )
}
