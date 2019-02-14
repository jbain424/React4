DROP DATABASE IF EXISTS epingle;
CREATE DATABASE epingle;

\c epingle;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  email VARCHAR NOT NULL,
  profile_pic VARCHAR
);

CREATE TABLE pins (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE SET NULL,
  board_id INT REFERENCES pins(id) ON DELETE SET NULL,
  pin_name VARCHAR NOT NULL,
  pin_url VARCHAR NOT NULL
);

CREATE TABLE boards (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE SET NULL,
  board_content VARCHAR,
  board_name VARCHAR NOT NULL
);

INSERT INTO users (username, email, profile_pic) VALUES ('jojo424', 'jonellebain@pursuit.org', 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'), ('sexisammy20', 'samantha.clement@gmail.com', 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'), ('misscobracommander', 'misscobracommander@gmail.com', 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'), ('misterbain', 'mrbain@gmail.com', 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'), ('douka_m', 'doukam@gmail.com', 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'), ('jmax', 'jmax@gmail.com', 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'), ('phyllisb', 'phyllisb@pursuit.org', 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'), ('royanb', 'royanb@gmail.com', 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg');

INSERT INTO pins (user_id, board_id, pin_name, pin_url) VALUES
(1, 1, 'cats', 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'),
(2, 2, 'Hairstyles', 'https://i.pinimg.com/564x/6d/9b/f9/6d9bf983079f8257ea789def86bbb490.jpg'),
(3, 3, 'Food', 'https://i.pinimg.com/564x/55/3f/9d/553f9d9db6875e0eb36f8ec1ddc5d042.jpg?b=t'),
(4, 4, 'cats', 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'),
(5, 5, 'Hairstyles', 'https://i.pinimg.com/564x/6d/9b/f9/6d9bf983079f8257ea789def86bbb490.jpg'),
(6, 6, 'Food', 'https://i.pinimg.com/564x/55/3f/9d/553f9d9db6875e0eb36f8ec1ddc5d042.jpg?b=t'), 
(7, 7, 'Food', 'https://i.pinimg.com/564x/55/3f/9d/553f9d9db6875e0eb36f8ec1ddc5d042.jpg?b=t'),
(8, 8, 'cats', 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg');

INSERT INTO boards (user_id, board_content, board_name) VALUES (1, 'pins', 'cats'), (2, 'pins', 'Hairstyles'), (3, 'pins', 'food'), (4, 'pins', 'cats'), (5, 'pins', 'Hairstyles'), (6, 'pins', 'food'), (7, 'pins', 'cats'), (8, 'pins', 'Hairstyles');
