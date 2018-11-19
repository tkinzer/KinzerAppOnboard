import express from 'express'
import animalController from './animal.controller'

export const animalRouter = express.Router()

animalRouter.param('id', animalController.findByParam)

animalRouter.route('/')
    .get(animalController.getAll)
    .post(animalController.createOne)

animalRouter.route('/:id')
    .get(animalController.getOne)
    .put(animalController.updateOne)
    .delete(animalController.createOne)