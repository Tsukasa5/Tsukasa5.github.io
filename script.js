'use strict'

const images = ["image/1.jpeg", "image/2.jpeg", "image/3.jpeg", "image/4.jpeg"];
let point = 0;
function randomIndication(){
  document.getElementById("button0").style.display="none";
  const imageArea = document.getElementById("imageArea");
  
  const imageNo = Math.floor(Math.random() * images.length);
  imageArea.src = images[imageNo];
  // console.log(image)
  // let i = 1;
  // let image = images[imageNo][6]
  // // function btnClick(element){
  // const btnClick = (element) =>{
  //   let pushId = element.target.id[6];
  //   if (image === pushId){
  //     point +=1;
  //     i += 1;
  //     console.log("i:" + i)
  //     console.log("image:" + image);
  //     console.log("pushID:" + pushId);
  //   } else {
  //     console.log("elseimage:" + image);
  //     console.log("elsepushID:" + pushId);
  //   }
  // }
  // button1.addEventListener('click', btnClick, false)//valueの値を使う
  // button2.addEventListener('click', btnClick, false)
  // button3.addEventListener('click', btnClick, false)
  // button4.addEventListener('click', btnClick, false)
}

// function btnClick(e){
  const btnClick = (element) =>{
    const imageArea = document.getElementById("imageArea");
    let image = imageArea.src[72]
    let pushId = element.target.id[6];
    console.log(pushId)
    if (image === pushId){
      point +=1;
      console.log("image:" + image);
      console.log("pushID:" + pushId);
      console.log("ポイント" + point)
    } else {
      console.log("elseimage:" + image);
      console.log("elsepushID:" + pushId);
    }
    document.getElementById("button1").addEventListener('click', btnClick, false)
    document.getElementById("button2").addEventListener('click', btnClick, false)
    document.getElementById("button3").addEventListener('click', btnClick, false)
    document.getElementById("button4").addEventListener('click', btnClick, false)
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

