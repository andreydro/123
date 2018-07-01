"use strict";

var room = "/group9.json";
var url = "https://pwagram-d1ec7.firebaseio.com";
var button = document.querySelector("#post");
var date = new Date().toLocaleString();
var name = document.querySelector("#nick");
var message = document.querySelector("#le_inpute");
var output = document.querySelector("#output");

button.addEventListener("click", function() {
	postMessage(message.value, name.value);
});

function postMessage(text, name) {
	fetch(url + room, {
		method: "POST",
		body: JSON.stringify({
			message: text,
			name: name,
			date: new Date().toLocaleString()
		}),
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"
		}
	})
		.then(function(response) {
			return response.json();
		})
		.then(console.log);
}

function listMessages(list) {
	const [data, name, message] = list;
	output.innerHTML = data;
	output.innerHTML = name;
	output.innerHTML = message;
}

var xhttp = new XMLHttpRequest();
var targetUrl = "https://pwagram-d1ec7.firebaseio.com/group9.json";
var messages = [];
var lastMsg = "";

xhttp.onreadystatechange = function(e) {
	if (this.readyState == 3 && this.status == 200) {
		var outputTmp = this.responseText.match(/"data":\{.*\}/);
		//var msg = outputTmp.replace(lastMsg, '');
		//lastMsg = outputTmp;
		outputTmp = outputTmp + "";
		outputTmp = outputTmp.substring(7, outputTmp.length - 1);
		outputTmp = JSON.parse(outputTmp);
		for (var key in outputTmp) {
			messages.push(outputTmp[key]);
		}

		messages.forEach(function(item) {
			output.innerHTML += ` Message: ${item["message"]}, user: ${
				item["name"]
			}, date: ${item["date"]} `;
		});
		// console.log(messages);
		// console.log(outputTmp);
	} else if (this.status) {
	} else {
		//console.log('onreadystatechange', arguments);
	}
};

xhttp.onloadend = function() {};

xhttp.open("GET", targetUrl, true);
xhttp.setRequestHeader("Accept", "text/event-stream");
xhttp.send();