<?php
$routes = [];
$routes['/signup'] = array ("class"=>"Accounts", "method"=>"signUser");

$routes['/accounts/login'] = array ("class"=>"Accounts", "method"=>"login");

$routes['/applications'] = array ("class"=>"Applications", "method"=>"getAll");

$routes['/users/update'] = array("class"=>"Accounts", "method"=>"updateUser");

$routes['/accounts/create'] = array ("class"=>"Accounts", "method"=>"signUser");


