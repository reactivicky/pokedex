import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import classes from './Card.module.css'

const Card = ({ name, url }) => {
	const [loading, setLoading] = useState(true)
	const pokemonIndex = url.split('/')[url.split('/').length - 2]
	const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

	return (
		<Link to={`pokemon/${pokemonIndex}`} className={classes.Card}>
			{loading && <Loader type='Rings' color='black' height={96} width={96} />}
			<img
				src={imageUrl}
				alt={name}
				onLoad={() => setLoading(false)}
				style={loading ? { display: 'none' } : null}
			/>
			<p className={classes.PokemonName}>{name}</p>
		</Link>
	)
}

export default Card
