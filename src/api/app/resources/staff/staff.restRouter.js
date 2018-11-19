import express from 'express'
import staffController from './staff.controller'

export const staffRouter = express.Router()

staffRouter.param('id', staffController.findByParam)

staffRouter.route('/')
    .get(staffController.getAll)
    .post(staffController.createOne)

staffRouter.route('/:id')
    .get(staffController.getOne)
    .put(staffController.updateOne)
    .delete(staffController.createOne)