'use strict'

var list,

	setUp = function(){
		window.alert("Yo");
		var tmp = [4, 5, 6, 7];
		list = document.getElementById('theData');
		populateList(tmp);
	},

	populateList = function(data){
		for (var i = 0; i < data.length; i++) {
			var dataElement = data[i],
				listElement = document.createElement(li);
				listElement.innerText(dataElement);
				list.appendChild(listElement);
		}
	};

window.addEventListener('load', setUp);
