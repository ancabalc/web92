<?php

    require_once('DB.php');
    
    class Users extends DB {
    function saveUser($name, $email, $pass, $role, $job,  $description, $image) {
        
     
        
        $sql = 'insert into users (name, email, password, role, job, description, image) values(?, ?, ?, ?, ?, ?, ?)';
        
        $stmt =$this ->dbh-> prepare($sql);
        $stmt->execute(array($name, $email, $pass, $role, $job, $description, $image)); 
         
         return $this->dbh->lastInsertId();
    }
    
    
    
    }