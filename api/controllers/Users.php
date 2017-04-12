<?php
    require "models/UsersModel.php";
    class Users {
       private $usersModel;
        
        function __construct(){
            $this->usersModel = new UsersModel;
        }
    
        function listTopProviders(){
            if (!empty($_GET["name"]) && !empty($_GET["description"]) && !empty ($_GET["image"]))
            {
                return $users -> getTopProviders();
            } else {
                return array("error" => "Something went wrong."); 
            } 
            
        }
    }
?>