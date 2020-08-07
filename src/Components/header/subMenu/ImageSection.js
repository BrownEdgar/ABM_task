import React from 'react'
import style from './SubMenu.module.css'
export default function ImageSection(props) {
	console.log('props.options.image', props.options.image)
	return (
		<>
			<h1>{props.options.imageTitle}</h1>
			<h2>24</h2>
		
			<img src={props.options.image} alt="nkar" />
	
		</>
	)
}
