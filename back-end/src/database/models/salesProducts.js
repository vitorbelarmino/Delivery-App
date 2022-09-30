module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
   
    saleId: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'sale_id'
    },
    productId:{ 
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'product_id'
    },
    quantity: DataTypes.INTEGER
    
  },
  {
    timestamps: false,
    tableName: 'salesProducts',
    underscored: true,
  });


  SalesProducts.associate = (models) => {

  //   models.Products.belongsToMany(models.Sales, {
  //   as: 'sales',
  //   through: SalesProducts,
  //   foreignKey: 'productId',
  //   otherKey: 'saleId',
  // });

  models.Sales.belongsToMany(models.Products, {
    as: 'products',
    through: SalesProducts,
    foreignKey: 'saleId',
    otherKey: 'productId',
  });

}


  return SalesProducts;
};