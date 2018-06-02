
function detectIntersection(p1, p2) {
  if (p1.x == p2.x || p1.y == p2.y || p1.w == p2.w && p1.h == p2.h) {
    if (p1.x > p2.w || p1.y > p2.h) {
      return false
    } else {
      return true
    }
  } else {
    if (p1.x !== p2.x && p1.y !== p2.y && p1.w !== p2.w && p1.h !== p2.h) {
      return true
    } else {
      return false
    }
  }
}

var mainBox = document.querySelector("#main-box");

document.querySelectorAll("fieldset")[0].addEventListener("change", function(e) {
  var box = document.querySelector("#yellow-box");
  if (e.target.id == "x-yellow"){
    box.style.left = e.target.value + "px";
  }
  if (e.target.id == "y-yellow"){
    box.style.top = e.target.value + "px";
  }
  if (e.target.id == "w-yellow"){
    box.style.width = e.target.value + "px";
  }
  if (e.target.id == "h-yellow"){
    box.style.height = e.target.value + "px";
  }
});

document.querySelectorAll("fieldset")[1].addEventListener("change", function(e) {
  var box = document.querySelector("#red-box");
  if (e.target.id == "x-red"){
    box.style.left = e.target.value + "px";
  }
  if (e.target.id == "y-red"){
    box.style.top = e.target.value + "px";
  }
  if (e.target.id == "w-red"){
    box.style.width = e.target.value + "px";
  }
  if (e.target.id == "h-red"){
    box.style.height = e.target.value + "px";
  }
});

var redBox = document.getElementById("red-box");

function move(e) {
  redBox.style.top = e.clientY + "px";
  redBox.style.left = e.clientX + "px";
}

redBox.addEventListener("mousedown", function(e) {
  mainBox.addEventListener("mousemove", move)
})

redBox.addEventListener("mouseup", function(e) {
  mainBox.removeEventListener("mousemove", move)
})

// function move(e) {
//   console.log(e);
//   e.style.left = clientX + "px";
//   e.style.top = clientY + "px";
// }

// document.querySelectorAll(".box").forEach(box => {
//   box.addEventListener("mousedown", function(e) {
//     //if (e.target == box) {
//       // const cordinate = box.getBoundingClientRect();
//       // var x = e.clientX;
//       // var y = e.clientY;
//       mainBox.addEventListener("mousemove", move)
//     //}
//   })

//   box.addEventListener("mouseup", function(e) {
//     mainBox.removeEventListener("mousemove", move)
//   })
// })

