import express from 'express'
import setupMiddware from './middleware'
import { restRouter } from './api'
import { connect } from './db'
import { signin, protect } from './api/modules/auth'
// Declare an app from express
const app = express();

// const apiRouter = express.Router();

// apiRouter.get('/', (req,res) => {
//   res.json({api: true});
// });

setupMiddware(app)
connect()
// setup basic routing for index route

app.use('/signin', signin)
app.use('/api', protect, restRouter)


app.get('/', (req,res) => {
  res.json({ok: true});
});

// catch all
app.all('*', (req, res) => {
  res.json({ok: true})
})

app.use((err,req,res,next) => {
  console.error("ooops a daisies")
  res.status(404).send('Noooooo!');
})

export default app
