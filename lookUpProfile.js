//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
  var result;
  for (var i = 0; i < contacts.length; i++) {
    var isNamesMached = contacts[i]["firstName"] == name;
    var hasProp = contacts[i].hasOwnProperty(prop);
    if (isNamesMached && hasProp) {
      result = contacts[i][prop];
      break;
    } else if (!isNamesMached) {
      result = "No such contact";
    } else if (!hasProp) {
      result = "No such property";
      break;
    }
  }
  return result;
}

lookUpProfile("Akira", "likes");