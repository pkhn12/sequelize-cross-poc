let ordersModel = (sequelize, DataType) =>
  sequelize.define('orders', {
    orderNumber: {
      type: DataType.INTEGER,
      primaryKey: true,
    },
    orderDate: {
      type: DataType.DATE
    },
    requiredDate: {
      type: DataType.DATE
    },
    shippedDate: {
      type: DataType.DATE
    },
    status: {
      type: DataType.STRING
    },
    comments: {
      type: DataType.STRING
    },
    customerNumber: {
      type: DataType.INTEGER,
    }
  }, {
    tableName: 'orders',
    timestamps: false,
  })


export default ordersModel