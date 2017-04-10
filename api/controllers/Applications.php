<?php
require_once "models/ApplicationsModel.php";
class Applications {
    
    function getAll() {
        
        $ApplicationsModel = new ApplicationsModel();
        return $ApplicationsModel->selectAll();
    }
        
    
}