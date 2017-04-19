/*global $*/
/*global Users*/
$(document).ready(onHtmlLoaded);
//always check if HTML is loaded before doing anything
//HTML operaations on view

function onHtmlLoaded(){
    var updateUserModel;
    var saveBtn = $("#save_btn");
    var nameVal = $("#name");
    var descriptionVal = $("#desc");
    var job = $("#job");

    var currentUser = new Users();
   currentUser.getUserById().done(function(){
       var userData = currentUser.models[0];
    //   console.log(userData);
       nameVal.val(userData.name);
       descriptionVal.val(userData.description);
   })
    
    
    saveBtn.on("click", updateUser);
    
    function updateUser(){
        var imageFile = $("#image")[0].files[0];
        console.log(imageFile);
        
        updateUserModel = new Users();
            if(nameVal.val() != "" && descriptionVal.val() != ""){
            var updateReq = updateUserModel.update({
                name: nameVal.val(),
                desc: descriptionVal.val(),
                image: imageFile,
                job: job.val(),
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


