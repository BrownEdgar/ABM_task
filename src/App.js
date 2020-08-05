import React, { Component } from 'react'
import FashionComponent from './Components/FashionComponent/Component';
import "./index.css"
import data from './data/data.json'
import Arrivals from './Components/newArrivals/Arrivals';


export default class App extends Component {
  state = {
    products: data.fashioPproducts,
  }
  render() {
    const product = this.state.products;
    return (
      <div>
        <FashionComponent
        title={product[0].title}
        description={product[0].description}
        imageUrl={product[0].image}/>

        <Arrivals/>
      </div>
    )
  }
}



