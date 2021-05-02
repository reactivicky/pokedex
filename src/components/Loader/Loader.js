import React from 'react'
import Loader from 'react-loader-spinner'
import classes from './Loader.module.css'

const ModalContainer = props => {
	return (
		<div className={classes.ModalContainer}>
			<div className={classes.Modal}>
				<Loader type='Circles' color='#00BFFF' height={150} width={150} />
				<p>Loading...</p>
			</div>
		</div>
	)
}

export default ModalContainer
