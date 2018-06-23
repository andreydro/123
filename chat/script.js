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

// https://xhr.spec.whatwg.org/
//console.clear();

var xhttp = new XMLHttpRequest();
var targetUrl = 'https://rest-examples-6cb6b.firebaseio.com/group2.json';
var oldResponse;

xhttp.onreadystatechange = function(e) {
  //console.log('Arguments', arguments);
  if (this.readyState == 4 && this.status == 200) {
    //console.log('done:', this.responseText);
    console.log(this.responseText);
  }else if (this.status){
    //console.log('Progress:', this.status, this.responseText)
    output.innerHTML = this.responseText.match(/"data":\{.*\}/)[0];
    oldResponse = this.responseText.match(/"data":\{.*\}/)[0];
  }else{
    //console.log('onreadystatechange', arguments);
  }
};

xhttp.onloadend = function() {
  //console.log('{LOADEND}');
}

xhttp.open("GET", targetUrl, true);
// https://firebase.google.com/docs/reference/rest/database/#section-streaming
xhttp.setRequestHeader('Accept', 'text/event-stream')
xhttp.send();

//console.log(xhttp);
console.log(xhttp.responseText);
