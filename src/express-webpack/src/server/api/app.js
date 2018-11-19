import http from 'http'
// import { execute, subscribe } from 'graphql'
import { createServer } from 'http'

import app from '../server'
// import schema from './schema' - why after app?

const server = http.createServer(app)
let currentApp = app

server.listen(5000, () => {
	console.log('Server listening on port 5000')
})

if (module.hot) {
	module.hot.accept(['../server'], () => {
		server.removeListener('request', currentApp)
		server.on('request', app)
		currentApp = app
	})
}