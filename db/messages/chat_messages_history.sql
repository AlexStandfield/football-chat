SELECT id, message
FROM chat_messages
WHERE room_id = $1