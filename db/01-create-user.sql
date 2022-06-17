CREATE USER 'hardwarestore'@'localhost' IDENTIFIED BY 'khavar';

GRANT ALL PRIVILEGES ON * . * TO 'hardwarestore'@'localhost';

# Changing authentication plugin to mysql_native_password from caching_sha2_password
ALTER USER 'hardwarestore'@'localhost' IDENTIFIED WITH mysql_native_password BY 'khavar';