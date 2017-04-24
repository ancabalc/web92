<?php
require_once "DB.php";

class UsersModel extends DB { 
    function getTopProviders () {
        $sql = "select id, name, description, image from users where role = 'provider' order by id desc limit 3";
         //return $this->selectSql($sql);
        $stmt = $this->dbh->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
        
    function selectUserById($id){
        $sql ="select * from users where id = $id";
        return $this->selectSql($sql);
    }  
    
    
    function saveUser($users) {
        
     
        
        $sql = 'insert into users (name, email, password, role, job, description, image) values(?, ?, ?, ?, ?, ?, ?)';
        
        $stmt =$this ->dbh-> prepare($sql);
        $stmt->execute(array($users['name'],
                             $users['email'],
                             $users['pass'],
                             $users['role'],
                             $users['job'],
                             $users['userDescript'],
                             $users['image'])); 
         
         return $this->dbh->lastInsertId();
    }
    
    function updateItem($item){
        $sql = 'update users set name = ?, description = ?, image = ?, job = ? where id = ?';
        
        $stmt = $this->dbh->prepare($sql);
        
        $stmt->execute(array($item['name'],
                            $item['description'],
                            $item['image'],
                            $item['job'],
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