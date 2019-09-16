CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR,
    email TEXT,
    username VARCHAR(20),
    password TEXT,
    admin BOOLEAN
)