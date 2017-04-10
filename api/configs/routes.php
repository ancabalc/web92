<?php
$routes = [];
$routes['/signup'] = array ("class"=>"Accounts", "method"=>"signUser");
$routes['/accounts/login'] = array ("class"=>"Accounts", "method"=>"login");
