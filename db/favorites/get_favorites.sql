SELECT * 
FROM posts p
JOIN teams t ON p.teamid = t.id
JOIN favorites f ON f.teamid = t.id
WHERE f.userid = $1