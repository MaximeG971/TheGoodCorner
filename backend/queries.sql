CREATE TABLE ad (
id INTEGER PRIMARY KEY AUTOINCREMENT,
title TEXT NOT NULL,
description TEXT,
owner TEXT NOT NULL,
price INT,
location VARCHAR(100)
);

INSERT INTO ad (title, description, owner, price, location)
VALUES
('Je vends ma 206', 'Ma 206 est rouge', 'alain@dupont.fr', 3000, 'Bordeaux'),
('Volkswagen Golf 7 à vendre', 'Magnifique Golf 7 en parfait état.', 'marie.dubois@email.com', 8500, 'Bordeaux'),
('Renault Clio IV à vendre', 'Clio IV en bon état, faible kilométrage.', 'jean.martin@email.com', 6000, 'Bordeaux'),
('Peugeot 308 à vendre', '308 en excellent état, entretien à jour.', 'antoine.dupont@email.com', 7500, 'Paris'),
('Citroen C3 à vendre', 'C3 avec faible consommation, idéale en ville.', 'sophie.leroy@email.com', 5000, 'Paris'),
('Ford Fiesta à vendre', 'Fiesta économique et fiable, première main.', 'pierre.leroux@email.com', 4500, 'Lyon'),
('Toyota Yaris à vendre', 'Yaris en bon état général, peu de kilomètres.', 'camille.petit@email.com', 7000, 'Lyon'),
('Audi A3 à vendre', 'A3 en très bon état, toutes options.', 'vincent.dupuis@email.com', 12000, 'Bordeaux'),
('Fiat 500 à vendre', '500 en parfait état, idéale en ville.', 'amelie.durand@email.com', 6500, 'Bordeaux'),
('BMW Série 1 à vendre', 'Série 1 sportive, très bien entretenue.', 'thomas.leroux@email.com', 11000, 'Paris'),
('Mini Cooper à vendre', 'Cooper avec toit ouvrant panoramique.', 'lucie.martin@email.com', 8000, 'Paris'),
('Nissan Micra à vendre', 'Micra économique et facile à conduire.', 'benjamin.lacroix@email.com', 5500, 'Lyon'),
('Hyundai i20 à vendre', 'i20 faible consommation, encore sous garantie.', 'lea.petit@email.com', 7500, 'Lyon'),
('Toyota Auris à vendre', 'Auris hybride bien équipée, faible kilométrage.', 'pauline.dupont@email.com', 9000, 'Bordeaux'),
('Opel Corsa à vendre', 'Corsa idéale pour jeunes conducteurs.', 'mathieu.martin@email.com', 6000, 'Bordeaux'),
('Seat Ibiza à vendre', 'Ibiza en excellent état, entretien suivi.', 'julie.leroux@email.com', 7000, 'Paris'),
('Renault Captur à vendre', 'Captur avec système de navigation intégré.', 'nicolas.dupuis@email.com', 8500, 'Paris'),
('Citroen DS3 à vendre', 'DS3 avec toit noir, très élégante.', 'alexandre.lacroix@email.com', 7500, 'Lyon'),
('Renault Megane à vendre', 'Megane spacieuse et confortable.', 'laura.petit@email.com', 9500, 'Lyon'),
('Renault Twingo à vendre', 'Twingo idéale pour la ville, faible consommation.', 'emma.dupont@email.com', 5000, 'Bordeaux');
