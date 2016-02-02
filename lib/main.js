'use strict'

var
	currentData,
	newDataForm,
	populateList = function(data){
		data = JSON.parse(data);
		for (var i = 0; i < data.length; i++) {
			var dataElement = data[i]['name'],
				listElement = document.createElement('li');
				listElement.innerText = dataElement;
				currentData.appendChild(listElement);
		}
	},

	submitNew = function(event){
		event.preventDefault();
		var url = "api/?",
			formElement;
		for (var i = 0; i < newDataForm.elements.length; i++){
			if (newDataForm[i].type != 'submit'){
				formElement = newDataForm.elements[i];
				console.log(formElement.name);
				console.log(formElement.value);
				url += formElement.name + '=' + formElement.value + '&';
			}
		}
		url.replace(/&$/, '');
		post(url);
	},

	setUp = function(){
		currentData = document.getElementById('retrievedData');
		newDataForm = document.forms['newData'];
		newDataForm.addEventListener('submit', submitNew);
		get('api', populateList);
	};

window.addEventListener('load', setUp);
