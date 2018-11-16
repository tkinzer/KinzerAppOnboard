import express from 'express'
import { zooRouter } from './resources/zoo'
import { staffRouter } from './resources/staff'
//import { animalRouter } from './resources/animal'
import { apiErrorHandler } from './modules/errorHandler'

export const restRouter = express.Router()

//Model Routers
restRouter.use('/zoo', zooRouter)
restRouter.use('/staff', staffRouter)
//restRouter.use('/animal', animalRouter)
restRouter.use(apiErrorHandler)