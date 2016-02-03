<?php
/*
    Router, all requests sent to api directory forwarded here.
    URLs of type api/data/args converted to array.
    Determine method then data. Call functions in dbLib* to process commands
*/

include_once "setUp.php";
include_once "utils.php";
include_once "databaseFunctions.php";

if(!isset($db)) {
    $db = createConnection();
}

$urlParameters = explodeQuery($_SERVER['QUERY_STRING']);

switch($_SERVER['REQUEST_METHOD']) {
    case "POST":                    // Creation
        /* echo "<strong><code>Post</code></strong>: <br>"; */
		post($db, $urlParameters);
        break;

    case "GET":						//Retrieval
        /* echo "<p><strong><code>Get</code></strong>:</p>"; */
		get($db, $urlParameters);
	break;

    case "DELETE":
        /* echo "<strong><code>Delete</code></strong>: <br>"; */
        break;

    default:
        echo "<strong>Error: unexpected method. Can handle <code>POST</code>, <code>GET</code>, <code>DELETE</code></strong>";
        http_response_code(405);     //'Method Not Allowed',
}
$db = null;

?>
