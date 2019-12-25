import React from 'react';
import BackgroundImage from 'gatsby-background-image';

export default function BackgroundSection(img) {
	return (
		<div>
			<BackgroundImage
          className={img.styleClass}
          fluid={img.img}
        >
        <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">{img.title}</h1>
        {img.children}
        </BackgroundImage>
		</div>
	)
}

BackgroundSection.defaultProps = {
	title: 'default title',
	styleClass: 'default-background'
}