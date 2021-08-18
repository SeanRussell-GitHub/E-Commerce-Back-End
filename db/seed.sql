INSERT INTO category (id, category_name)
VALUES (01, "tires"),
       (02, "wheels");

INSERT INTO product (id, product_name, price, stock, category_id)
VALUES (001, "big tires",200.00,40, 01),
       (002, "small tires", 100.00, 40, 01),
       (003, "big wheels", 200.00, 40, 02),
       (004, "small wheels", 100.00, 40, 02);

INSERT INTO tag (id, tag_name)
VALUES (0001, "off road"),
       (0002, "street");

INSERT INTO product_tag (id, product_id, tag_id)
VALUES (00001, 001, 0001),
       (00002, 002, 0002),
       (00003, 003, 0001),
       (00004, 004, 0002);

