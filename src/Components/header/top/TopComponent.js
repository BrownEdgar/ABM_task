import React from 'react'
import style from './TopComponent.module.css'

export default function TopComponent(props) {
	const show = <div className={style.main}>
        <p>
            Enjoy an Extra 10% off sale with rewards.Discount applied ad checkout.
            <span>
                <a href="#">Join Now</a>
            </span>
        </p>
    </div>
    return props.login ? show : null
    
}
