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
    timestamps: false,
    tableName: 'sales',
  });


  Sales.associate = (models) => {
    Sales.belongsTo(models.Users, { foreignKey: 'user_id', as: 'user'});
    Sales.belongsTo(models.Users, { foreignKey: 'seller_id', as: 'seller'});    
  };

  return Sales;
};