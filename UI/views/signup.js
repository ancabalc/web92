/* global $ */
/* global nameValue */
/* global passValue */
/* global emailValue */
/* global repassValue */
/* global roleValue */
$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    var signupBtn =$("button[type='submit']");
    var signupModel;
    signupBtn.on("click", function() {
        var nameValue = $("input[name='name']").val();
        var emailValue = $("input[name='email']").val()
        var passValue =$("input[name='password']").val()
        var repassValue =$("input[name='repassword']").val()
        var roleValue = $("input[type='radio']:checked").val();
        var descriptValue = $("input[name='description']").val()
        var jobValue= $("input[name='job']").val()
        var imgFile = $("input[name='image']")[0].files[0];
    
            signupModel = new Signup()
        var signupReq = signupModel.signUp({
            name: nameValue,
            email: emailValue,
            pass: passValue,
            repass: repassValue,
            role: roleValue,
            job: jobValue,
            userDescript: descriptValue,
            image: imgFile
        });
      
        signupReq.done(function(resp){
            redirectUserToHomepage();
        });
    });
        

        
        
    function redirectUserToHomepage() {
        
      if (signupModel.isCreated) {
             window.location.href = "https://web92-rebekkanechita.c9users.io/UI/pages/index.html";
      }
      else {
          console.log (signupModel.isCreated);
             alert("Account creation failed");
        }
    }
}