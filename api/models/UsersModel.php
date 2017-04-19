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
}