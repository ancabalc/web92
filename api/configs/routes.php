<?php
$routes = [];

$routes['/signup'] = array ("class"=>"Accounts", "method"=>"signUser");
$routes['/users/update'] = array("class"=>"Accounts", "method"=>"updateUser");

$routes['/accounts/create'] = array ("class"=>"Accounts", "method"=>"signUser");

