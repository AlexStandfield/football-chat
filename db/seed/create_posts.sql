CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    teamID INTEGER REFERENCES teams(id),
    title VARCHAR,
    description TEXT
)