<?php

require_once "DB.php";

class ApplicationsModel extends DB {
    function selectAll() {
        $sql = 'select * from applications';
        return $this->selectSql($sql);
    }
    
    function insertItem($item) {
        
        
    }
}