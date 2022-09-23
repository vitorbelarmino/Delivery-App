module.exports = (sequelize, DataTypes) => {

  const Sales = sequelize.define('Sales', {
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
   },
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    totalPrice: {
      type: DataTypes.DECIMAL,
      field: 'total_price'
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      field: 'delivery_address'
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      field: 'delivery_number'
    },
    saleDate: {
      type: DataTypes.DATE,
      field: 'sale_date'
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Pendente'
    },
  },
  {
    timestamps: false,
    tableName: 'sales',
    underscored: true,
  });


  Sales.associate = (models) => {
    Sales.belongsTo(models.Users, { foreignKey: 'userId', as: 'user'});
    Sales.belongsTo(models.Users, { foreignKey: 'sellerId', as: 'seller'});    
  };

  return Sales;
};