function Signup() {
  this.models = [];
}
Signup.prototype.signUp = function(credentials){
    var that=this
    var formData = new FormData();
    formData.append("name", credentials.name);
    formData.append("email", credentials.email);
    formData.append("pass", credentials.pass);
    formData.append("repass", credentials.repass);
    formData.append("role", credentials.role);
    formData.append("job", credentials.job);
    formData.append("userDescript", credentials.userDescript);
    formData.append("image", credentials.image);
    console.log (credentials);
    var config = {
        url: "https://web92-auxentiu.c9users.io/api/accounts/create",
        method: "POST",
        data: formData,
        processData: false,
        contentType: false,    
        dataType: "json",
       success: function(resp){
            if (resp) {
                if (resp.error){
                   // alert ("Check network for response! Fixing the error in progress.");
                   console.log("error in resp")
                    that.isCreated = false;
                } else {
                    that.isCreated = true;
                }
            }
            
        },
        error: function(xhr, status, error) {
            alert("Oops!Something is wrong " + xhr.responseText);
        },
        complete: function(){
            console.log("The request is complete");
        }
    }

    // singIn method will return the jqXHR object returned by
    // the ajax request
    return $.ajax(config);
}
