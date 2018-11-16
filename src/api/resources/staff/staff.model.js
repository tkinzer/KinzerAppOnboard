import mongoose from 'mongoose'

const staffSchema = new mongoose.Schema({

    name: {
        type: String
    },
    details: {
        type: Object,
        unique: false,
        required: false
    }

}, {timestamps: true})

export const Staff = mongoose.model('staff', staffSchema)