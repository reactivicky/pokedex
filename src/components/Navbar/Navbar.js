import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { PokeContext } from '../../PokeContext'
import classes from './Navbar.module.css'
import axios from 'axios'

const Navbar = props => {
	const [inputVal, setInputVal] = useState('')
	const [type, setType] = useState('')
	const [, setState] = useContext(PokeContext)

	const handleInputChange = e => {
		setInputVal(e.target.value)
	}

	const handleSelectChange = async e => {
		const type = e.target.value
		let indexVal = null
		try {
			switch (type) {
				case 'normal':
					indexVal = 1
					break
				case 'fighting':
					indexVal = 2
					break
				case 'flying':
					indexVal = 3
					break
				case 'poison':
					indexVal = 4
					break
				case 'ground':
					indexVal = 5
					break
				case 'rock':
					indexVal = 6
					break
				case 'bug':
					indexVal = 7
					break
				case 'ghost':
					indexVal = 8
					break
				case 'steel':
					indexVal = 9
					break
				case 'fire':
					indexVal = 10
					break
				case 'water':
					indexVal = 11
					break
				case 'grass':
					indexVal = 12
					break
				case 'electric':
					indexVal = 13
					break
				case 'psychic':
					indexVal = 14
					break
				case 'ice':
					indexVal = 15
					break
				case 'dragon':
					indexVal = 16
					break
				case 'dark':
					indexVal = 17
					break
				case 'fairy':
					indexVal = 18
					break
				default:
					break
			}

			const data = await axios.get(`https://pokeapi.co/api/v2/type/${indexVal}`)
			setType(type)
			const filteredArray = data.data.pokemon.map(pokemon => ({
				name: pokemon.pokemon.name,
				url: pokemon.pokemon.url
			}))
			setState(prevState => ({ ...prevState, pokemon: [...filteredArray] }))
		} catch (e) {
			console.log(e)
		}
	}

	const handleFormSubmit = async e => {
		e.preventDefault()
		if (inputVal !== '') {
			try {
				const data = await axios.get(
					`https://pokeapi.co/api/v2/pokemon/${inputVal.toLowerCase().trim()}`
				)
				setState(prevState => ({ ...prevState, pokemon: [data.data.species] }))
				setInputVal('')
			} catch (e) {
				setInputVal('')
			}
		}
	}

	return (
		<nav className={classes.Navbar}>
			<Link to='/' replace>
				<h1>PokeDex</h1>
			</Link>
			<form onSubmit={handleFormSubmit}>
				<input type='text' value={inputVal} onChange={handleInputChange} />
				<button>Search</button>
			</form>
			<div className={classes.SelectType}>
				<label htmlFor='filterType'>Filter By Type:</label>
				<select id='filterType' value={type} onChange={handleSelectChange}>
					<option value='normal'>Normal</option>
					<option value='fighting'>Fighting</option>
					<option value='flying'>Flying</option>
					<option value='poison'>Poison</option>
					<option value='ground'>Ground</option>
					<option value='rock'>Rock</option>
					<option value='bug'>Bug</option>
					<option value='ghost'>Ghost</option>
					<option value='steel'>Steel</option>
					<option value='fire'>Fire</option>
					<option value='water'>Water</option>
					<option value='grass'>Grass</option>
					<option value='electric'>Electric</option>
					<option value='psychic'>Psychic</option>
					<option value='ice'>Ice</option>
					<option value='dragon'>Dragon</option>
					<option value='dark'>Dark</option>
					<option value='fairy'>Fairy</option>
				</select>
			</div>
		</nav>
	)
}

export default Navbar
