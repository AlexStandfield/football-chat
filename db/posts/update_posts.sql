UPDATE posts
SET teamID = $2, title = $3, description = $4
WHERE id = $1
RETURNING id, teamID, title, description