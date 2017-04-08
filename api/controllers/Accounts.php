<?php

    require "models/Users.php";

    class Accounts {
        
        
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
            }
             if(empty($_POST["email"]) || empty($_POST["pass"]) || empty($_POST["name"]) || empty($_POST["job"]) || empty($_POST["role"]) || empty($_POST["userDescript"])) {
            $error = "Empty credentials.";
              } elseif ($_POST["pass"] !== $_POST["repass"]) {
            $error = "Passwords don't match!";
             }elseif(strlen($_POST["pass"]) < 6 || strlen($_POST["repass"]) <6){
                 
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
        
        
         }
    