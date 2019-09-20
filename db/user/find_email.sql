SELECT id, full_name, email, username, password
FROM users
WHERE email = $1