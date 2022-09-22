module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
   },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'products',
  }); 


  return Products;
};