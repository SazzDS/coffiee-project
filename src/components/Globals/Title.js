import React from 'react'

export default function Title({title}) {
	return (
		<div>
			<h1 className="lead text-muted mb-5 text-uppercase font-weight-bold">{title}</h1>
		</div>
	)
}