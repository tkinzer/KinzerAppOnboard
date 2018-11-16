import createApiSpec from '~/apiSpecs'
import { Animal } from './animal.model'

createApiSpec(Animal, 'animal', {name: 'doggy'})