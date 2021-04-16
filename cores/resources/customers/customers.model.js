let customerModel = (sequelize, DataType) =>
  sequelize.define('customers', {
    customerNumber: {
      type: DataType.INTEGER,
      primaryKey: true,
    },
    customerName: {
      type: DataType.STRING,
    },
    customerName: {
      type: DataType.STRING,
    },
    contactLastName: {
      type: DataType.STRING,
    },
    contactFirstName: {
      type: DataType.STRING,
    },
    phone: {
      type: DataType.STRING,
    },
    addressLine1: {
      type: DataType.STRING,
    },
    addressLine2: {
      type: DataType.STRING,
    },
    city: {
      type: DataType.STRING,
    },
    state: {
      type: DataType.STRING,
    },
    postalCode: {
      type: DataType.STRING,
    },
    country: {
      type: DataType.STRING,
    },
    salesRepEmployeeNumber: {
      type: DataType.INTEGER,
    },
    creditLimit: {
      type: DataType.DECIMAL,
    },
  }, {
    // tableName: 'customers',
    timestamps: false,
    // schema: 'customers',
  })

export default customerModel