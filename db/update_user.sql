UPDATE users
SET full_name = $2, email = $3, username = $4, password = $5, admin = $6
WHERE id = $1