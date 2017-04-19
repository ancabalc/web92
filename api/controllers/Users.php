<?php
    require "models/UsersModel.php";
    class Users {
       private $usersModel;
        
        function __construct(){
            $this->usersModel = new UsersModel;
        }
    
        function listTopProviders(){
            return $this->usersModel-> getTopProviders();
        }
    }
?>