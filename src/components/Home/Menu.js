import React from 'react';
import {Link} from 'gatsby';
import Title from "../Globals/Title";
import Img from 'gatsby-image';

export default class Menu extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			items: props.items.edges,
			coffeeItems: props.items.edges,
		};
		// console.log(props.items);
	}
	render() {
		if (this.state.items.length > 0) {
			return (
				<section className="menu py-5">
					<div className="container">
						<Title title="Our Menu" />
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