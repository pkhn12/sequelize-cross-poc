export default async function () {
  await require('./cores/database').init().then(() => {
    
    console.log('database init success');
    require('sequelize')
    // model
    require('./cores/resources/customers/customers.model')
    require('./cores/resources/orders/orders.model')

    // associate
    require('./cores/resources/customers/customers.associate')
    
    // scope
    require('./cores/resources/customers/customers.scope')

    require('./cores/process')
  })
}