import mongoose from 'mongoose'

const animalSchema = new mongoose.Schema({

    name: {
        type: String
    },
    details: {
        type: Object,
        unique: false,
        required: false
    }

}, {timestamps: true})

export const Animal = mongoose.model('animal', animalSchema)