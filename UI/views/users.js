/*global $*/
/*global Users*/
$(document).ready(onHtmlLoaded);
//always check if HTML is loaded before doing anything
//HTML operaations on view

function onHtmlLoaded(){
    var updateUserModel
    var saveBtn = $("#save_btn");
    
    saveBtn.on("click", updateUser);
    
    function updateUser(){
        var nameVal = $("#name").val();
        var descriptionVal = $("#desc").val();
        var imageFile = $("#image")[0].files[0];
        // console.log(imageFile['name']);
        updateUserModel = new Users();
            if(nameVal != "" && descriptionVal != ""){
            var updateReq = updateUserModel.update({
                name: nameVal,
                desc: descriptionVal,
                image: imageFile,
            });
            
             updateReq.done(function(){
            redirectUserToHomepage();
        });
            
        }else{
            alert("All fields required!");
        }
    }
    function redirectUserToHomepage() {
             window.location.href = "https://web92-farki92.c9users.io/UI/pages/index.html";
    }
}


