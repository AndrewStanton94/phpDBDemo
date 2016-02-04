'use strict'
// This file contains the js for the index page.
// Code for displaying data from demo database, and adding a new value

var
	currentDataContainer,
	newDataForm,

	// Take data in the JSON format and display it.
	// Loops through a list and add the name attributes to the screen
	populateList = function(data){
		data = JSON.parse(data);	// JSON stores the data as a string. This converts it back to normal data types / structures
		currentDataContainer.innerHTML = '';	// Empty the list before adding new data
		for (var i = 0; i < data.length; i++) {		//for each element
			var dataElement = data[i]['name'],		//get the name value
				listElement = document.createElement('li');	// make a <li></li> element
				listElement.textContent = dataElement;		// put the name in it
				currentDataContainer.appendChild(listElement);	// put name in the list on screen
		}
	},

	// Add the data in the form into the database
	submitNew = function(event){
		event.preventDefault();		// Without this the page will reload when the button pressed
		var formElement,
			url = "api/?";	//The base url now add data
		for (var i = 0; i < newDataForm.elements.length; i++){	// For all form elements
			if (newDataForm[i].type != 'submit'){	// Except the submit button
				formElement = newDataForm.elements[i];
				url += formElement.name + '=' + formElement.value + '&';
					// Add the forms name and value to the url. & joins the next argument
			}
		}
		url = url.replace(/&$/, '');	// Remove the & at the end. If left php will get confused.
										// The data should be checked server side, but I'm being lazy and trusting all data is validated before being sent.
		console.log("final url: " + url);
		post(url, 'reloadList');	// Send the data. Giving event to call on success
	},

	// Call the get function with fixed url and callback.
	// This is executed by an event so could become an anonymous function
	reloadListEventHandler = function(){
		get('api/', populateList);
	},

	// Ensures variables referring to dom elements are defined
	// This is called once all resources are loaded. If the call was just added to the code it may be executed too soon. E.g. before currentDataContainer or newDataForm was created. So references would be empty.
	setUp = function(){
		currentDataContainer = document.getElementById('retrievedData');	// Where the data is displayed
		newDataForm = document.forms['newData'];	// Form to add new data
		newDataForm.addEventListener('submit', submitNew);	// Add event to the form
		window.dispatchEvent(new CustomEvent('reloadList'));	// Call the custom event
	};

window.addEventListener('load', setUp);		// This makes the setUp function run once safe to do so.
window.addEventListener('reloadList', reloadListEventHandler);
