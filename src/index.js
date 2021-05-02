import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { PokeProvider } from './PokeContext'

const app = (
	<PokeProvider>
		<App />
	</PokeProvider>
)

ReactDOM.render(app, document.getElementById('root'))
