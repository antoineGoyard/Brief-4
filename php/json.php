<?php

$SCORE = $_POST["score"];
$PSEUDO = $_POST["pseudo"];

$filename = 'score.json';
$jsonString = file_get_contents($filename);
$jsonArray = json_decode($jsonString, true);
$id = sizeof($jsonArray);
var_dump($jsonArray);
$jsonArray[$id] = array(
         "score" => $_POST['score'],
         "pseudo" => $_POST['pseudo']
         );
var_dump(sizeof($jsonArray));
file_put_contents('score.json', json_encode($jsonArray), true);
?>