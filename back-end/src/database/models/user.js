module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    id: { 
    type: DataTypes.INTEGER,allowNull: false,
    autoIncrement: true,
    primaryKey: true,
   },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users',
  })
  User.associate = (models) => {
    User.hasMany(models.Sales, { foreignKey: 'user_id', as: 'customers'});
    User.hasMany(models.Sales, { foreignKey: 'seller_id', as: 'sellers'});
  };; 

  return User;
};