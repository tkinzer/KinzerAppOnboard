import mongoose from 'mongoose'

const zooSchema = new mongoose.Schema({

    name: {
        type: String,
        default: 'Tim Zoo'
    },
    details: {
        type: Object,
        unique: false,
        required: false
    }

}, {timestamps: true})

zooSchema.methods = {
    confirmSchedule(arrayOfStaff) {
        if(typeOf(arrayOfStaff, 'array') && arrayOfStaff.length >= 5) {
            return true;
        } else {
            throw new Error('Zoo does not have enough staff to operate.')
        }
    }
}

export const Zoo = mongoose.model('zoo', zooSchema)