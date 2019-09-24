DELETE FROM favorites
WHERE userid = $1;
DELETE FROM users
WHERE id = $1;