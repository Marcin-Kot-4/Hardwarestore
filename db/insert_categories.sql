INSERT INTO main_categories(id, name) VALUES(1, 'LAPTOPY');
INSERT INTO main_categories(id, name) VALUES(2, 'KOMPUTERY');
INSERT INTO main_categories(id, name) VALUES(3, 'PODZESPOŁY');
INSERT INTO main_categories(id, name) VALUES(4, 'PERYFERIA');
INSERT INTO main_categories(id, name) VALUES(5, 'AKCESORIA');

-- --------------------------------------------------------------------------------------------------------------------------------
-- LAPTOPY
-- --------------------------------------------------------------------------------------------------------------------------------
INSERT INTO categories(id, name, main_category_id) VALUES(1, 'LAPTOPY - ZASTOSOWANIE', 1);
INSERT INTO categories(id, name, main_category_id) VALUES(2, 'LAPTOPY - PRODUCENCI', 1);
INSERT INTO categories(id, name, main_category_id) VALUES(3, 'LAPTOPY - ROZMIAR', 1);
INSERT INTO categories(id, name, main_category_id) VALUES(4, 'AKCESORIA DO LAPTOPÓW', 1);
INSERT INTO categories(id, name, main_category_id) VALUES(5, 'PODZESPOŁY DO LAPTOPÓW', 1);

INSERT INTO sub_categories(id, name, link, category_id) VALUES(1, 'Laptopy biznesowe', '/laptopy/laptopy-biznesowe', 1);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(2, 'Laptopy multimedialne', '/laptopy/laptopy-multimedialne', 1);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(3, 'Laptopy gamingowe', '/laptopy/laptopy-gamingowe', 1);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(4, 'Dla Twórców', '/laptopy/laptopy-dla-tworcow', 1);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(5, 'HP', '/laptopy/laptopy-HP', 2);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(6, 'Microsoft', '/laptopy/laptopy-Microsof', 2);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(7, 'Dell', '/laptopy/laptopy-Dell', 2);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(8, 'ASUS', '/laptopy/laptopy-ASUS', 2);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(9, 'LG', '/laptopy/laptopy-LG', 2);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(10, '15"', '/laptopy/laptopy-15"', 3);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(11, '15,6"', '/laptopy/laptopy-15,6"', 3);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(12, '17"', '/laptopy/laptopy-17"', 3);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(13, '17,3"', '/laptopy/laptopy-17,6"', 3);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(14, 'Torby na laptopy', '/laptopy/Torby-na-laptopy', 4);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(15, 'Plecaki na laptopy', '/laptopy/Plecaki-na-laptopy', 4);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(16, 'Podstawki chłodzące', '/laptopy/Podstawki-chlodzace', 4);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(17, 'Etui na laptopy', '/laptopy/Etui-na-laptopy', 4);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(18, 'Pamięci RAM', '/laptopy/laptopy-pamieci-RAM', 5);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(19, 'Pamięci USB', '/laptopy/laptopy-pamieci-USB', 5);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(20, 'Baterie', '/laptopy/laptopy-baterie', 5);

-- --------------------------------------------------------------------------------------------------------------------------------
-- KOMPUTERY
-- --------------------------------------------------------------------------------------------------------------------------------
INSERT INTO categories(id, name, main_category_id) VALUES(6, 'KOMPUTERY - ZASTOSOWANIE', 2);
INSERT INTO categories(id, name, main_category_id) VALUES(7, 'KOMPUTERY - PRODUCENCI', 2);
INSERT INTO categories(id, name, main_category_id) VALUES(8, 'AKCESORIA DO KOMPUTERÓW', 2);
INSERT INTO categories(id, name, main_category_id) VALUES(9, 'PODZESPOŁY DO KOMPUTERÓW', 2);

INSERT INTO sub_categories(id, name, link, category_id) VALUES(21, 'Komputery GAMER', '/komputery/komputery-gamer', 6);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(22, 'Komputery All-in-One', '/', 6);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(23, 'Mini-PC', '/', 6);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(24, 'Serwery', '/', 6);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(25, 'Dell', '/', 7);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(26, 'Hardwarestore', '/', 7);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(27, 'Acer', '/', 7);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(28, 'ASUS', '/', 7);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(29, 'Razer', '/', 7);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(30, 'Myszki', '/', 8);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(31, 'Klawiatury', '/', 8);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(32, 'Kamery internetowe', '/', 8);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(33, 'Mikrofony', '/', 8);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(34, 'Moduły Bluetooth', '/', 9);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(35, 'Konwertery', '/', 9);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(36, 'Pamięci RAM', '/', 9);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(37, 'Dyski SSD', '/', 9);

-- --------------------------------------------------------------------------------------------------------------------------------
-- PODZESPOŁY
-- --------------------------------------------------------------------------------------------------------------------------------
INSERT INTO categories(id, name, main_category_id) VALUES(10, 'DYSKI TWARDE', 3);
INSERT INTO categories(id, name, main_category_id) VALUES(11, 'KARTY GRAFICZNE', 3);
INSERT INTO categories(id, name, main_category_id) VALUES(12, 'PROCESORY', 3);
INSERT INTO categories(id, name, main_category_id) VALUES(13, 'PŁYTY GŁÓWNE', 3);
INSERT INTO categories(id, name, main_category_id) VALUES(14, 'CHŁODZENIA KOMPUTEROWE', 3);

INSERT INTO sub_categories(id, name, link, category_id) VALUES(38, 'Dyski SSD', '/dyski/dyski-ssd', 10);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(39, 'Dyski HDD', '/', 10);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(40, 'Dyski zewnętrzne SSD', '/', 10);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(41, 'Dyski zewnętrzne HDD', '/', 10);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(42, 'Karty graficzne NVIDIA', '/', 11);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(43, 'Karty graficzne AMD', '/', 11);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(44, 'Procesory Intel Core i9', '/', 12);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(45, 'Procesory Intel Core i7', '/', 12);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(46, 'Procesory Intel Core i5', '/', 12);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(47, 'Procesory Intel Core i3', '/', 12);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(48, 'Procesory AMD Ryzen 9', '/', 12);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(49, 'Procesory AMD Ryzen 7', '/', 12);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(50, 'Procesory AMD Ryzen 5', '/', 12);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(51, 'Płyty główne Socket 1700', '/', 13);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(52, 'Płyty główne Socket 1151', '/', 13);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(53, 'Płyty główne Socket AM4', '/', 13);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(54, 'Płyty główne Socket 2066', '/', 13);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(55, 'Chłodzenia procesora', '/', 14);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(56, 'Wentylatory do komputera', '/', 14);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(57, 'Pasy termoprzewodzące', '/', 14);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(58, 'Chłodzenia dysków', '/', 14);

-- --------------------------------------------------------------------------------------------------------------------------------
-- PERYFERIA
-- --------------------------------------------------------------------------------------------------------------------------------
INSERT INTO categories(id, name, main_category_id) VALUES(15, 'MONITORY', 4);
INSERT INTO categories(id, name, main_category_id) VALUES(16, 'DRUKARKI', 4);
INSERT INTO categories(id, name, main_category_id) VALUES(17, 'MYSZKI', 4);
INSERT INTO categories(id, name, main_category_id) VALUES(18, 'KLAWIATURY', 4);
INSERT INTO categories(id, name, main_category_id) VALUES(19, 'URZĄDZENIA SIECIOWE', 4);

INSERT INTO sub_categories(id, name, link, category_id) VALUES(59, 'Monitory LED 32"', '/monitory/monitory-led-32', 15);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(60, 'Monitory LED 29"', '/', 15);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(61, 'Monitory LED 27"', '/', 15);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(62, 'Monitory LED 24"', '/', 15);

INSERT INTO sub_categories(id, name, link, category_id) VALUES(63, 'Drukarki laserowe kolorowe', '/', 16);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(64, 'Drukarki laserowe', '/', 16);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(65, 'Drukarki atramentowe', '/', 16);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(66, 'Drukarki 3D', '/', 16);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(67, 'Myszki bezprzewodowe', '/', 17);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(68, 'Myszki przewodowe', '/', 17);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(69, 'Mouse bungee', '/', 17);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(70, 'Kable do myszek', '/', 17);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(71, 'Mouse grip tape', '/', 17);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(72, 'Klawiatury bezprzewodowe', '/', 18);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(73, 'Klawiatury przewodowe', '/', 18);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(74, 'Lapboardy', '/', 18);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(75, 'Keycaps do klawiatur', '/', 18);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(76, 'Routery', '/', 19);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(77, 'Switche', '/', 19);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(78, 'Access Pointy', '/', 19);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(79, 'Modemy', '/', 19);

-- --------------------------------------------------------------------------------------------------------------------------------
-- AKCESORIA
-- --------------------------------------------------------------------------------------------------------------------------------
INSERT INTO categories(id, name, main_category_id) VALUES(20, 'KABLE I PRZEJŚCIÓWKI', 5);
INSERT INTO categories(id, name, main_category_id) VALUES(21, 'ZASILANIE', 5);
INSERT INTO categories(id, name, main_category_id) VALUES(22, 'NOŚNIKI DANYCH', 5);
INSERT INTO categories(id, name, main_category_id) VALUES(23, 'SŁUCHAWKI', 5);
INSERT INTO categories(id, name, main_category_id) VALUES(24, 'GŁOŚNIKI', 5);

INSERT INTO sub_categories(id, name, link, category_id) VALUES(80, 'Przejściówki', '/kable-i-przejsciowki/przejsciowki', 20);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(81, 'Kable USB', '/', 20);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(82, 'Kable HDMI', '/', 20);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(83, 'Kable DVI', '/', 20);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(84, 'Powerbanki', '/', 21);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(85, 'Zasilacze awaryjne', '/', 21);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(86, 'Listwy zasilające', '/', 21);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(87, 'Baterie i akumulatorki', '/', 21);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(88, 'Pendrive', '/', 22);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(89, 'Karty pamięci microSD', '/', 22);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(90, 'Karty pamięci SD', '/', 22);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(91, 'Karty pamięci CF', '/', 22);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(92, 'Słuchawki bezprzewodowe', '/', 23);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(93, 'Słuchawki przewodowe', '/', 23);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(94, 'Słuchawki True Wireless', '/', 23);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(95, 'Słuchawki nauszne', '/', 23);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(96, 'Głośniki komputerowe', '/', 24);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(97, 'Głośniki przenośne', '/', 24);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(98, 'Głośniki konferencyjne', '/', 24);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(99, 'Kolumny stereo', '/', 24);
