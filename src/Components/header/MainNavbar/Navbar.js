import React,{useState} from 'react'
import style from './Navbar.module.css'

export default function Navbar() {
    const [menuList, setmenuList] = useState(
        [
          'New Arrivals', 'Brands', 'Clothing','Shoes', "Bags",'Accessories','Jewellery','Lingerie','Beauty',"Sale"])

          const getIndex = (index) =>{
              console.log(index);
          }  
    return (
        <div className={style.navWrapper}>
            <nav>
                <ul className={style.menuList}>
                   {menuList.map((elem,index) => {
                        return <li key={index}
                        onMouseOver={()=> getIndex(index)}>{elem}</li>
                   })}
                </ul>
            </nav>
        </div>
    )
}
