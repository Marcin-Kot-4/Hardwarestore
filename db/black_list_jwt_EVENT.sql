CREATE EVENT
  DeleteExpiredTokens
ON SCHEDULE EVERY 1 DAY
DO
DELETE FROM
  black_list_jwt
WHERE expires_at <= NOW();


-- //
SHOW EVENTS;