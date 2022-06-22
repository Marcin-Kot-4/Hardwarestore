-- Laptop nr1
INSERT INTO products(id, img_thumbnail, link, name, other_technical_details, pieces, price, summary_technical_details)
VALUES(1, 'Images/products/Lenovo-ThinkBook.png', '/produkt/laptop-thinkbook', 'Lenovo ThinkBook', 'i5-1135G7/16GB/512/Win11P', 5, 2599, 'Laptop 15"');
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (1, 1);
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (1, 10);

-- Laptop nr2
INSERT INTO products(id, img_thumbnail, link, name, other_technical_details, pieces, price, summary_technical_details)
VALUES(2, 'Images/products/hp-255.png', '/produkt/laptop-hp-255', 'HP 255 G8', '3050/8GB/128/Win10P', 5, 1449, 'Laptop 15,6"');
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (2, 1);
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (2, 5);
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (2, 11);

-- Laptop nr3
INSERT INTO products(id, img_thumbnail, link, name, other_technical_details, pieces, price, summary_technical_details)
VALUES(3, 'Images/products/dell-vostro.png', '/produkt/laptop-dell-vostro', 'Dell Vostro 3510', 'i5-1135G7/16GB/512/Win11P', 3, 2599, 'Laptop 15,6"');
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (3, 1);
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (3, 7);
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (3, 11);

-- Laptop nr4
INSERT INTO products(id, img_thumbnail, link, name, other_technical_details, pieces, price, summary_technical_details)
VALUES(4, 'Images/products/asus-vivobook.png', '/produkt/laptop-asus-vivobook', 'ASUS Vivobook Pro', '15 i5-11300H/16GB/512/Win11 RTX3050', 10, 3899, 'Laptop 15"');
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (4, 2);
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (4, 8);
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (4, 10);

-- Laptop nr5
INSERT INTO products(id, img_thumbnail, link, name, other_technical_details, pieces, price, summary_technical_details)
VALUES(5, 'Images/products/asus-x515ea.png', '/produkt/laptop-asus-x515ea', 'ASUS X515EA-BQ1445R', 'i5-1135G7/16GB/512/Win10PX', 7, 3299, 'Laptop 17"');
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (5, 1);
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (5, 8);
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (5, 12);

-- Laptop nr6
INSERT INTO products(id, img_thumbnail, link, name, other_technical_details, pieces, price, summary_technical_details)
VALUES(6, 'Images/products/hp-spectre.png', '/produkt/laptop-hp-spectre', 'HP Spectre', 'x360 i7/16GB/1TB/Win11 Black OLED', 7, 7999, 'Laptop 15"');
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (6, 4);
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (6, 5);
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (6, 10);

-- Laptop nr7
INSERT INTO products(id, img_thumbnail, link, name, other_technical_details, pieces, price, summary_technical_details)
VALUES(7, 'Images/products/dell-inspiration.png', '/produkt/laptop-dell-inspiration', 'Dell Inspiron', '5410 i7-1195G7/16GB/512/Win11 MX350', 3, 5399, 'Laptop 17,3"');
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (7, 2);
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (7, 7);
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (7, 13);

-- Laptop nr8
INSERT INTO products(id, img_thumbnail, link, name, other_technical_details, pieces, price, summary_technical_details)
VALUES(8, 'Images/products/hp-envy.png', '/produkt/laptop-hp-envy', 'HP ENVY', 'x360 i5-1135G7/16GB/512/Win10 Silver', 1, 4799, 'Laptop 15"');
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (8, 4);
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (8, 5);
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (8, 10);

-- Laptop nr9
INSERT INTO products(id, img_thumbnail, link, name, other_technical_details, pieces, price, summary_technical_details)
VALUES(9, 'Images/products/microsoft-surface.png', '/produkt/laptop-microsoft-surface', 'Microsoft Surface Pro', 'i5/8GB/256GB/Win11 (Platynowy)', 9, 5799, 'Laptop 15"');
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (9, 4);
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (9, 6);
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (9, 10);

-- Laptop nr10
INSERT INTO products(id, img_thumbnail, link, name, other_technical_details, pieces, price, summary_technical_details)
VALUES(10, 'Images/products/lenovo-legion.png', '/produkt/laptop-lenovo-legion', 'Lenovo Legion 5-17', 'Ryzen 7/16GB/512/Win10 RTX3060 144Hz', 4, 6299, 'Laptop 15"');
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (10, 3);
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (10, 10);

-- Torba na laptopa nr11
INSERT INTO products(id, img_thumbnail, link, name, other_technical_details, pieces, price, summary_technical_details)
VALUES(11, 'Images/products/targus-classic.png', '/produkt/torba-targus-classic', 'Targus Classic ', '15-16"', 4, '89.99', 'Torba z poliestru');
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (11, 14);

-- Torba na laptopa nr12
INSERT INTO products(id, img_thumbnail, link, name, other_technical_details, pieces, price, summary_technical_details)
VALUES(12, 'Images/products/targus-classic-plus.png', '/produkt/torba-targus-classic-plus', 'Targus Classic+', '17-18"', 23, '129.99', 'Torba z poliestru');
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (12, 14);

-- Plecak na laptopa nr13
INSERT INTO products(id, img_thumbnail, link, name, other_technical_details, pieces, price, summary_technical_details)
VALUES(13, 'Images/products/silver-monkey.png', '/produkt/plecak-silver-monkey', 'Silver Monkey TripPack', 'plecak na laptopa 15,6"', 3, 119, 'czarny');
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (13, 15);

-- Plecak na laptopa nr14
INSERT INTO products(id, img_thumbnail, link, name, other_technical_details, pieces, price, summary_technical_details)
VALUES(14, 'Images/products/asus-rog.png', '/produkt/plecak-asus-rog', 'ASUS ROG', 'plecak na laptopa 15,6"', 50, 98, 'BP1500G Backpack');
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (14, 15);

-- Etui na laptopa nr15
INSERT INTO products(id, img_thumbnail, link, name, other_technical_details, pieces, price, summary_technical_details)
VALUES(15, 'Images/products/monkey-crosscase.png', '/produkt/etui-monkey-crosscase', 'Silver Monkey CrossCase', 'wzmacniane etui na laptopa 15,6"', 11, 39, 'szare');
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (15, 17);

-- Podstawki chłodzące nr16
INSERT INTO products(id, img_thumbnail, link, name, other_technical_details, pieces, price, summary_technical_details)
VALUES(16, 'Images/products/trust-gxt.png', '/produkt/podstawka-chlodzaca-trust', 'Trust GXT 278 Yozu', 'do 17.3", 4 wentylatory, czarna', 11, 139, '4 wentylatory');
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (16, 16);

-- Podstawki chłodzące nr17
INSERT INTO products(id, img_thumbnail, link, name, other_technical_details, pieces, price, summary_technical_details)
VALUES(17, 'Images/products/green-cell.png', '/produkt/bateria-green-cell', 'Green Cell WDX0R WDXOR', 'do Dell Inspiron', 11, 149, 'Pojemność 3400 mAh');
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (17, 20);

-- Podstawki chłodzące nr18
INSERT INTO products(id, img_thumbnail, link, name, other_technical_details, pieces, price, summary_technical_details)
VALUES(18, 'Images/products/sandisk.png', '/produkt/pamiec-usb-sandisk', 'SanDisk 128GB', 'Ultra Dual Drive Luxe USB', 18, 95, 'Type-C 150MB/s');
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (18, 19);
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (18, 88);

-- Podstawki chłodzące nr19
INSERT INTO products(id, img_thumbnail, link, name, other_technical_details, pieces, price, summary_technical_details)
VALUES(19, 'Images/products/goodram-8gb.png', '/produkt/pamiec-ram-goodram-8gb', 'GOODRAM 8GB', '(1x8GB) 2666MHz CL19', 11, 148, 'DDR4 SODIMM');
INSERT INTO product_sub_categories(product_id, sub_category_id) VALUES (19, 18);