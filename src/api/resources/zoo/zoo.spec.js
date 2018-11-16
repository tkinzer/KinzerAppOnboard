import createApiSpec from '~/apiSpecs'
import { Zoo } from './zoo.model'

createApiSpec(Zoo, 'zoo', {
    zooName: 'Moron Mountian', 
    zooFinances: {
        total_capital: 30000000000000000,
        budgets: [
            {
                type: 'annual',
                max_amount: 500000,
                spending_goal: 20000
            }
        ]
    },
    operatingDetails: {
        fees: [
            {
                groupType: 'senior',
                cost: 0
            },
            {
                groupType: 'non-senior',
                cost: 20
            }
        ],
        schedule: {
            
        },
        total_capacity: 10000
    }
})