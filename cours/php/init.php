<?php

const DIR = __DIR__;

function monVarDump($param){

    echo '<pre>';
    print_r($param);
    echo '</pre>';

}

$tab = [34, 87, 90, 5, 43];
$dbh = new PDO('mysql:host=localhost;dbname=e_commerce_database', 'root', '');

?>