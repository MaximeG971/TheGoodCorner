CREATE TABLE category (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);

ALTER TABLE ad
ADD COLUMN category_id INTEGER REFERENCES category(id);

INSERT INTO category (name) VALUES ('autre');

PRAGMA foreign_keys = ON;
INSERT INTO ad (title, owner, category_id) VALUES ('brouette à vendre', 'vendeur de brouette', 1);


SELECT * FROM ad;

