import Sequelize from 'sequelize'
let sequelizeObject = new Sequelize()
let sequelizeObject2 = new Sequelize()

// import ordersModel from './resources/orders/orders.model'

export async function init () {
  sequelizeObject = new Sequelize('classicmodels', 'root', '1234', {
    host: '127.0.0.1',
    port: 3307,
    logging: false,
    dialect: 'mysql',
    sync: { force: false },
    pool: {
      min: 0,
      max: 15
    }
  })
  sequelizeObject.dialect.supports.schemas = true;
  sequelizeObject.import('./resources/customers/customers.model')

  sequelizeObject2 = new Sequelize('classicmodels2', 'root', '1234', {
    host: '127.0.0.1',
    port: 3307,
    logging: false,
    dialect: 'mysql',
    sync: { force: false },
    pool: {
      min: 0,
      max: 15
    }
  })
  sequelizeObject2.dialect.supports.schemas = true;
  sequelizeObject2.import('./resources/orders/orders.model')
}

export let database = {
  get: function () {
    return sequelizeObject
  }
}

export let database2 = {
  get: function () {
    return sequelizeObject2
  }
}
