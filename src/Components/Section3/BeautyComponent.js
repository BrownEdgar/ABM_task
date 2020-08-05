import React from 'react'
import style from "./BeautyComponent.module.css"
export default function BeautyComponent() {
	return (
		<div className={style.beauty}>
			<div className={style.img_container}>
			</div>
			<div className={style.text_box}>
				<h1>The Beauty Hall of Fame</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit eum neque necessitatibus amet optio.</p>
				<button className={style.btn}>Buy now</button>
			</div>
		</div>
	)
}
