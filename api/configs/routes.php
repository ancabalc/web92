<?php
$routes = [];
$routes['/signup'] = array ("class"=>"Accounts", "method"=>"signUser");
$routes['/applications'] = array ("class"=>"Applications", "method"=>"getAll");