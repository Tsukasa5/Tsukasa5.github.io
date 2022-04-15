'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor)

function changeColor() {
  let makingColorCode = '0123456789ABCDEF';
  let finalCode = '#';
    for (let counter = 0; counter < 6; counter++) {
      finalCode =finalCode+ makingColorCode[Math.floor(Math.random() * 16)];
    } 
  document.getElementById('color-button').style.backgroundColor = finalCode;
  return finalCode;
}

