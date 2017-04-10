<?php

    require "models/Users.php";

    class Accounts {
        
        private $usersModel;
        
        function __construct() {
            $this->usersModel = new Users();   
        }
        
         function signUser() {
    
             if(isset($_SESSION['isLogged']) && $_SESSION['isLogged'] === TRUE ) {
                return array("isLogged" => $_SESSION["isLogged"]);   
                }
    
            if (isset($_POST["email"])) {
        //print_r($_POST);
        //echo $_POST["email"];
        
              $error = "";
              if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
                $error = "Email invalid";
                http_response_code(400);
            }
             if(empty($_POST["email"]) || empty($_POST["pass"]) || empty($_POST["name"]) || empty($_POST["job"]) || empty($_POST["role"]) || empty($_POST["userDescript"])) {
            $error = "Empty credentials.";
            http_response_code(400);
              } elseif ($_POST["pass"] !== $_POST["repass"]) {
            $error = "Passwords don't match!";
            http_response_code(400);
             }elseif(strlen($_POST["pass"]) < 6 || strlen($_POST["repass"]) <6){
                 http_response_code(400);
                 $error = "Password must be at least 6 characters long!";
             }
        
             if (empty($error)) {
                 
                 $signUp = new Users();
                    $email = $_POST["email"];
                 // Crypt password before save
                 $pass = crypt($_POST["pass"], PASS_SALT);
                    $job = $_POST["job"];
                    $name = $_POST["name"];
                    $description = $_POST["userDescript"];
                    $role = $_POST["role"];
                if (isset($_FILES['image'])) {
                    $file = $_FILES['image'];
                    move_uploaded_file($file["tmp_name"], "uploads/" . $file["name"]);
                    $_POST['image'] = $file["name"];
                }
                $image = $_POST['image'];
            
                  $result =$signUp-> saveUser($name, $email, $pass, $role, $job, $description, $image);
           
                  if ($result > 0) {
                     return ( "User with email $email was successfully created");
                  }
                    else {
                      return ("unable to create");
                     }
            }
             else {
                    return $error;
                }
        
        
            }
        } 
        
    function updateUser(){
        // if (!isset($_SESSION["isLogged"]) || $_SESSION["isLogged"] !== TRUE) {
        //         http_response_code(401);
        //         return array("error"=>"Unauthorized. You have to be logged.");
        //     }
    
        
        if(!empty($_POST['name']) || !empty($_POST['description']) || !empty($_POST['image']) || !empty($_POST['id'])){
            $_POST['image'] = NULL;
                if(!empty($_FILES['image'])){
                    $file = $_FILES['image'];
                    move_uploaded_file($file["tmp_name"], "uploads/" . $file["name"]);
                    $_POST['image'] = $file["name"];
                
                }
            
            return $this->usersModel->updateItem($_POST);
        }
        else{
            return "All fields are required.";
        }
            
    
    }
        
    }
    