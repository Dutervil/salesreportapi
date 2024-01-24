export const QUERY = {
    SELECT_PRODUCTS: 'SELECT * FROM products ',
    SELECT_PRODUCT: 'SELECT * FROM products WHERE id = ?',
    CREATE_PRODUCT: 'INSERT INTO products(name,description,price,quantity) VALUES (?, ?, ?, ?);',
    UPDATE_PRODUCT: 'UPDATE products SET name = ?, description = ?, price = ?, quantity = ? WHERE id = ?',
    DELETE_PRODUCT: 'DELETE FROM products WHERE id = ?'
};
