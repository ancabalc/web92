<?php
$routes = [];

$routes['/users/update'] = array("class"=>"Accounts", "method"=>"updateUser");
$routes['/accounts/create'] = array ("class"=>"Accounts", "method"=>"signUser");

