var columns = document.querySelectorAll(".col");

 for (var i =0;  i<columns.length;  i++) {
   columns[i].addEventListener("click",playNote);
   columns[i].addEventListener("keypress",playNote);
 }

function playNote(key){
  var audioNote;
  console.log(this.innerHTML.trim());
  console.log(event.key);
  switch (this.innerHTML.trim()) {
    case 'A' : audioNote = '1';
    break;
    case 'S' : audioNote = '2';
    break;
    case 'D' : audioNote = '3';
    break;
    case 'F' : audioNote = '4';
    break;
    case 'G' : audioNote = '5';
    break;
    case 'H' : audioNote = '6';
    break;
    case 'J' : audioNote = '7';
    break;

  }
  var audio = new Audio('sounds/note'+audioNote+'.wav');
  audio.play();
}
