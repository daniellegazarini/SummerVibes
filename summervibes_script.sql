USE summervibesdb;

CREATE TABLE summer (
    id INT NOT NULL AUTO_INCREMENT,
    person_name VARCHAR(45) NOT NULL,
    place_name VARCHAR(45) NOT NULL,
    place_location VARCHAR(45) NOT NULL,
    activities VARCHAR(60) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO summer (person_name, place_name, place_location, activities) VALUES
('Danielle', 'Ubatuba', 'Sao Paulo', 'Ir a praia'),
('Mayara', 'Recife', 'Pernambuco', 'estudar POO no ac'),
('Gabriela', 'Maceio', 'Alagoas', 'shows em Jaragua');