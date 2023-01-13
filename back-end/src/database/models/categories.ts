import { DataTypes } from 'sequelize';
import sequelize from '../instance';
import products from './products';



export const categories = sequelize.define('categories', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  name: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

});

categories.hasMany(products, {})
products.belongsTo(categories, {});

export default categories;