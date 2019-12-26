import React from 'react';
import {Link} from 'gatsby';
import Title from "../Globals/Title";
import Img from 'gatsby-image';

const getCategories = items => {
	let tempItems = items.map(items=>{
		return items.node.category;
	});
	let tempCategories = new Set(tempItems);
	let categories = Array.from(tempCategories);
	categories = ["all", ...categories];
	// console.log(categories);
	return categories;
}

export default class Menu extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			items: props.items.edges,
			coffeeItems: props.items.edges,
			categories: getCategories(props.items.edges)
		};
		// console.log(props.items);
	}

	handleItems = (category) => {
		let tempItems = [...this.state.items];
		if (category === 'all') {
			this.setState(()=>{
				return {coffeeItems: tempItems}
			})
		} else {
			let items = tempItems.filter(({node})=> node.category === category);
			this.setState(()=>{
				return {coffeeItems: items}
			})
		}
	}

	render() {
		if (this.state.items.length > 0) {
			return (
				<section className="menu py-5">
					<div className="container text-center">
						<Title title="Our Menu" />
						<div className="row mb-5 text-center">
						{this.state.categories.map((category, index) => {
							return (<button key={index} type="button" className="btn btn-yellow text-capitalize mx-1 center-block" onClick={()=>{this.handleItems(category)}}>{category}</button>)
						})}
						</div>
						<div className="row">
								{this.state.coffeeItems.map(({node})=>{
									return (
										<div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
											<div>
											<Img fixed={node.image.fixed} />
											</div>
											<div className="flex-grow-1 py-3">
												<h4 className="col-11 col-md-6 text-muted">{node.title}</h4>
												<p className="text-muted">{node.description.description}</p>
											</div>
										</div>
									)
								})}
						</div>
						<Link to="/about"><button className="btn text-uppercase btn-yellow">Visit Page</button></Link>
					</div>
				</section>
			)
		} else {
			return (
				<section className="menu py-5">
					<div className="container">
						<div className="row">
							<div className="col-10 col-md-6 mx-auto text-center">
								<Title title="Our Menu" />
								<p className="lead text-muted mb-5 text-justify">
								No Items to Display.
								</p>
								<Link to="/about"><button className="btn text-uppercase btn-yellow">Visit Page</button></Link>
							</div>
						</div>
					</div>
				</section>
			)
		}
	}
}