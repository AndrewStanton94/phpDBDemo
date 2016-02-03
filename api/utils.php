<?php
    function explodeQuery($query){
        // URL query given as single string, convert to associative array
        if($query == ""){
            return;
        }
        $queryArray = array();
        $query = explode("&", $query);  // Key value pairs
        foreach ($query as $q) {
            $q = explode("=", $q);
            $queryArray[$q[0]] = $q[1];
        }
        return $queryArray;
    }
?>
