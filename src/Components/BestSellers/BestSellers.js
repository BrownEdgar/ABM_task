import React, { useState, useEffect } from 'react'
import style from "./BestSellers.module.css"
import ProductItem from '../UI/ProductsItem/ProductItem'
import data from '../../data/data.json'


export default function BestSellers() {
	const [productData, setproductData] = useState(data.newArrivals);
    return (
		<div className={style.wrapper}>
			<h1>Best Sellers</h1>
		<div className={style.main_flex}>
				{productData.map(product => {
					return (
						<ProductItem
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
