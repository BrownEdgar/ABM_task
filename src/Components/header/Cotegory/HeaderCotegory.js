import React from 'react'
import style from './HeaderCotegory.module.css'
import {Link} from 'react-router-dom'
import Logo from './logo.png'

export default function HeaderCotegory(props) {

	return (
		<div className={style.main}>
			<div>
				<nav className={style.categoryList}>
					<ul>
						<li>  <Link to='/women'>Women</Link></li>
						<li> <Link to='/men'>Men</Link></li>
						<li> <Link to='/kids'>Kids</Link></li>
					</ul>
				</nav>
			</div>
			<div>
				<img src={Logo} alt="logo"/>
			</div>
			<div>
				<ul>
					<li> <i class="far fa-user"></i>         </li>
					<li> <i class="far fa-heart"></i>        </li>
					<li> <i class="fas fa-shopping-bag"></i> </li>
				</ul>
				<select name="" id="curency">
					<option value="amd" >AMD</option>
					<option value="eur" >EUR</option>
					<option value="usd" >USD</option>
				</select>
				<select name="" id="lang">
					<option value="arm"></option>
					<option value="ru"></option>
					<option value="en"></option>
				</select>
			</div>
		</div>
	)

}
