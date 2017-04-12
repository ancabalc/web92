<?php
    session_start();
    
    require "configs/config.php";
    require "configs/routes.php";
    
    const BLOG = '/api';
    
    if (!empty($_SERVER['REDIRECT_URL'])) {
        $url = $_SERVER['REDIRECT_URL'];
        $page = str_replace(BLOG,'',$url);
        
        if (array_key_exists($page, $routes)) {
            $class = $routes[$page]["class"];
            $method = $routes[$page]["method"];
           
            
            $methodReq = $_SERVER["REQUEST_METHOD"];
            switch($methodReq) {
                case "POST":
                    $content = file_get_contents("php://input");
                    $data = json_decode($content, true);
                    
                    if ($data) {
                        $_POST = $data;
                         var_dump($_POST);
                    }
                    break;
                case "PUT":
                case "DELETE":
                    
                   
                   
                    parse_str(file_get_contents("php://input"),$PUT);
          
                    $content = file_get_contents("php://input");
                    $data = json_decode($content, true);

                    if ($data) {
                        $REQUEST = $data;
                    } else {
                        parse_str($content, $REQUEST);
                        echo "tra";
                         var_dump($REQUEST);
        exit;
                    }
                    break;
            }

            require "controllers/".$class.".php";
            $controller = new $class();
            $response = $controller->$method();
            
            // RESPONSE FOR JS
            header("Content-Type: application/json");
            echo json_encode($response); // "[{"id":"2","title":"DNA","content":"Tralala"}]"

        } else {
            http_response_code(404); 
            echo "Page not found.";        
        }
    } else {
        http_response_code(403);  
        echo "Access Forbidden.";
    }
    
