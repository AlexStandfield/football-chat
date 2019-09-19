CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    teamId INTEGER REFERENCES teams(id),
    title VARCHAR,
    description TEXT
)