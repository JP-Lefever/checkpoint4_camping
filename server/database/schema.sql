
CREATE TABLE IF NOT EXISTS user  (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  birthdate DATE,
  city VARCHAR(255) NOT NULL,
  zipCode INT NOT NULL,
  tel VARCHAR(10),
  photo VARCHAR(255),
  password VARCHAR(255) NOT NULL,
  role VARCHAR(30) DEFAULT 'user'
);

CREATE TABLE IF NOT EXISTS camping (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  tel VARCHAR(10),
  city VARCHAR(255) NOT NULL,
  zipCode INT NOT NULL,
  adress VARCHAR(255) NOT NULL ,
  description TEXT NOT NULL,
  stars INT NOT NULL,
  opening DATE NOT NULL,
  closing DATE NOT NULL,
  photo VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS book (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id  INT UNSIGNED NOT NULL,
  camping_id INT UNSIGNED NOT NULL,
  start_book DATE NOT NULL,
  end_book DATE NOT NULL,
  cost FLOAT NOT NULL,
  CONSTRAINT fk_book_user FOREIGN KEY(user_id) REFERENCES user(id),
  CONSTRAINT fk_book_camping FOREIGN KEY(camping_id) REFERENCES camping(id)
);

CREATE TABLE IF NOT EXISTS infrastructure(
   id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
   label VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS camp_infra(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  infrastructure_id INT UNSIGNED NOT NULL,
  camping_id INT UNSIGNED NOT NULL,
  photo VARCHAR(255),
  CONSTRAINT fk_infra_infrastructure FOREIGN KEY(infrastructure_id) REFERENCES infrastructure(id),
  CONSTRAINT fk_infra_camping FOREIGN KEY(camping_id) REFERENCES camping(id)
);

CREATE TABLE IF NOT EXISTS model(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS rental(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  model_id INT UNSIGNED NOT NULL,
  size INT NOT NULL,
  max_pers INT NOT NULL,
  pricePerNight FLOAT NOT NULL,
  opening DATE,
  closing DATE,
  photo VARCHAR(255),
  CONSTRAINT fk_rental_model FOREIGN KEY(model_id) REFERENCES model(id)
);

CREATE TABLE IF NOT EXISTS camp_rental(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  rental_id INT UNSIGNED NOT NULL,
  camping_id INT UNSIGNED NOT NULL,
  number INT NOT NULL,
  CONSTRAINT fk_rental_rental FOREIGN KEY(rental_id) REFERENCES rental(id),
  CONSTRAINT fk_rental_camping FOREIGN KEY(camping_id) REFERENCES camping(id)
);

CREATE TABLE IF NOT EXISTS type_pitches(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS pitches(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  type_pitches_id INT UNSIGNED NOT Null,
  size INT NOT NULL,
  is_electrified BOOLEAN NOT NULL,
  power INT,
  price_night FLOAT NOT NULL,
  max_pers INT NOT NULL,
  opening DATE,
  closing DATE,
  photo VARCHAR(255),
  CONSTRAINT fk_type_pitches FOREIGN KEY(type_pitches_id) REFERENCES type_pitches(id)
);

CREATE TABLE IF NOT EXISTS camp_pitches(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  pitches_id INT UNSIGNED NOT NULL,
  camping_id INT UNSIGNED NOT NULL,
  number INT NOT NULL,
  CONSTRAINT fk_pitches_pitches FOREIGN KEY(pitches_id) REFERENCES pitches(id),
  CONSTRAINT fk_pitches_camping FOREIGN KEY(camping_id) REFERENCES camping(id)
);

INSERT INTO infrastructure (label)
VALUES 
("Piscine"),
("Tennis"),
("Pétanque"),
("Paddle"),
("Bar"),
("Restaurant"),
("City Stade"),
("Aire de jeux enfant"),
("Beach Volley"),
("Club enfant"),
("Club Ado");

INSERT INTO model (label)
VALUES 
('OTELLO 3 chambres'),
('OTELLO 2 chambres'),
('MALAGA 2 chambres'),
('BERMUDES 3 chambres'),
('BERMUDES 2 chambres'),
('TOSCANES 4 chambres'),
('TOSCANES 3 chambres');

INSERT INTO type_pitches (label)
VALUES
('Grand Confort'),
('Confort'),
('stardart');

