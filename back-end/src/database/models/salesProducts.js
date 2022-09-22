module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
   
    sale_id: { 
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


  SalesProducts.associate = (models) => {

    SalesProducts.belongsToMany(models.Products, {
    as: 'products',
    through: SalesProducts,
    foreignKey: 'product_id',
    otherKey: 'sale_id',
  });

  SalesProducts.belongsToMany(models.Sales, {
    as: 'sales',
    through: SalesProducts,
    foreignKey: 'sale_id',
    otherKey: 'product_id',
  });

}


  return SalesProducts;
};