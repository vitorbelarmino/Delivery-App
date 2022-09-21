module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
   
    sele_id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    product_id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    quantity: DataTypes.INTEGER
    
  },
  {
    timestamps: false,
    tableName: 'salesProducts',
  }); 

  return SalesProducts;
};