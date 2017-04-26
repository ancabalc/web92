/*global $*/
/*global Providers*/
$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
	var providers = new Providers();
	var containerElement=$(".row-prov");
	providers.getTopThree().done(function() {
	 
	    for (var i=0; i<providers.models.length; i++){
	        
	        var userDiv = $('<div class="col-sm-4 sm-margin-b-50 " ></div>');
	        
	        var userImage = '<img src="../../api/uploads/' + providers.models[i].image + '" width="100"/>';
	        userDiv.append(userImage);
	        
	        var providerNameElem = $("<h4></h4>");
            providerNameElem.html(providers.models[i].name);
            userDiv.append(providerNameElem);
            
            var providerDescriptionElem = $("<p></p>");
            providerDescriptionElem.html(providers.models[i].description);
            userDiv.append(providerDescriptionElem);
            
	        
	        containerElement.append(userDiv);
	        
	        
        
        // generateImageDiv(providers.models[i].image,i);
        // // generateImageDiv2(i);
        // // generateImageDiv3(i);
        // //generateProviderImage(providers.models[i].image);
        // generateProviderName(providers.models[i].name, i);
        // generateProviderDescription(providers.models[i].description, i);
	    }
});
    function generateImageDiv(providerImage, i){
        var imagePath = window.location.origin + '/api/uploads' +  providerImage;
        var providerImageElem = '<img src="../../api/uploads/' + providerImage + '" width="100"/>';
        
        var imageDivElement3 = '<div class="wow zoomIn jsImgDiv">' + providerImageElem + '</div>';
        var imageDivElement2 = '<div class="bg-color-white margin-b-20 jsImgDiv2 ' +i+ '"> ' + imageDivElement3 + ' </div>';
        var imageDivElement = $('<div class="col-sm-4 sm-margin-b-50 jsImgDiv'+i+'" > '+ imageDivElement2 +' </div>');
        containerElement.append(imageDivElement);
    }
    // function generateImageDiv2(i){
    //     var imageDivElement = $("<div></div>");
    //     imageDivElement.addClass("bg-color-white margin-b-20 jsImgDiv2" + i);
    //     var containerElement = $(".jsImgDiv" + i);
    //     containerElement.append(imageDivElement);
    // }
    // function generateImageDiv3(i){
    //     var imageDivElement=$("<div></div>");
    //     imageDivElement.addClass("wow zoomIn jsImgDiv3");
    //     var containerElement = $(".jsImgDiv2" + i);
    //     containerElement.append(imageDivElement);
        
    // }

    // function generateProviderImage(providerImage){
    //     var providerImageElem = $('<img src="../../api/uploads/" ' + providerImage + '/>');
    //     providerImageElem.prepend(providerImage);
    //     providerImageElem.attr("src", "../../api/uploads/" + providerImage);
    //     var containerElement = $(".jsImgDiv3");
    //     containerElement.append(providerImageElem);
    // }
 
    function generateProviderName(providerName, i){
        var providerNameElem = $("<h4></h4>");
        providerNameElem.html(providerName);
        var containerElement = $(".jsImgDiv" + i);
        console.log("containerElement ", containerElement);
        containerElement.append(providerNameElem);
    }
    
    function generateProviderDescription(providerDescription, i){
        var providerDescriptionElem = $("<p></p>");
        providerDescriptionElem.html(providerDescription);
        var containerElement = $(".jsImgDiv" + i);
        containerElement.append(providerDescriptionElem);
    }

}