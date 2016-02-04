'use strict'

var get = function(URL, successCallback) {
		// URL             : Location of resource
		// successCallback : Function to be executed on success

		var xhr = new XMLHttpRequest();

		success = function(){
			if(xhr.status != 200){	// This block was debugging. IGNORE
				failure();
				return;
			}
			console.log('ajaxGet succeeded for: "' + URL + '" \nData returned: ');
			console.log(xhr.responseText);
			if (xhr.responseText === '[]') {
				console.log('No data, database empty');
				return;
			}
			successCallback(xhr.responseText);
		},

		failure = function(){
			console.error('ajaxGet failed');
			console.log(xhr);
		};

		xhr.open('GET', URL);	// Specify the HTTP method to use and the url
		xhr.addEventListener("load", success);
		xhr.addEventListener("error", failure);
		xhr.send(null);		// Start communication
},

	post = function(URL, successEvent){
		// URL:				Location of resource
		// successEvent:	Call this event if post works

		var xhr = new XMLHttpRequest();
		function success (){
			console.log('ajaxPost succeeded');
			window.dispatchEvent(new CustomEvent(successEvent));
		};

		function failure(){
			console.error('ajaxPost failed');
		};

		xhr.open('POST', URL);
		xhr.addEventListener('load', success);
		xhr.addEventListener('error', failure);
		xhr.send();
};
