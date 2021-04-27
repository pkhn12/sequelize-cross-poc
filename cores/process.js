import Sequelize from 'sequelize'
import CustomersRepository from './resources/customers/customers.repository'
import OrdersRepository from './resources/orders/orders.repository'
import {database, database2} from './database'
let customerModel = database.get().models.customers
let orderModel = database2.get().models.orders

CustomersRepository.findOne({ customerNumber: 114 }, { scope: ['customer-orders'] }).then(data => {
  console.log('---------- data customer ---------------')
  console.log(data);
})

OrdersRepository.findBy({ customerNumber: 114 }, { limit: 2}).then(data => {
  console.log('---------- data order ------------------')
  console.log(data)
})

customerModel.findOne({
  where: { id: 114 },
  include: [
    {
      model: orderModel,
      on: {
        customerNumber: Sequelize.literal("`customer`.`customerNumber` = `classicmodels2`.`orders`.`customerNumber`") 
      }
    }
  ]
}).then(data => {
  console.log(data)
})

