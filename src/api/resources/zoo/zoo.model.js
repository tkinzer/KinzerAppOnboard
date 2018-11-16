import mongoose from 'mongoose'

const zooSchema = new mongoose.Schema({

    zooName: {
        type: String,
        unique: true,
        required: true
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