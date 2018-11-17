import express from 'express'
import setupMiddware from './middleware'
import { restRouter } from '.'
import { connect } from './db'
import { signin } from './modules/auth'

const app = express();

setupMiddware(app)
connect()

app.use('/signin', signin)
//REMOVED AUTH DUE TO TIME: app.use('/api', protect, restRouter)
app.use('/api', restRouter)

app.get('/', (req,res) => {
  res.json({ok: true});
})

app.use((err,req,res,next) => {
  console.error("ooops a daisies")
  res.status(404).send('Noooooo!');
})

export default app
