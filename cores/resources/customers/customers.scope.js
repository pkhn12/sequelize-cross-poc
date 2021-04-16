import sequelize  from 'sequelize'
import {database, database2} from '../../database'
let customerModel = database.get().models.customers
let orderModel = database2.get().models.orders

customerModel.addScope('customer-orders', {
  include: [
    {
      as: 'orders',
      model: orderModel,
      required: true,
    }
  ]
})