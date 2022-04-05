'use strict'

const images = ["image/1.jpeg", "image/2.jpeg", "image/3.jpeg", "image/4.jpeg"];
let point = 0;
function randomIndication(){
  document.getElementById("button0").style.display="none";
  const imageArea = document.getElementById("imageArea");
  
  const imageNo = Math.floor(Math.random() * images.length);
  imageArea.src = images[imageNo];
  let image = images[imageNo][6]
  console.log(image)
  const bunClick = (element) =>{
    let pushId = element.target.id[6];
    if (image === pushId){
      point +=1;
      console.log("image:" + image);
      console.log("pushID:" + pushId);
    } else {
      console.log("elseimage:" + image);
      console.log("elsepushID:" + pushId);
    }
  }
  button1.addEventListener('click', bunClick, false)//valueの値を使う
  button2.addEventListener('click', bunClick, false)
  button3.addEventListener('click', bunClick, false)
  button4.addEventListener('click', bunClick, false)

}

function getImageArea(){
  const imageArea = document.getElementById("imageArea");

}



function reSize() {
  let elm = document.getElementById("imageArea");
  let objWidth = elm.width;
  let objHeight = elm.height;

  elm.width = objWidth - 10;
  elm.height = objHeight - 10;
}

// window.onload = function () {
//   let elmbtn = document.getElementById('button1');//正解を押したらに変更
//   elmbtn.onclick = function () {
//     reSize();
//   };
// }
