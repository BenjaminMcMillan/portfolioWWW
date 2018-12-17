function display(x) {
    var text = document.getElementById("IoT");
    var text2 = document.querySelector("#secondInfo");
    text2.style.opacity = "0.2"
    console.log(text2)
    text.style.display = "block";
}

function displayOff(x) {
  var text = document.getElementById("IoT");
  text.style.display = "none";
  var text2 = document.querySelector("#secondInfo");
  text2.style.opacity = "1"
}

function display2(x) {
    var text = document.getElementById("OtBT");
    var text2 = document.querySelector("#secondInfo");
    text2.style.opacity = "0.2"
    console.log(text2)
    text.style.display = "block";
}

function displayOff2(x) {
  var text = document.getElementById("OtBT");
  text.style.display = "none";
  var text2 = document.querySelector("#secondInfo");
  text2.style.opacity = "1"
}

function display3(x) {
    var text = document.getElementById("AoV");
    var text2 = document.querySelector("#secondInfo");
    text2.style.opacity = "0.2"
    console.log(text2)
    text.style.display = "block";
}

function displayOff3(x) {
  var text = document.getElementById("AoV");
  text.style.display = "none";
  var text2 = document.querySelector("#secondInfo");
  text2.style.opacity = "1"
}

function display4(x) {
    var text = document.getElementById("IB");
    var text2 = document.querySelector("#secondInfo");
    text2.style.opacity = "0.2"
    console.log(text2)
    text.style.display = "block";
}

function displayOff4(x) {
  var text = document.getElementById("IB");
  text.style.display = "none";
  var text2 = document.querySelector("#secondInfo");
  text2.style.opacity = "1"
}

window.onload = () => {


var getAcmeTag = document.querySelector('#workOne');
var acmeImages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

var i = 0;
var l = acmeImages.length - 1;

(function loop() {
  if (i > l) {
    i = 0;
  }
  getAcmeTag.src = "work/IoT/" + acmeImages[i];
  loopTimer = setTimeout(loop, 3000);
  ++i;
})();


var getOtBTTag = document.querySelector('#workFour');
var OtBTImages = ["1.jpeg", "2.jpeg"];

var ii = 0;
var ll = OtBTImages.length - 1;

(function loop() {
  if (ii > ll) {
    ii = 0;
  }
  getOtBTTag.src = "work/OtBT/" + OtBTImages[ii];
  loopTimer = setTimeout(loop, 3000);
  ++ii;
})();




// var getDiv = document.querySelector("#workThree")

// getDiv.onclick = function changeThis() {
var getAoVTag = document.querySelector('#workThree');
var AoVImages = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg"];

var iii = 0;
var lll = AoVImages.length - 1;

(function loop() {
  if (iii > lll) {
    iii = 0;
  }
  getAoVTag.src = "work/AoV/" + AoVImages[iii];
  loopTimer = setTimeout(loop, 3000);

  ++iii;
})();


var getIBTag = document.querySelector('#workEight');
var IBImages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];

var iiii = 0;
var llll = IBImages.length - 1;

(function loop() {
  if (iiii > llll) {
    iiii = 0;
  }
  getIBTag.src = "work/IB/" + IBImages[iiii];
  loopTimer = setTimeout(loop, 3000);
  ++iiii;
})();

}
