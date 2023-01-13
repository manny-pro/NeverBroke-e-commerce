import { DataTypes } from "sequelize";
import sequelize from "../instance";

export const order = sequelize.define('order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  price: {
    type: DataTypes.INTEGER,
    allowNul: false,
  },

  total: {
    type: DataTypes.INTEGER,
    allowNul: false,
  },

  products: {
    type: DataTypes.STRING,
    allowNul: false,
  },

  username: {
    type: DataTypes.STRING,
    allowNul: false,
  },

});


export default order;

