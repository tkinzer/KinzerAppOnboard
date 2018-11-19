import mongoose from 'mongoose'
mongoose.Promise = global.Promise

export const connect = () => {
    const DB_NAME = 'kinzer_zoo';
  return mongoose.connect('mongodb://localhost/' + DB_NAME, {
    useMongoClient: true
  })
}
