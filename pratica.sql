-- Active: 1684433173883@@127.0.0.1@1433

CREATE TABLE
    books(
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        author TEXT NOT NULL,
        page_count INTEGER,
        price REAL NOT NULL
    );

DROP TABLE books;

SELECT * FROM books;

SELECT id FROM books;

INSERT INTO
    books (
        id,
        name,
        author,
        page_count,
        price
    )
VALUES (
        "8503012928",
        "O Quinze",
        "Rachel de Queiroz",
        200,
        24.95
    );

INSERT INTO
    books (
        id,
        name,
        author,
        page_count,
        price
    )
VALUES (
        "8578887239",
        "DOM Casmurro",
        "Machado de Assis",
        NULL,
        46.77
    );

INSERT INTO books
VALUES (
        "8578887239",
        "DOM Casmurro",
        "Machado de Assis",
        NULL,
        46.77
    ), (
        "8503012928",
        "O Quinze",
        "Rachel de Queiroz",
        200,
        24.95
    );

UPDATE books SET page_count=463 WHERE id="8578887239";

DELETE FROM books WHERE id="8578887239";

Table books ADD COLUMN (notes TEXT);
DROP TABLE animes;

CREATE TABLE
    animes (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        stream TEXT
    );

SELECT * FROM animes;
INSERT INTO animes (id,name,stream) VALUES ("1001","WarMachine","NetFlix");
INSERT INTO animes VALUES ("101","Supernatural","NetFlix");
INSERT INTO animes VALUES ("102","Dois homens e meio","Amazon");
INSERT INTO
animes VALUES ("001", "WarMachine","Netflix"), ("004","The Boys","AmazonPrime"),
("006","Corrida morta","NetFlix");
DELETE FROM animes WHERE id="1001";
UPDATE animes SET name="TWO AND HALF MEN" WHERE id="102";
UPDATE animes SET name="Sobrenatural" WHERE id="101";