import createApiSpec from '~/apiSpecs'
import { Zoo } from './zoo.model'

createApiSpec(Zoo, 'zoo', {
    name: 'Moron Mountian', 
    zooFinances: {}
})