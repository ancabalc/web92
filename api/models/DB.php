<?php
    class  DB {

        protected $dbh;
    
        function __construct() {

            try {
             $this->dbh = new PDO('mysql:host=' . DBHOST . ';dbname=' . DBNAME, 
                              DBUSER, 
                              DBPASS);
            } catch (PDOException $e) {
                print "Error!: " . $e->getMessage() . "<br/>";
                die();
            }
        }
    }