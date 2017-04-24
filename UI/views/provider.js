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
        generateProviderImage(providers.models[i].image, i);
        generateProviderName(providers.models[i].name, i);
        generateProviderDescription(providers.models[i].description, i);
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

    function generateProviderImage(providerImage, i){
        var providerImageElem = $("<img />");
        providerImageElem.prepend(providerImage);
        var containerElement = $(".jsImgDiv3");
        containerElement.append(providerImageElem);
    }
 
    function generateProviderName(providerName, i){
        var providerNameElem = $("<h4></h4>");
        providerNameElem.html(providerName);
        var containerElement = $(".jsImgDiv" + i);
        containerElement.append(providerNameElem);
    }
    
    function generateProviderDescription(providerDescription, i){
        var providerDescriptionElem = $("<p></p>");
        providerDescriptionElem.html(providerDescription);
        var containerElement = $(".jsImgDiv" + i);
        containerElement.append(providerDescriptionElem);
    }
// name si description in primul div creeat de mine append - > //
}