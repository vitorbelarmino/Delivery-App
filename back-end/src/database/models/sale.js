module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    id: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
   },
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  {
    timestamps: true,
    tableName: 'sales',
  }); 

  return Sales;
};