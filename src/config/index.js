import merge from 'lodash.merge'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const env = process.env.NODE_ENV

const baseConfig = {
    port: 3000,
    secrets: {},
    db: {
        url: 'mongodb://localhost/kinzer_zoo'
    }
}

let envConfig = {};

switch(env) {
    case 'development':
    case 'dev':
        envConfig = rquire('./dev').config
        break;
    case 'test':
    case 'testing':
        envConfig = rquire('./testing').config
        break;
    default:
        break;
}