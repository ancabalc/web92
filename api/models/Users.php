<?php

    require_once('DB.php');
    
    class Users extends DB {
    function saveUser($name, $email, $pass, $role, $job,  $description, $image) {
        
     
        
        $sql = 'insert into users (name, email, password, role, job, description, image) values(?, ?, ?, ?, ?, ?, ?)';
        
        $stmt =$this ->dbh-> prepare($sql);
        $stmt->execute(array($name, $email, $pass, $role, $job, $description, $image)); 
         
         return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    function login($email, $pass) {
        $sql = 'select first_name, last_name from users where email = ? and password = ?';

        $stmt = $this->dbh->prepare($sql);
        $stmt->execute(array($email, 
                            $pass));
        
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    
    }