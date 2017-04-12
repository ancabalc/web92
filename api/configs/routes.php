<?php

$routes['/users/list'] = array("class"=>"Users", "method"=>"listTopProviders");
$routes['/accounts/create'] = array ("class"=>"Accounts", "method"=>"signUser");

$routes['/signup'] = array ("class"=>"Accounts", "method"=>"signUser");

$routes['/accounts/login'] = array ("class"=>"Accounts", "method"=>"login");

$routes['/applications'] = array ("class"=>"Applications", "method"=>"getAll");

$routes['/users/update'] = array("class"=>"Accounts", "method"=>"updateUser");
