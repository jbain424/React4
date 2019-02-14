#Tables and Columns

**Users**
`id`: SERIAL PRIMARY KEY,
`username`: VARCHAR UNIQUE NOT NULL,
`email`: VARCHAR NOT NULL,
`profile_pic`: VARCHAR

**Pins**
`id`: SERIAL PRIMARY KEY,
`user_id`: INT REFERENCES users(id) ON DELETE SET NULL,
`board_id`: INT REFERENCES pins(id) ON DELETE SET NULL,
`pin_name`: VARCHAR NOT NULL,
`pin_url`: VARCHAR NOT NULL

**Boards**
`id`: SERIAL PRIMARY KEY,
`user_id`: INT REFERENCES users(id) ON DELETE SET NULL,
`board_content`: VARCHAR
`board_name`: VARCHAR NOT NULL
