import React from 'react'

const Pagination = ({ pokemonPerPage, totalPokemon, paginate }) => {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<nav className='container'>
			<ul className='pagination flex-wrap'>
				{pageNumbers.map(pageNumber => (
					<li key={pageNumber} className='page-item'>
						<a
							onClick={() => paginate(pageNumber)}
							href='!#'
							className='page-link'
						>
							{pageNumber}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Pagination
