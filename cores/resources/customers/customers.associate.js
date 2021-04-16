import {database, database2} from '../../database'
const customerModel = database.get().models.customers
const orderModel = database2.get().models.orders

customerModel.hasMany(orderModel,  {as: 'orders', foreignKey: 'customerNumber'})