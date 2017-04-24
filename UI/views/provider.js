/*global $*/
/*global Providers*/
$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
	var providers = new Providers();
	var containerElement=$(".row-prov");
	providers.getTopThree().done(function() {
	 
	    for (var i=0; i<providers.models.length; i++){
        
        generateImageDiv(i);
        generateImageDiv2(i);
        generateImageDiv3(i);
        generateProviderImage(providers.models[i].image);
        generateProviderName(providers.models[i].name);
        generateProviderDescription(providers.models[i].description);
	    }
});
    function generateImageDiv(i){
        var imageDivElement = $("<div></div>");
        imageDivElement.addClass("col-sm-4 sm-margin-b-50 jsImgDiv" + i);
        containerElement.append(imageDivElement);
    }
    function generateImageDiv2(i){
        var imageDivElement = $("<div></div>");
        imageDivElement.addClass("bg-color-white margin-b-20 jsImgDiv2" + i);
        var containerElement = $(".jsImgDiv" + i);
        containerElement.append(imageDivElement);
    }
    function generateImageDiv3(i){
        var imageDivElement=$("<div></div>");
        imageDivElement.addClass("wow zoomIn jsImgDiv3");
        var containerElement = $(".jsImgDiv2" + i);
        containerElement.append(imageDivElement);
        
    }

    function generateProviderImage(providerImage){
        var providerImageElem = $("<img />");
        providerImageElem.html(providerImage);
        var containerElement = $(".jsImgDiv3");
        containerElement.append(providerImageElem);
    }
 
    function generateProviderName(providerName){
        var providerNameElem = $("<h4></h4>");
        providerNameElem.html(providerName);
        containerElement.append(providerNameElem);
    }
    
     
    function generateProviderDescription(providerDescription){
        var providerDescriptionElem = $("<p></p>");
        providerDescriptionElem.html(providerDescription);
        containerElement.append(providerDescriptionElem);
    }

}