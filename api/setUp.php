<?php
    include_once "config.php";

	function firstSetUp(){
		$dsn = "mysql:" . DBSERVER . ";dbname=".DBNAME.";";
		$option = array(
			PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
			PDO::ATTR_PERSISTENT => true
		);
		$DB = new PDO($dsn, DBUSER, DBPW, $option);
		$DB->query("CREATE DATABASE IF NOT EXISTS " . DBNAME);
		$DB->query("USE " . DBNAME);

		$rows[] = $DB->query(DBINIT);
		$results["rows"] = $rows;
		var_dump($results);
	}



    function createConnection(){
        // DatabaseSourceName: URL, DatabaseName, Encoding
        $dsn = "mysql:" . DBSERVER . ";dbname=".DBNAME."&charset=utf8;";
        $options = array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_EMULATE_PREPARES => false,
            PDO::ATTR_PERSISTENT => true,    // Investigate ramifications
            PDO::MYSQL_ATTR_USE_BUFFERED_QUERY => true
        );      // => MEANS . Access object attr
                // :: MEANS   Scope modification

        try {
            $db = new PDO($dsn, DBUSER, DBPW, $options);
            $db->exec("USE ".DBNAME); // MySQL-only
        }
        catch(PDOException $e){
            echo "<strong>There was an error with the connection</strong><br>";
            echo "gm: " . $e->getMessage() . "<br>";
            echo "eC: " . $db->errorCode() . "<br>";
            echo "eI ";
            var_dump($db->errorInfo());
			echo "Trying initial setup. Reload to see effect";
			firstSetUp();
        }
        return $db;
    };
?>
