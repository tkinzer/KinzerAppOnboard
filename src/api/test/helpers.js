import '../src/api/resources/staff/staff.model'
import '../src/api/resources/animal/animal.model'
import '../src/api/resources/zoo/zoo.model'

import mongoose from 'mongoose'

mongoose.Promise = global.Promise

export const removeModel = (modelName) => {
  const model = mongoose.model(modelName)
  return new Promise((resolve, reject) => {
    if (!model) {
      return resolve()
    }
    model.remove((err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

export const dropDb = () => {
    const TEST_DB_NAME = 'kinzer_zoo';
  return mongoose.connect('mongodb://localhost/' + TEST_DB_NAME, {
    useMongoClient: true
  })
    .then(() => Promise.all(mongoose.modelNames().map(removeModel)))
}
