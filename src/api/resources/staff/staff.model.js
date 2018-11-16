import mongoose from 'mongoose'

const staffSchema = new mongoose.Schema({

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

staffSchema.methods = {
    getSchedule(staffMember) {

    } 
}

export const Staff = mongoose.model('staff', staffSchema)