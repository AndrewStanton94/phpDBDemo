<?php
/* Very useful: http://wiki.hashphp.org/PDO_Tutorial_for_MySQL_Developers#Running_Statements_With_Parameters */

	function get($db, $urlParameters){
		/* echo $_SERVER['QUERY_STRING']; */
		if ($_SERVER['QUERY_STRING'] == "") {
			$query = $db->query("SELECT * FROM firstTable");
		}
		else{
			/* print_r($urlParameters); */
			$query = $db->prepare('SELECT * FROM firstTable WHERE id = :id ');
			$query->bindValue(':id', $urlParameters['id'], PDO::PARAM_INT);
			$query->execute();
		}
		$result = $query->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
	}

	function post($db, $urlParameters){
		$query = $db->prepare("INSERT INTO firstTable VALUES(null, :name)");
		$query->execute(array(':name' => $urlParameters['newName']));
		$affected_rows = $query->rowCount();
	}
?>
