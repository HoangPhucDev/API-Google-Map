<?php
require_once("Model.php");
$data = new Model();

$name = $_GET['name'];
$address = $_GET['address'];
$lat = $_GET['lat'];
$lng = $_GET['lng'];
$type = $_GET['type'];


$marker = array('name' => ''.$name,'address' =>''.$address,'lat' => ''.$lat,'lng' => ''.$lng,'type' => ''.$type);



$insert = $data->insert('markers',$marker);

echo $insert;

?>