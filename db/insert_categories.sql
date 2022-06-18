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
INSERT INTO sub_categories(id, name, link, category_id) VALUES(22, 'Komputery All-in-One', '/komputery/komputery-all-in-one', 6);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(23, 'Mini-PC', '/komputery/komputery-mini-pc', 6);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(24, 'Serwery', '/komputery/serwery', 6);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(25, 'Dell', '/komputery/komputery-Dell', 7);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(26, 'Hardwarestore', '/komputery/komputery-Hardwarestore', 7);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(27, 'Acer', '/komputery/komputery-Acer', 7);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(28, 'ASUS', '/komputery/komputery-ASUS', 7);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(29, 'Razer', '/komputery/komputery-Razer', 7);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(30, 'Myszki', '/komputery/myszki', 8);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(31, 'Klawiatury', '/komputery/klawiatury', 8);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(32, 'Kamery internetowe', '/komputery/kamery-internetowe', 8);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(33, 'Mikrofony', '/komputery/mikrofony', 8);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(34, 'Moduły Bluetooth', '/komputery/moduly-bluetooth', 9);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(35, 'Konwertery', '/komputery/konwertery', 9);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(36, 'Pamięci RAM', '/komputery/pamieci-RAM', 9);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(37, 'Dyski SSD', '/komputery/dyski-SSD', 9);

-- --------------------------------------------------------------------------------------------------------------------------------
-- PODZESPOŁY
-- --------------------------------------------------------------------------------------------------------------------------------
INSERT INTO categories(id, name, main_category_id) VALUES(10, 'DYSKI TWARDE', 3);
INSERT INTO categories(id, name, main_category_id) VALUES(11, 'KARTY GRAFICZNE', 3);
INSERT INTO categories(id, name, main_category_id) VALUES(12, 'PROCESORY', 3);
INSERT INTO categories(id, name, main_category_id) VALUES(13, 'PŁYTY GŁÓWNE', 3);
INSERT INTO categories(id, name, main_category_id) VALUES(14, 'CHŁODZENIA KOMPUTEROWE', 3);

INSERT INTO sub_categories(id, name, link, category_id) VALUES(38, 'Dyski SSD', '/podzespoly/dyski-SSD', 10);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(39, 'Dyski HDD', '/podzespoly/dyski-HDD', 10);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(40, 'Dyski zewnętrzne SSD', '/podzespoly/dyski-SSD-zewnetrzne', 10);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(41, 'Dyski zewnętrzne HDD', '/podzespoly/dyski-HDD-zewnetrzne', 10);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(42, 'Karty graficzne NVIDIA', '/podzespoly/karty-graficzne-NVIDIA', 11);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(43, 'Karty graficzne AMD', '/podzespoly/karty-graficzne-AMD', 11);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(44, 'Procesory Intel Core i9', '/podzespoly/procesory-Intel-i9', 12);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(45, 'Procesory Intel Core i7', '/podzespoly/procesory-Intel-i7', 12);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(46, 'Procesory Intel Core i5', '/podzespoly/procesory-Intel-i5', 12);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(47, 'Procesory Intel Core i3', '/podzespoly/procesory-Intel-i3', 12);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(48, 'Procesory AMD Ryzen 9', '/podzespoly/procesory-AMD-Ryzen-9', 12);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(49, 'Procesory AMD Ryzen 7', '/podzespoly/procesory-AMD-Ryzen-7', 12);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(50, 'Procesory AMD Ryzen 5', '/podzespoly/procesory-AMD-Ryzen-5', 12);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(51, 'Płyty główne Socket 1700', '/podzespoly/plyty-glowne-socket-1700', 13);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(52, 'Płyty główne Socket 1151', '/podzespoly/plyty-glowne-socket-1151', 13);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(53, 'Płyty główne Socket AM4', '/podzespoly/plyty-glowne-socket-am4', 13);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(54, 'Płyty główne Socket 2066', '/podzespoly/plyty-glowne-socket-2066', 13);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(55, 'Chłodzenia procesora', '/podzespoly/chlodzenia-procesora', 14);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(56, 'Wentylatory do komputera', '/podzespoly/wentylatory-do-komputera', 14);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(57, 'Pasy termoprzewodzące', '/podzespoly/pasy-termoprzewodzace', 14);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(58, 'Chłodzenia dysków', '/podzespoly/chlodzenia-dyskow', 14);

-- --------------------------------------------------------------------------------------------------------------------------------
-- PERYFERIA
-- --------------------------------------------------------------------------------------------------------------------------------
INSERT INTO categories(id, name, main_category_id) VALUES(15, 'MONITORY', 4);
INSERT INTO categories(id, name, main_category_id) VALUES(16, 'DRUKARKI', 4);
INSERT INTO categories(id, name, main_category_id) VALUES(17, 'MYSZKI', 4);
INSERT INTO categories(id, name, main_category_id) VALUES(18, 'KLAWIATURY', 4);
INSERT INTO categories(id, name, main_category_id) VALUES(19, 'URZĄDZENIA SIECIOWE', 4);

INSERT INTO sub_categories(id, name, link, category_id) VALUES(59, 'Monitory LED 32"', '/peryferia/monitory-LED-32"', 15);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(60, 'Monitory LED 29"', '/peryferia/monitory-LED-29"', 15);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(61, 'Monitory LED 27"', '/peryferia/monitory-LED-27"', 15);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(62, 'Monitory LED 24"', '/peryferia/monitory-LED-24"', 15);

INSERT INTO sub_categories(id, name, link, category_id) VALUES(63, 'Drukarki laserowe kolorowe', '/peryferia/drukarki-laserowe-kolorowe', 16);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(64, 'Drukarki laserowe', '/peryferia/drukarki-laserowe', 16);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(65, 'Drukarki atramentowe', '/peryferia/drukarki-atramentowe', 16);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(66, 'Drukarki 3D', '/peryferia/drukarki-3D', 16);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(67, 'Myszki bezprzewodowe', '/peryferia/myszki-bezprzewodowe', 17);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(68, 'Myszki przewodowe', '/peryferia/myszki-przewodowe', 17);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(69, 'Mouse bungee', '/peryferia/mouse-bungee', 17);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(70, 'Kable do myszek', '/peryferia/kable-do-myszek', 17);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(71, 'Mouse grip tape', '/peryferia/mouse-grip-tape', 17);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(72, 'Klawiatury bezprzewodowe', '/peryferia/klawiatury-bezprzewodowe', 18);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(73, 'Klawiatury przewodowe', '/peryferia/klawiatury-przewodowe', 18);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(74, 'Lapboardy', '/peryferia/lapboardy', 18);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(75, 'Keycaps do klawiatur', '/peryferia/keycaps-do-klawiatur', 18);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(76, 'Routery', '/peryferia/routery', 19);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(77, 'Switche', '/peryferia/switche', 19);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(78, 'Access Pointy', '/peryferia/access-pointy', 19);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(79, 'Modemy', '/peryferia/modemy', 19);

-- --------------------------------------------------------------------------------------------------------------------------------
-- AKCESORIA
-- --------------------------------------------------------------------------------------------------------------------------------
INSERT INTO categories(id, name, main_category_id) VALUES(20, 'KABLE I PRZEJŚCIÓWKI', 5);
INSERT INTO categories(id, name, main_category_id) VALUES(21, 'ZASILANIE', 5);
INSERT INTO categories(id, name, main_category_id) VALUES(22, 'NOŚNIKI DANYCH', 5);
INSERT INTO categories(id, name, main_category_id) VALUES(23, 'SŁUCHAWKI', 5);
INSERT INTO categories(id, name, main_category_id) VALUES(24, 'GŁOŚNIKI', 5);

INSERT INTO sub_categories(id, name, link, category_id) VALUES(80, 'Przejściówki', '/akcesoria/przejsciowki', 20);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(81, 'Kable USB', '/akcesoria/kable-USB', 20);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(82, 'Kable HDMI', '/akcesoria/kable-HDMI', 20);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(83, 'Kable DVI', '/akcesoria/kable-DVI', 20);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(84, 'Powerbanki', '/akcesoria/powerbanki', 21);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(85, 'Zasilacze awaryjne', '/akcesoria/zasilacze-awaryjne', 21);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(86, 'Listwy zasilające', '/akcesoria/listwy-zasilające', 21);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(87, 'Baterie i akumulatorki', '/akcesoria/baterie-i-akumulatorki', 21);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(88, 'Pendrive', '/akcesoria/pendrive', 22);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(89, 'Karty pamięci microSD', '/akcesoria/karty-pamieci-microSD', 22);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(90, 'Karty pamięci SD', '/akcesoria/karty-pamieci-SD', 22);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(91, 'Karty pamięci CF', '/akcesoria/karty-pamieci-CF', 22);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(92, 'Słuchawki bezprzewodowe', '/akcesoria/słuchawki-bezprzewodowe', 23);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(93, 'Słuchawki przewodowe', '/akcesoria/słuchawki-przewodowe', 23);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(94, 'Słuchawki True Wireless', '/akcesoria/słuchawki-True-Wireless', 23);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(95, 'Słuchawki nauszne', '/akcesoria/słuchawki-nauszne', 23);
					   
INSERT INTO sub_categories(id, name, link, category_id) VALUES(96, 'Głośniki komputerowe', '/akcesoria/głośniki-komputerowe', 24);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(97, 'Głośniki przenośne', '/akcesoria/głośniki-przenośne', 24);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(98, 'Głośniki konferencyjne', '/akcesoria/głośniki-konferencyjne', 24);
INSERT INTO sub_categories(id, name, link, category_id) VALUES(99, 'Kolumny stereo', '/akcesoria/kolumny-stereo', 24);
