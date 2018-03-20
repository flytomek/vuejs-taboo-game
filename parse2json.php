<?php

$csvData = file_get_contents('cards.csv');
$lines = explode(PHP_EOL, $csvData);
$array = array();
$json = '{ "cards" : {';
foreach ($lines as $line) {
    $array[] = str_getcsv($line);
}

foreach($array as $num => $item) {
    $item[1] = str_replace('"', '', $item[1]);
    $item[2] = str_replace('"', '', $item[2]);
    $json.= '"'.$item[0].'" : { "keyword": "'.$item[1].'", "values": "'.$item[2].'" }, ';
}

$json .= "}}";

echo $json;