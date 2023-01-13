import MYAPI from './instance';
import products from './models/products';
import user from './models/user';
import order from './models/order';
import categories from './models/categories';


export async function checkConnection() {
  try {
    await MYAPI.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export async function migrate() {
  try {
    await MYAPI.query('SET FOREIGN_KEY_CHECKS = 0', null, { raw: true });

    await user.sync({ force: true });
    console.log('List of tables users');

    await products.sync({ force: true });
    console.log('List of tables products');

    await order.sync({ force: true });
    console.log('List of tables order');

    await categories.sync({ force: true });
    console.log('List of tables category');

    console.log('Database & tables created!');
  } catch (error: any) {
    console.error('Unable to sync', error);
  }
}
checkConnection();
migrate();

