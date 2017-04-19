/*global $*/
/*global Application*/
$(document).ready(onHtmlLoaded);
$(document).ready(onHtmlLoaded);
function onHtmlLoaded(){
    var applications = new Applications;
    applications.getAll();
}
