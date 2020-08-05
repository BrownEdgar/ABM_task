import React from 'react'
import "./Button.css";

export default function Button(props) {
    return (
		<div className="brn_box">
        <button
            className={`btn btn-${props.type}`}
            onClick={props.onClick}>
            {props.children}
        </button>
		</div>
    )
}
// v54