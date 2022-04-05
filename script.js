'use strict'

let DefaultHTML;
function DefaultSave() {
  DefaultHTML = document.body.innerHTML;
}
function HTMLRestore() {
  document.body.innerHTML = DefaultHTML;
}

const images = ["image/1.jpeg", "image/2.jpeg", "image/3.jpeg", "image/4.jpeg"];
let point = 0;
function randomIndication(){
  document.getElementById("button0").style.display='none';
  const imageArea = document.getElementById("imageArea");
  
  const imageNo = Math.floor(Math.random() * images.length);
  imageArea.src = images[imageNo];
    const btnClick = (element) =>{
    let image = images[imageNo][6]
    let pushId = element.target.id[6];
    if (image === pushId){
      point +=1;
      console.log("image:" + image);
      console.log("pushID:" + pushId);
    } else {
      console.log("elseimage:" + image);
      console.log("elsepushID:" + pushId);
        // if (point < 15){
        //   let comment = "ああああ";
        // } else if (point < 25){
        //   let comment = "いいいい";
        // } else if (point < 35){
        //   let comment = "うううう";
        // } else {
        //   let comment = "ええええ";
        // }
      // const commentText = document.getElementsByClassName("side")[0];
      // commentText.innerText = comment;
      // HTMLRestore();
      // point = 0;
    }
  }
  button1.addEventListener('click', btnClick, false)
  button2.addEventListener('click', btnClick, false)
  button3.addEventListener('click', btnClick, false)
  button4.addEventListener('click', btnClick, false)
}


function reSize() {
  let elm = document.getElementById("imageArea");
  let objWidth = elm.width;
  let objHeight = elm.height;

  elm.width = objWidth - 10;
  elm.height = objHeight - 10;
}

// window.onload = function () {
//   let elmbtn = document.getElementById('button1');
//   elmbtn.onclick = function () {
//     reSize();
//   };
// }
