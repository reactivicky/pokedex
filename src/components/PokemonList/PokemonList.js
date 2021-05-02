import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import classes from './PokemonList.module.css'
// import Pagination from '../Pagination/Pagination'
// import ReactPaginate from 'react-paginate'
import Pagination from 'react-js-pagination'

import { PokeContext } from '../../PokeContext'

const PokemonList = () => {
	const [state, setState] = useContext(PokeContext)
	const [currentPage, setCurrentPage] = useState(1)
	const [pokemonPerPage] = useState(12)

	useEffect(() => {
		const fetch = async () => {
			try {
				setState(prevState => ({ ...prevState, loading: true }))
				const data = await axios.get(
					'https://pokeapi.co/api/v2/pokemon?limit=964'
				)
				setState(prevState => ({ ...prevState, pokemon: data.data['results'] }))
				setState(prevState => ({ ...prevState, loading: false }))
			} catch (e) {
				setState(prevState => ({ ...prevState, loading: false }))
			}
		}
		fetch()
	}, [setState])

	const indexOfLastPokemon = currentPage * pokemonPerPage
	const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage
	const currentPokemons = state.pokemon.slice(
		indexOfFirstPokemon,
		indexOfLastPokemon
	)

	const paginate = pageNumber => setCurrentPage(pageNumber)

	return (
		<div className={classes.Container}>
			<div className={classes.PokemonList}>
				{currentPokemons.map((pokemon, index) => (
					<Card key={pokemon.name + index} {...pokemon} />
				))}
			</div>
			{/* <Pagination
				totalPokemon={state.pokemon.length}
				pokemonPerPage={pokemonPerPage}
				paginate={paginate}
			/> */}
			{/* <ReactPaginate
				previousLabel={'previous'}
				nextLabel={'next'}
				breakLabel={'...'}
				// breakClassName={'break-me'}
				pageCount={currentPage}
				marginPagesDisplayed={2}
				pageRangeDisplayed={pokemonPerPage}
				onPageChange={paginate}
				containerClassName={'pagination'}
				// subContainerClassName={'pages pagination'}
				activeClassName={'page-link'}
			/> */}
			<Pagination
				activePage={currentPage}
				itemsCountPerPage={pokemonPerPage}
				totalItemsCount={state.pokemon.length}
				pageRangeDisplayed={10}
				onChange={paginate}
				itemClass='page-item'
				linkClass='page-link'
			/>
		</div>
	)
}

export default PokemonList
