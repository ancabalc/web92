/*global $*/
/*global Providers*/
$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
	var providers = new Providers();
	var containerElement=$(".row-prov");
	providers.getTopThree().done(function() {
	    //for providers.models [i]
	    for (var i=0; i<providers.models.length; i++){
	    
        generateProviderName(providers.models[i].name);
        generateProviderDescription(providers.models[i].description);
        generateProviderImage(providers.models[i].image);
	    }
})
    //generates a h2 element,adds the title and append the element to the container 
    function generateProviderName(providerName){
        var providerNameElem = $("<h2></h2>");
        providerNameElem.html(providerName);
        containerElement.append(providerNameElem);
    }
    
     //generates an article element,adds the content and append the element to the container
    function generateProviderDescription(providerDescription){
        var providerDescriptionElem = $("<article></article>");
        providerDescriptionElem.html(providerDescription);
        containerElement.append(providerDescriptionElem);
    }

    function generateProviderImage(providerImage){
        var providerImageElem = $("<article></article>");
        providerImageElem.html(providerImage);
        containerElement.append(providerImageElem);
    }
}