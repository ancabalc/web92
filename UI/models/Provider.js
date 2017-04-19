/*global $*/

function Provider(options){
    this.id = options.id;
    this.name = options.name;
    this.description = options.description;
    this.image = options.image;
}

Provider.prototype.getTopThree = function(data){
  var config = {
 
    url: "https://web92-rebekkanechita.c9users.io/api/users/list",
    method: "GET",
    dataType: "json",
    success: function(resp){
        //provider.name, provider.description, provider.image;
    },
    error: function(xhr, status, error) {
        alert("Oops!Something is wrong " + error);
    },
    complete: function(){
        console.log("The request is complete");
    }
};
 return $.ajax(config);
};
