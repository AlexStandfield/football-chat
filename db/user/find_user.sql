SELECT id, full_name, email, username, password, admin
FROM users
WHERE username = $1