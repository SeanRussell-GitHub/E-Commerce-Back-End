-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE category (
    id INT NOT NULL IDENTITY,
    category_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE product (
    id INT NOT NULL IDENTITY,
    product_name VARCHAR(30) NOT NULL,
    price DECIMAL (7,2) NOT NULL,
    stock INT NOT NULL DEFAULT(10) ISNUMERIC,
    category_id INT REFERENCES category.id,
    PRIMARY KEY (id)
);

CREATE TABLE tag (
    id INT NOT NULL IDENTITY,
    tag_name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE productTag (
    id INT NOT NULL IDENTITY,
    product_id INT REFERENCES product.id,
    tag_id INT REFERENCES tag.id,
    PRIMARY KEY (id)
);