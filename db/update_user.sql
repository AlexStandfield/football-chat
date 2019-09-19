UPDATE users
SET full_name = $2, email = $3, username = $4, admin = $5
WHERE id = $1
RETURNING id, full_name, email, username, admin