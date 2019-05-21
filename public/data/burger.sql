DROP DATABASE IF EXISTS daBurger_db;

CREATE DATABASE daBurger_db;

USE daBurger_db;

CREATE TABLE burgers (
item_id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(100) NOT NULL,
eaten BOOL,
PRIMARY KEY (item_id)
);