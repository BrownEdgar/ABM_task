import React, { Component } from 'react'
import FashionComponent from './Components/FashionComponent/Component';
import "./index.css"
import data from './data/data.json'
import Arrivals from './Components/newArrivals/Arrivals';
import BeautyComponent from './Components/Section3/BeautyComponent';
import BestSellers from './Components/BestSellers/BestSellers';
import FamousBrands from './Components/Section5/FamousBrands';
import TopComponent from './Components/header/top/TopComponent';
import HeaderCotegory from './Components/header/Cotegory/HeaderCotegory';


export default class App extends Component {
  state = {
    products: data.fashioPproducts,
	bestSellers: data.bestSellers,
  }
  render() {
    const product = this.state.products;
    return (
      <div className="App">
	
	  <TopComponent login={true}/>
	  <HeaderCotegory/>
        <FashionComponent
        title={product[0].title}
        description={product[0].description}
        imageUrl={product[0].image}/>
		<BestSellers/>
		<BeautyComponent/>
        <Arrivals
			imageUrl={this.state.bestSellers[0].image}
		/>
		<FamousBrands/>
      </div>
    )
  }
}



