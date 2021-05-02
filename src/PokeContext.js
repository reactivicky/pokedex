import React, { useState, createContext } from 'react'

export const PokeContext = createContext()

export const PokeProvider = props => {
	const [state, setState] = useState({
		pokemon: [],
		filteredPokemon: [],
		loading: false
	})
	return (
		<PokeContext.Provider value={[state, setState]}>
			{props.children}
		</PokeContext.Provider>
	)
}
