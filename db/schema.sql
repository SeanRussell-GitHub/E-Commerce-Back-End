-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE Category (
    id INT NOT NULL IDENTITY,
    category_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Product (
    id INT NOT NULL IDENTITY,
    product_name VARCHAR(30) NOT NULL,
    price DECIMAL (7,2) NOT NULL,
    stock INT NOT NULL DEFAULT(10) ISNUMERIC,
    category_id INT REFERENCES Category.id,
    PRIMARY KEY (id)
);

CREATE TABLE Tag (
    id INT NOT NULL IDENTITY,
    tag_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE ProductTag (
    id INT NOT NULL IDENTITY,
    product_id INT REFERENCES Product.id,
    tag_id INT REFERENCES Tag.id,
    PRIMARY KEY (id)
);