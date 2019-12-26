import React from 'react'
import {Link} from 'gatsby'
import Title from "../Globals/Title";

export default function info() {
	return (
		<section className="py-5">
			<div className="container">
				<div className="row">
					<div className="col-10 col-sm-8 mx-auto text-center">
						<Title title="About Us" />
						<p className="lead text-muted mb-5 text-justify">
						Lorem ipsum dolor sit amet, volutpat vulputate mi varius diam, vel vitae, tellus dui ut lorem, integer mi ante fusce turpis. Tempus accumsan placerat wisi per volutpat, consectetuer ac sem a varius a, mauris arcu ante dolor lorem ultrices. Libero id cubilia neque adipiscing eget, vitae augue sagittis volutpat neque venenatis, id aliquam posuere nisl nulla. Mauris consectetuer, duis lorem cursus velit, non molestie sed sapien. Lacus ac urna sapien amet curabitur, metus doloribus libero aliquam ultricies, quis tempus justo sapien, vitae vestibulum vivamus in convallis nibh. Arcu aenean, harum fermentum velit augue, in molestie vestibulum, donec amet. Suspendisse nec tellus vitae id vitae scelerisque, fuga ac vivamus nec.
						</p>
						<Link to="/about"><button className="btn text-uppercase btn-yellow">Visit Page</button></Link>
					</div>
				</div>
			</div>
		</section>
	)
}