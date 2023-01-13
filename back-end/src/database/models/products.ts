import { DataType, DataTypes } from "sequelize";
import sequelize from "../instance";

export const products = sequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  products: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  image : {
    type: DataTypes.STRING,
    allowNull: true,
  }

});


export default products;
