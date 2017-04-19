<?php
$routes['/users/list'] = array("class"=>"Users", "method"=>"listTopProviders");
$routes['/accounts/create'] = array ("class"=>"Accounts", "method"=>"signUser");
$routes['/accounts/login'] = array ("class"=>"Accounts", "method"=>"login");
$routes['/applications'] = array ("class"=>"Applications", "method"=>"getAll");
<<<<<<< HEAD
$routes['/users/update'] = array("class"=>"Accounts", "method"=>"updateUser");
=======

$routes['/users/update'] = array("class"=>"Accounts", "method"=>"updateUser");

$routes['/users/getUserById'] = array("class"=>"Accounts", "method"=>"getUserById");
>>>>>>> 5a4e331fb771fb812fd902f3115b2d637a440681
