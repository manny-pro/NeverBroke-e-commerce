
import { DataTypes } from 'sequelize';
import sequelize from '../instance';
import order from './order';

export const users = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  username: {
    type: DataTypes.STRING,
    allowNul: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

users.hasMany(order, {});
order.belongsTo(users, {});

export default users;