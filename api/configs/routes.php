<?php

$routes['/users/list'] = array("class"=>"Users", "method"=>"listTopProviders");
$routes['/accounts/create'] = array ("class"=>"Accounts", "method"=>"signUser");

<<<<<<< HEAD
$routes['/users/update'] = array("class"=>"Accounts", "method"=>"updateUser");
$routes['/accounts/create'] = array ("class"=>"Accounts", "method"=>"signUser");
=======
$routes['/signup'] = array ("class"=>"Accounts", "method"=>"signUser");

$routes['/accounts/login'] = array ("class"=>"Accounts", "method"=>"login");

$routes['/applications'] = array ("class"=>"Applications", "method"=>"getAll");
>>>>>>> f27fc78e590915d57a812aada29246d88cee60c5

$routes['/users/update'] = array("class"=>"Accounts", "method"=>"updateUser");
