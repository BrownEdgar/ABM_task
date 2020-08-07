import React from 'react'
import style from './HeaderCotegory.module.css'
import {Link} from 'react-router-dom'
import Logo from './logo.png'
import LeftMenu from './LeftMenu'

export default function HeaderCotegory(props) {

	return (
		<div className={style.main}>
			<div>
				<nav className={style.categoryList}>
					<ul>
						<li> <Link to='/women'>Women</Link></li>
						<li> <Link to='/men'>Men</Link></li>
						<li> <Link to='/kids'>Kids</Link></li>
					</ul>
				</nav>
			</div>
			<div>
				<img src={Logo} alt="logo"/>
			</div>
			<LeftMenu/>
			</div>
	)

}
