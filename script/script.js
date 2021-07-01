// tets button shower/hidden

const buttonTest = document.getElementById("changeWrapperDark");
const dark = document.getElementById("r2d2");
const choice = document.getElementById("shipping");
const shipWrapperOne = document.getElementsByClassName("ship_wrapper_one");


function buttonTestonClick() {
  if (dark.style.display === "flex" && choice.style.display === "none") {
    dark.style.display = "none";
    choice.style.display = "flex";
  }
  else {
    dark.style.display = "flex";
    choice.style.display = "none";
  }
}
buttonTest.addEventListener("click", _ => buttonTestonClick());

//CHOICE SHIP FUNCTION 

const changeShip = document.getElementById("one_ship_1");
const changeShip2 = document.getElementById("one_ship_2");
const changeShip3 = document.getElementById("one_ship_3");
const changeShip4 = document.getElementById("one_ship_4");

const changeTwoShip1 = document.getElementById("two_ship_1");
const changeTwoShip2 = document.getElementById("two_ship_2");
const changeTwoShip3 = document.getElementById("two_ship_3");

const changeThreeShip1 = document.getElementById("three_ship_1");
const changeThreeShip2 = document.getElementById("three_ship_2");

const changeForeShip = document.getElementById("fore_ship");


function RedShipBorder(elem) {
  if (elem.style.border === "none") {
    elem.style.border = "2px solid red";
  }
  else {
    elem.style.border = "none";
  }
}
changeShip.addEventListener("click", _ => RedShipBorder(changeShip));
changeShip2.addEventListener("click", _ => RedShipBorder(changeShip2));
changeShip3.addEventListener("click", _ => RedShipBorder(changeShip3));
changeShip4.addEventListener("click", _ => RedShipBorder(changeShip4));

changeTwoShip1.addEventListener("click", _ => RedShipBorder(changeTwoShip1));
changeTwoShip2.addEventListener("click", _ => RedShipBorder(changeTwoShip2));
changeTwoShip3.addEventListener("click", _ => RedShipBorder(changeTwoShip3));

changeThreeShip1.addEventListener("click", _ => RedShipBorder(changeThreeShip1));
changeThreeShip2.addEventListener("click", _ => RedShipBorder(changeThreeShip2));

changeForeShip.addEventListener("click", _ => RedShipBorder(changeForeShip));



//NEW SHIP

// const allShipWrapper = document.querySelectorAll('.ship_wrapper');

// function clikListen (event, allShipWrapper) {
//   console.log('Ti najal na kletku');
//   if(changeShip.style.border === "2px solid red"){
//   if(event.which == 1){
//     allShipWrapper.classList.add("ship_wrapper_oneShip");
//     changeShip.style.display = "none";
//   } 
//   else if(event.which == 3){
//     allShipWrapper.classList.remove("ship_wrapper_oneShip");
//   }}
// }
// allShipWrapper.forEach((el)=>{
//   el.addEventListener("mousemove", (e)=>{clikListen(e, el);});
//   el.addEventListener("click", (e)=>{
//     clikListen(e, el);
//   });
// });
// const allOneShipArr = document.querySelectorAll('div.one_ship');
// // const allOneShipArrN = allOneShipArr.forEach();
// console.log(allOneShipArr);
// const allShipWrapper = document.querySelectorAll('div.ship_wrapper');
// const countOneShip = 1;
// // window.asd = allShipWrapper

// function newShip({target:gridElement}) {
//   // console.log('allShipWrapper', allShipWrapper);
//   if(allOneShipArr[0].style.border === "2px solid red" ||
//       allOneShipArr[1].style.border === "2px solid red" ||
//       allOneShipArr[2].style.border === "2px solid red" ||
//       allOneShipArr[3].style.border === "2px solid red") {
//   if (gridElement.classList !== "ship_wrapper_oneShip") {
//     gridElement.classList.add("ship_wrapper_oneShip");
//     if(allOneShipArr[0].style.border === "2px solid red"){
//       allOneShipArr[0].style.border = "none";
//       allOneShipArr[0].remove();  
//     }else if(allOneShipArr[1].style.border === "2px solid red"){
//       allOneShipArr[1].style.border = "none";
//       allOneShipArr[1].remove();  
//     }else if(allOneShipArr[2].style.border === "2px solid red"){
//       allOneShipArr[2].style.border = "none";
//       allOneShipArr[2].remove();  
//     }else if(allOneShipArr[3].style.border === "2px solid red"){
//       allOneShipArr[3].style.border = "none";
//       allOneShipArr[3].remove();  
//     }
    
//   } else {
//     gridElement.classList.remove("ship_wrapper_oneShip");
//   }}
//   console.log('clik', newShip);
// }


// allShipWrapper.forEach((el)=> {
//   el.addEventListener('click', newShip)
//   // console.log(el);
// })

// let Arr1 = [];
// const ArrDjedai = push.Arr1(allShipWrapper.forEach());
// allShipWrapper.addEventListener("click", _ => newShip(allShipWrapper));

// function clikListen (event, allShipWrapper) {
//   console.log('kletka');
//   if(changeShip.style.border === "2px solid red"){
//   if(event.which == 1){
//     allShipWrapper.classList.add("ship_wrapper_oneShip");
//     changeShip.style.display = "none";
//   } 
//   else if(event.which == 3){
//     allShipWrapper.classList.remove("ship_wrapper_oneShip");
//   }}
// }
// allShipWrapper.forEach((el)=>{
//   el.addEventListener("mousemove", (e)=>{clikListen(e, el);});
//   el.addEventListener("click", (e)=>{
//     clikListen(e, el);
//   });
// });


const allOneShipArr = document.querySelectorAll('div.one_ship');
// const allOneShipArrN = allOneShipArr.forEach();
console.log(allOneShipArr);
const allShipWrapper = document.querySelectorAll('div.ship_wrapper');
const newAllShipWrapper = allOneShipArr.filter((item, index) => {
  return item.style.border === "2px solid red";
})
const countOneShip = 1;
// window.asd = allShipWrapper

function newShip({target:gridElement}) {
  // console.log('allShipWrapper', allShipWrapper);
  if(allOneShipArr[0].style.border === "2px solid red" ||
      allOneShipArr[1].style.border === "2px solid red" ||
      allOneShipArr[2].style.border === "2px solid red" ||
      allOneShipArr[3].style.border === "2px solid red") {
  if (gridElement.classList !== "ship_wrapper_oneShip") {
    gridElement.classList.add("ship_wrapper_oneShip");
    if(allOneShipArr[0].style.border === "2px solid red"){
      allOneShipArr[0].style.border = "none";
      allOneShipArr[0].remove();  
    }else if(allOneShipArr[1].style.border === "2px solid red"){
      allOneShipArr[1].style.border = "none";
      allOneShipArr[1].remove();  
    }else if(allOneShipArr[2].style.border === "2px solid red"){
      allOneShipArr[2].style.border = "none";
      allOneShipArr[2].remove();  
    }else if(allOneShipArr[3].style.border === "2px solid red"){
      allOneShipArr[3].style.border = "none";
      allOneShipArr[3].remove();  
    }
    
  } else {
    gridElement.classList.remove("ship_wrapper_oneShip");
  }}
  console.log('clik', newShip);
}


allShipWrapper.forEach((el)=> {
  el.addEventListener('click', newShip)
  // console.log(el);
})

let Arr1 = [];
