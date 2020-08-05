import React, { useState, useEffect } from 'react'
import style from "./Arrivals.module.css"
import ProductItem from '../UI/ProductsItem/ProductItem'
import data from '../../data/data.json'
import Button from '../UI/Button/Button';


export default function Arrivals() {
	const [productData, setproductData] = useState(data.bestSellers);
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
			<Button
				type="primary">View all</Button>
		</div>
    )
}
