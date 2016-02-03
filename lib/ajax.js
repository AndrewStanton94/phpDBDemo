'use strict'

var get = function(URL, successCallback) {
		// URL             : Location of resource
		// successCallback : Function to be executed on success

		var xhr = new XMLHttpRequest();

		function success (){
			console.log('ajaxGet succeeded for: "' + URL + '" \nData returned: ');
			console.log(xhr.responseText);
			successCallback(xhr.responseText);
		};

		function failure(){
			console.error('ajaxGet failed');
		};

		xhr.open('GET', URL);
		xhr.addEventListener("load", success);
		xhr.addEventListener("error", failure);
		xhr.send(null);
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
		xhr.responseType = 'json';
		xhr.addEventListener('load', success);
		xhr.addEventListener('error', failure);
		xhr.send();
};
