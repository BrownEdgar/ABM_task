import React, { Component } from 'react'
import "./index.css"
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import data from './data/data.json'
import { 
		Arrivals,
		FashionComponent,
		BeautyComponent,
		BestSellers,
		FamousBrands,
		TopComponent,
		HeaderCotegory,
		Navbar,
		FooterComponent, 
		CopyRight} from "./Components";




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
        <Router>
        	<Switch>
        		<HeaderCotegory/>
     		</Switch>
        </Router>
        <Navbar/>
	
        <FashionComponent
			title={product[0].title}
			description={product[0].description}
			imageUrl={product[0].image}/>
			<BestSellers/>
			<BeautyComponent/>
			<Arrivals imageUrl={this.state.bestSellers[0].image}/>
			<FamousBrands/>
        <FooterComponent/>
			<CopyRight/>
      </div>
    )
  }
}



