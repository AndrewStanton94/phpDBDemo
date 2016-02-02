<?php
    const DBSERVER = "127.0.0.1"; // SQL DB server address
    const DBNAME = "phpDBDemo";    // Name of the database to use
    const DBUSER = "root";  // User with read/write DB permission
    const DBPW = "";    // Password for DB user
	const DBINIT = "CREATE TABLE IF NOT EXISTS firstTable(id bigint PRIMARY KEY not null auto_increment, name VARCHAR(50) not null);"; // The code to run first time

?>
