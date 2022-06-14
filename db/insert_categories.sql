INSERT INTO main_category(id, name) VALUES(1, 'LAPTOPY');
INSERT INTO main_category(id, name) VALUES(2, 'KOMPUTERY');
INSERT INTO main_category(id, name) VALUES(3, 'PODZESPOŁY');
INSERT INTO main_category(id, name) VALUES(4, 'PERYFERIA');
INSERT INTO main_category(id, name) VALUES(5, 'ACKESORIA');

INSERT INTO category(id, name, main_category_id) VALUES(1, 'LAPTOPY - ZASTOSOWANIE', 1);
INSERT INTO category(id, name, main_category_id) VALUES(2, 'LAPTOPY - PRODUCENCI', 1);
INSERT INTO category(id, name, main_category_id) VALUES(3, 'LAPTOPY - ROZMIAR', 1);
INSERT INTO category(id, name, main_category_id) VALUES(4, 'ACKESORIA DO LAPTOPÓW', 1);
INSERT INTO category(id, name, main_category_id) VALUES(5, 'PODZESPOŁY DO LAPTOPÓW', 1);

INSERT INTO sub_category(id, name, link, category_id) VALUES(1, 'Laptopy biznesowe', '/laptopy/laptopy-biznesowe', 1);
INSERT INTO sub_category(id, name, link, category_id) VALUES(2, 'Laptopy multimedialne', '/', 1);
INSERT INTO sub_category(id, name, link, category_id) VALUES(3, 'Laptopy gamingowe', '/', 1);
INSERT INTO sub_category(id, name, link, category_id) VALUES(4, 'Dla Twórców', '/', 1);