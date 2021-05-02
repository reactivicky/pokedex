import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Loader from './components/Loader/Loader'
import PokemonList from './components/PokemonList/PokemonList'
import Pokemon from './components/Pokemon/Pokemon'
import { PokeContext } from './PokeContext'

function App() {
	const [state] = useContext(PokeContext)
	return (
		<Router>
			<div>
				{state.loading && <Loader />}
				<Navbar />
				<Switch>
					<Route exact path='/' component={PokemonList} />
					<Route exact path='/pokemon/:pokemonIndex' component={Pokemon} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
