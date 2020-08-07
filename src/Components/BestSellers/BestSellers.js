import React, { useState } from 'react'
import style from "./BestSellers.module.css"
import ProductItem from '../UI/ProductsItem/ProductItem'
import data from '../../data/data.json'
import Button from '../UI/Button/Button';


export default function BestSellers() {
	const [productData, setproductData] = useState(data.newArrivals);
    return (
		<div className={style.wrapper}>
			<h1>new Arrivals</h1>
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
