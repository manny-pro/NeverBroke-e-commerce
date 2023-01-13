import {DataTypes} from 'sequelize';
import sequelize from '../instance';
import products from './products';
import order from './order';

export const orderhasproducts = sequelize.define('orderhasproducts', {
});

order.belongsToMany(products, {
    through: orderhasproducts,
    foreignKey: 'order_id',
    otherKey: 'products_id',
});

products.belongsToMany(order, {
    through: orderhasproducts,
    foreignKey: 'products_id',
    otherKey: 'order_id',
});


export default orderhasproducts;