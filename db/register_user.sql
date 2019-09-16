INSERT INTO users
(full_name, email, username, password, admin)
VALUES
($1, $2, $3, $4, $5)
RETURNING id, full_name, email, username