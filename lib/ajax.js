'use strict'

var get = function(URL, successCallback) {
		// URL             : Location of resource
		// successCallback : Function to be executed on success

		var xhr = new XMLHttpRequest();

		function success (){
			console.log('ajaxGet succeeded for ' + URL);
			successCallback(xhr.responseText);
		};

		function failure(){
			console.log('ajaxGet failed');
		};

		xhr.open('GET', URL);
		xhr.addEventListener("load", success);
		xhr.addEventListener("error", failure);
		xhr.send(null);
},

	post = function(URL){
		// URL             : Location of resource
		// data            : data to be transmitted Currently in url. Not a REST api
		// successCallback : Function to be executed on success

		var xhr = new XMLHttpRequest();
		function success (){
			console.log('ajaxPost succeeded');
			console.log(xhr.response);
			// successCallback(xhr.response, xhr);
		}

		function failure(){
			console.log('ajaxPost failed');
		}

		xhr.open('POST', URL);
		xhr.responseType = 'json';
		xhr.addEventListener('load', success);
		xhr.addEventListener('error', failure);
		xhr.send();
	};
