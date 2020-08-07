import React from 'react'
import './ImageSection.css'
export default function ImageSection(props) {
	console.log('props.options.image', props.options._id)
	
	return (
		<>
			<h1>{props.options.imageTitle}</h1>
			<h2 className={`stylefor-${props.options._id}`}>24</h2>
			<img src={props.options.image} alt="nkar" />

		</>
	)
}
