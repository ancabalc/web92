<?php 
    require "app/controllers/Accounts.php";
    
    $login=new Accounts();
    $login->Login();
    if ($_SESSION["isLogged"]==TRUE) {
        
    }
?>