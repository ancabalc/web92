/* global Provider */
/* global providers */
/* global $ */
function Providers (){
	this.models = [];
}

Providers.prototype.getTopThree = function() {

 	if (providers) {
 		for (var i=0; i<providers.length; i++) {
 			var provider = new Provider (providers[i]);
 			this.models.push(provider);
            }
 	console.log(providers);
	console.log(this.models);
}
};