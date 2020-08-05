import React from 'react'
import style from './HeaderCotegory.module.css'
import Logo from './logo.png'

export default function HeaderCotegory(props) {

	return (
		<div className={style.main}>
			<div>
				<nav>
					<ul>
						<li> <a href="#">Women</a></li>
						<li> <a href="#">Men</a></li>
						<li> <a href="#">Kids</a></li>
					</ul>
				</nav>
			</div>
			<div>
				<img src={Logo} alt="logo"/>
			</div>
			<div>
				<ul>
					<li> <i class="far fa-user"></i></li>
					<li> <i class="far fa-heart"></i></li>
					<li> <i class="fas fa-shopping-bag"></i></li>
				</ul>
				<select name="" id="">
					<option value="amd" >AMD</option>
					<option value="eur" >EUR</option>
					<option value="usd" >USD</option>
				</select>
				<select name="" id="">
					<option value="arm" ></option>
					<option value="ru" ></option>
					<option value="en" ></option>
				</select>
			</div>
		</div>
	)

}
