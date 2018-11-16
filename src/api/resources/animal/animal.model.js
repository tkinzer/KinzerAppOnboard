import mongoose from 'mongoose'

const animalSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
        required: true
    },
    details: {
        type: Object,
        unique: false,
        required: false
    }

}, {timestamps: true})

animalSchema.methods = {
    
}

export const Animal = mongoose.model('animal', animalSchema)