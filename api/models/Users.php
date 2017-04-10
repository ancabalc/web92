<?php

    require_once('DB.php');
    
    class Users extends DB {
    function saveUser($name, $email, $pass, $role, $job,  $description, $image) {
        
     
        
        $sql = 'insert into users (name, email, password, role, job, description, image) values(?, ?, ?, ?, ?, ?, ?)';
        
        $stmt =$this ->dbh-> prepare($sql);
        $stmt->execute(array($name, $email, $pass, $role, $job, $description, $image)); 
         
         return $this->dbh->lastInsertId();
    }
    
    function updateItem($item){
        $sql = 'update users set name = ?, description = ?, image = ? where id = ?';
        
        $stmt = $this->dbh->prepare($sql);
        
        $stmt->execute(array($item['name'],
                            $item['description'],
                            $item['image'],
                            $item['id']));
                            
        return $stmt->rowCount();
    }
    
    
    
    }