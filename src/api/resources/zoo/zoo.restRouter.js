import express from 'express'
import zooController from './zoo.controller'

export const zooRouter = express.Router()

zooRouter.param('id', zooController.findByParam)

zooRouter.route('/')
    .get(zooController.getAll)
    .post(zooController.createOne)

zooRouter.route('/:id')
    .get(zooController.getOne)
    .put(zooController.updateOne)
    .delete(zooController.createOne)