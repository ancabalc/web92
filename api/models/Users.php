<?php

    require_once('DB.php');
    
    class Users extends DB {
        
    function selectUserById($id){
        $sql ="select * from users where id = $id";
        return $this->selectSql($sql);
    }  
    
    
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
    
    function login($email, $pass) {
        $sql = 'select first_name, last_name from users where email = ? and password = ?';

        $stmt = $this->dbh->prepare($sql);
        $stmt->execute(array($email, 
                            $pass));
        
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    
}