DROP DATABASE IF EXISTS epingle;
CREATE DATABASE epingle;

\c epingle;


CREATE TABLE username (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  profile_pic VARCHAR
);

CREATE TABLE pins (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES username(id) ON DELETE SET NULL,
  board_id INT REFERENCES pins(id) ON DELETE SET NULL,
  pin_name VARCHAR NOT NULL,
  pin_url VARCHAR NOT NULL,
  pin_caption VARCHAR NOT NULL
);

CREATE TABLE boards (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES username(id) ON DELETE SET NULL,
  board_content VARCHAR,
  board_name VARCHAR NOT NULL
);

INSERT INTO username (username, password_digest, email, profile_pic) VALUES ('jojo424', 'password', 'jonellebain@pursuit.org', 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/46508886_10156901292940908_7220603893099528192_n.jpg?_nc_cat=100&_nc_eui2=AeF8AgLQDvxJjmv57LsNVbfbeXi7Qyzmk6zGDDR2CLeHU9W-2d8DoipAV9ftxdeTOoBQ-CZ7zKUAx-umzS-XiYSj5YjXbSHJwWo0hD4PE8zJVw&_nc_ht=scontent-lga3-1.xx&oh=19f8453b01ce35632f1829defd5af0d0&oe=5D18CD86'), ('sexisammy20', 'password', 'samantha.clement@gmail.com', 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/7403_10101232107932784_991095058210275117_n.jpg?_nc_cat=106&_nc_eui2=AeFGY5wVHBVQmgvEALPEs-sn7HT0BAkAknOjIvREJQ7AXepqbjRadywMGldHCTxSo7qi0TuprczlZFUcRdJNZjH4esiE3HVY9213IRiRUBjJHA&_nc_ht=scontent-lga3-1.xx&oh=eb6f6e482316bf41d7787ad35be3d9b6&oe=5D1A8425'),
('misscobracommander', 'password', 'misscobracommander@gmail.com', 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/643913_10151790890050908_445790505_n.jpg?_nc_cat=101&_nc_eui2=AeGcrQ9g6X4qEwnC5TiUWJ-k5ZampdfUveL5p91-QLm7cgIX9swXpY-Icl7iPrgCYHjP8qqt-uljYsmrSm2TLc-bJv2tM2VDifYQJHQa35qwUA&_nc_ht=scontent-lga3-1.xx&oh=a411ec0336ef598b92bcc73fd7c9de62&oe=5CE7D17C'),
('misterbain', 'password', 'mrbain@gmail.com', 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/28472219_10156404397803217_6835841748689805561_n.jpg?_nc_cat=102&_nc_eui2=AeFnhPfoO4n3NONiyQ9C_23nge2zRpqtmjjiVKQwGPU6U7hCPw_aKczpJdb_V_6Nh7_9X38uTGQ-69wV5lFXV4NRQYKw5EsF4b8VDJOmhEBJUw&_nc_ht=scontent-lga3-1.xx&oh=9f88dda7d032a243da95123bd1860a13&oe=5D1CC717'),
('alexterrg', 'password','alexterrg@gmail.com', 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/53256806_10216055261726314_6621807859157958656_n.jpg?_nc_cat=103&_nc_eui2=AeFb08ul36Z-GHCW_UFYrzF6y7Fg6ETHZSR6nJS0Qy1m2W-e6GYQYSF7opeZ94gKwyntotR5zkwCmNIwQuFJed2j_APiyTccTscbL3r7T7knlQ&_nc_ht=scontent-lga3-1.xx&oh=2c760618986240619c2b755ccc500696&oe=5D16FAED'),
('jmax', 'password', 'jmax@gmail.com', 'https://media.licdn.com/dms/image/C5603AQGRdf5YV2R8_g/profile-displayphoto-shrink_800_800/0?e=1556755200&v=beta&t=UHTvyt6oAn3i_JaqilKs-dLAgofW791awxYLfCQbT4E'),
('teeta26', 'password', 'teeta26@gmail.com', 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/49767956_10156107488253174_7294267603042697216_n.jpg?_nc_cat=103&_nc_eui2=AeH1Wbh7oItLmCskeBMlphTaxzs6qJ1uJXWtJm9gg-ZRY62y_PW7nZncQhykM-KET_XNaS5HXtScwUJtOmkIXmw9yUKDMabJYrsUAzXlwopP4g&_nc_ht=scontent-lga3-1.xx&oh=5df367534544d06dbd815d8cc5d1dc15&oe=5D264F13'),
('lany718', 'password', 'lanysteele@gmail.com', 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/37015890_10100466493666815_2260597590334636032_n.jpg?_nc_cat=100&_nc_eui2=AeHoO9VrkteTyoUCh7Yplp9B6WydT4wMlANjkkZnHKb9fesl8k0EARD2FGYqtlWEHf521YdG88JPbQVwrReCJDUdLi9KA-c5-2Rf8Utu85vYHw&_nc_ht=scontent-lga3-1.xx&oh=efb1b366d89779c8153e95d1e85e6ea1&oe=5CE453E5');

INSERT INTO pins (user_id, board_id, pin_name, pin_url, pin_caption) VALUES
(1, 1, 'Dope Kitchen', 'https://i-h2.pinimg.com/564x/59/bf/b8/59bfb8bc67ae0c2cb522d3772e5f1dd7.jpg?b=t', 'Kitchen Inspiration!'),
(2, 2, 'Hairstyles', 'https://i-h2.pinimg.com/564x/9d/95/57/9d955762792578a4887b3d4603126bbf.jpg', 'This is a beautiful hairstyle'),
(3, 3, 'Food', 'https://i.pinimg.com/564x/55/3f/9d/553f9d9db6875e0eb36f8ec1ddc5d042.jpg?b=t', 'Learn to make this yummy looking dish!'),
(4, 4, 'Little Black Dress', 'https://i-h2.pinimg.com/564x/8d/84/ea/8d84ea2f69ed0bba0c504ca0da9b06ba.jpg', 'A little black dress should be an essential item in your closet'),
(5, 5, 'Laptop', 'https://icdn7.digitaltrends.com/image/applemacbook-review-lid.jpg', 'Apple 2017 MacBook Air'),
(6, 6, 'Converse', 'https://i-h2.pinimg.com/564x/b9/ea/eb/b9eaebc01a2cd1906ba9edd66b2a5a02.jpg', 'How do you rock your chucks?'),
(7, 1, 'Engagement Ring', 'https://i-h2.pinimg.com/564x/ba/8c/1d/ba8c1d967a300c1644a77855f1478570.jpg', 'My future engagement ring!'),
(8, 8, 'Oversized Scarf', 'https://i-h2.pinimg.com/564x/dc/6f/63/dc6f635add22f6297bd50fb54df9132c.jpg', 'One way to rock an oversized scarf'),
(5, 5, 'Marie Kondo Hacks', 'https://i-h2.pinimg.com/564x/de/71/d6/de71d6fdad9dbb3761a533ea9527df9f.jpg', 'Marie Kondo Hacks'),
(3, 7, 'Free Crochet', 'https://i-h2.pinimg.com/564x/09/d7/dc/09d7dc80a795868bcc9f2df22746ab32.jpg', 'Crochet tips'),
(1, 2, 'Denim Shirt', 'https://i-h2.pinimg.com/564x/e8/f7/c1/e8f7c15ac82afd7d59ddce290f8d6a8a.jpg', 'Cool way to style a denim shirt...'),
(5, 3, 'African Print', 'https://i-h2.pinimg.com/564x/e2/46/21/e246213952579df53e109452afff4165.jpg', 'My style, my way!');

INSERT INTO boards (user_id, board_content, board_name) VALUES (1, 'pins', 'Random Things'), (2, 'pins', 'Random Things'), (3, 'pins', 'Pins n Things'), (4, 'pins', 'Random Things'), (5, 'pins', 'Things I Like'), (6, 'pins', 'Pins n Things'), (7, 'pins', 'Random Things'), (8, 'pins', 'Things I Like');
