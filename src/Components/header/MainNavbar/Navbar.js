import React,{useState} from 'react'
import style from './Navbar.module.css'
import SubMenu from '../subMenu/SubMenu';

export default function Navbar() {
	const [menuList, setdata] = useState(
		['New Arrivals', 'Brands', 'Clothing','Shoes', "Bags",'Accessories','Jewellery','Lingerie','Beauty',"Sale"])
	const [currentMenuPosition, setcurrentMenuPosition] = useState(null)
	const getIndex = (index) => {
		if (index > 9) {
			setcurrentMenuPosition(null);
		}
		setcurrentMenuPosition(index);
	}

    return (
		<>
        <div className={style.navWrapper}>
            <nav>
                <ul className={style.menuList}>
						{menuList.map((elem,index) => {
                        return <li key={index}
						onMouseOver={() => getIndex(index)} 
						>{elem}</li>
                   })}
                </ul>
            </nav>
			
        </div>
			{currentMenuPosition !== null && currentMenuPosition < 9
			 ? <SubMenu 
					mouseLeave={() => setcurrentMenuPosition(null)}
					currentPosition={currentMenuPosition}
			 /> 
			 : null}
				
		</>
    )
}
