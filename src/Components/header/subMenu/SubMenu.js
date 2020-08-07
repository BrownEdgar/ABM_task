import React,{useState} from 'react'
import style from './SubMenu.module.css'
import Shopby from './Shopby'
import AllProducts from './AllProducts'
import ImageSection from './ImageSection'
import data from "../../../data/data.json"

export default function SubMenu(props) {
	const [subMenusData, setsubMenusData] = useState(data.subMenusData)

    return (
		<div className={style.flex_box}
			onMouseLeave={props.mouseLeave}>
			<div className={style.subFlex}>
					<Shopby/>
				<AllProducts options={subMenusData[props.currentPosition]}/>
			</div>
			<div className={style.flex_box_item}>
				<ImageSection options={subMenusData[props.currentPosition]}/>
			</div>
        </div>
    )
}
