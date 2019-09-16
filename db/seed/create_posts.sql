CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    team_id INTEGER REFERENCES teams(id),
    title VARCHAR,
    description TEXT
)