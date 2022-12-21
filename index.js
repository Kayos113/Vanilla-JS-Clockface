let clock = document.getElementById("time");/* $("#time"); */
let control = document.getElementById("control");/* $("#control"); */
let timeBG = document.getElementById("innerclock");
let onOff = false;

control.onclick = function() {
  control.classList.toggle("red");
  clock.classList.toggle("onOff");
  timeBG.classList.toggle("onOff");
  // setTimeout( () => clock.classList.toggle("onOff"), 500);
};

control.addEventListener("mousedown", buttonUpDown);
control.addEventListener("mouseup", buttonUpDown);
function buttonUpDown() {
  control.classList.toggle("pressed");
}

setInterval( () => setTime(), 200);
function setTime() {
  let currTime = Date.now();
  let date = new Date(currTime);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let string = (hours===12?12:(hours%12<10?"0"+hours%12:hours%12)) + ":" +(minutes<10?"0"+minutes:minutes) + ":" + (seconds<10?"0"+seconds:seconds) + (hours>=12?" PM":" AM");
  clock.innerHTML = string;
}
