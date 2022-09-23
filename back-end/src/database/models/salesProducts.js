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
    underscored: true,
  });


  SalesProducts.associate = (models) => {

    SalesProducts.belongsToMany(models.Products, {
    as: 'products',
    through: SalesProducts,
    foreignKey: 'productId',
    otherKey: 'saleId',
  });

  SalesProducts.belongsToMany(models.Sales, {
    as: 'sales',
    through: SalesProducts,
    foreignKey: 'saleId',
    otherKey: 'productId',
  });

}


  return SalesProducts;
};