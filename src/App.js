import React, { Component } from 'react'
import FashionComponent from './Components/FashionComponent/Component';
import "./index.css"
import data from './data/data.json'
import Arrivals from './Components/newArrivals/Arrivals';
import BeautyComponent from './Components/Section3/BeautyComponent';


export default class App extends Component {
  state = {
    products: data.fashioPproducts,
	bestSellers: data.bestSellers,
  }
  render() {
    const product = this.state.products;
    return (
      <div className="App">
        <FashionComponent
        title={product[0].title}
        description={product[0].description}
        imageUrl={product[0].image}/>
		<BeautyComponent/>
        <Arrivals
			imageUrl={this.state.bestSellers[0].image}
		/>
      </div>
    )
  }
}



