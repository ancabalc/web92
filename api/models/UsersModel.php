<?php
require_once "DB.php";

class Users extends DB { 
    function getTopProviders () {
        $sql = 'select id, name, description, image from users where role 'provider' order by id desc limit 3';

        $stmt = $this->dbh->prepare($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);    
    }
}