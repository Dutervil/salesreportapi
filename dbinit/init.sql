CREATE DATABASE IF NOT EXISTS salesreportdb;

USE salesreportdb;

DROP TABLE IF EXISTS products;

CREATE TABLE products
(
    id           BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    name         VARCHAR(255) DEFAULT NULL,
    description  VARCHAR(255) DEFAULT NULL,
    price        DOUBLE,
    quantity     INT  DEFAULT 0,
    PRIMARY KEY (id)
) AUTO_INCREMENT = 1;







DELIMITER //
CREATE PROCEDURE create_and_return(IN name VARCHAR(250), IN description VARCHAR(255), IN price DOUBLE, IN quantity INT)
BEGIN
    INSERT INTO products(name,description,price,quantity) VALUES (name,description,price,quantity);
    SET @PRODUCT_ID = LAST_INSERT_ID();
    SELECT * FROM products WHERE id=@PRODUCT_ID;

END //
DELIMITER ;
