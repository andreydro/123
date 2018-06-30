'use strict'
var input = document.querySelector('#le_inpute');// {message, name, date}
var room = '/group2.json';
var url = 'https://rest-examples-6cb6b.firebaseio.com';
var button = document.querySelector('#post');
var date = new Date().toLocaleString();
var input = document.querySelector('#le_inpute');
var output = document.querySelector('#output');

button.addEventListener('click', function() {
  postMessage(input.value, 'group2');
});
  
function postMessage(text, name) {
  fetch(url + room, {
    method: 'POST',
    body: JSON.stringify(
      {
        message: text,
        name: name,
        date: new Date().toLocaleString(),
      }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
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
var targetUrl = 'https://rest-examples-6cb6b.firebaseio.com/group2.json';
var oldResponce = [];
var messages = [];
var newArray = [];

xhttp.onreadystatechange = function(e) {
  if (this.readyState == 3 && this.status == 200) {
   // console.log(this.responseText);
        var outputTmp = this.responseText.match(/"data":\{.*\}/);
    outputTmp = outputTmp + "";
    outputTmp = outputTmp.substring(7, outputTmp.length - 1);
    outputTmp = JSON.parse(outputTmp);
    for(var key in outputTmp) {
      messages.push(outputTmp[key]);
    }
    
    messages.forEach(function(item){
      for(var key in item) {
        output.innerHTML += ` Message: ${item["message"]}, user: ${item["name"]}, date: ${item["date"]} `
      }
    });
  } else if (this.status) {
  //  console.log(this.responseText);
//     var outputTmp = this.responseText.match(/"data":\{.*\}/);
//     outputTmp = outputTmp + "";
//     outputTmp = outputTmp.substring(7, outputTmp.length - 1);
//     outputTmp = JSON.parse(outputTmp);
//     for(var key in outputTmp) {
//       messages.push(outputTmp[key]);
//     }
    
//     messages.forEach(function(item){
//       for(var key in item) {
//         output.innerHTML += ` Message: ${item["message"]}, user: ${item["name"]}, date: ${item["date"]} `
//       }
//     });
   
    //outputTmp = outputTmp.replace(/-.{21}/g, "");
    //outputTmp = outputTmp.replace(/\"/g, "");
    //outputTmp = outputTmp.split(",\\");
    //outputTmp = outputTmp.match(/{\"date\":.*}/);
   // console.log(outputTmp[0]);
//     console.log(newArray);
//     console.log(typeof outputTmp);
//     outputTmp = outputTmp.substring(60, 131);
//     outputTmp = JSON.parse(outputTmp);
//     output.innerHTML =`Message: ${outputTmp["message"]}, user: ${outputTmp["name"]}, date: ${outputTmp["date"]}`
//     console.log(typeof outputTmp);
//     for (var key in outputTmp) {
//       if (outputTmp.hasOwnProperty(key)) {
//         console.log(key);
//       }
//     }
//     messages = [];
//     outputTmp = outputTmp.split('-');
//     outputTmp.forEach(function(item) {
//       var m = item.match(/\{.*\}/);
//       if(m) {
//         messages.push(m+'');
//       }
//     });
//     messages = messages.filter(function(item) {return oldResponce.indexOf(item) === -1});
//     messages[messages.length-1].replace(/"}}/,"");
//     messages = messages.map(function(i){
//       return JSON.parse(i);
//     });
//     console.log(messages);
   // console.log(outputTmp);
  } else {
    //console.log('onreadystatechange', arguments);
  }
};

xhttp.onloadend = function() {
}

xhttp.open("GET", targetUrl, true);
// https://firebase.google.com/docs/reference/rest/database/#section-streaming
xhttp.setRequestHeader('Accept', 'text/event-stream')
xhttp.send();

//console.log(xhttp);
//console.log(xhttp.responseText);
