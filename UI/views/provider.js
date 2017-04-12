/*global $*/
/*global Article*/
$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
	var provider = new Provider();
	provider.getTopThree;
	var containerElement=$(".row-prov");
	provider.done (function() {
        generateProviderName(provider.name);
        generateProviderDescription(provider.description);
        generateProviderImage(provider.image);
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