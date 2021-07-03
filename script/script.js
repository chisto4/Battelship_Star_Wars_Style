// tets button shower/hidden

const buttonTest = document.getElementById("changeWrapperDark");
const dark = document.getElementById("r2d2");
const choice = document.getElementById("shipping");
const shipWrapperOne = document.getElementsByClassName("ship_wrapper_one");
const testShoutButton = document.getElementById("test_shout");
const clearButton = document.getElementById("clear_button");


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

// RED BORDER FUNCTION FUNCION

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

// CLASS LIST CONSTANTS

const allOneShipArr = document.querySelectorAll('div.one_ship');
const allTwoShipArr = document.querySelectorAll('div.two_ship');
const allThreeShipArr = document.querySelectorAll('div.three_ship');
const foreShipArr = document.querySelectorAll('div.fore_ship');

//SETKA POLYA DJEDAI & R2D2

const allShipWrapper = document.querySelectorAll('div.ship_wrapper');

const allShipWrapperr2d2 = document.querySelectorAll('div.ship_wrapper_r2d2');



// FILTER ON DJEDAI GRID!!!

const ArrayGridDj = Array.from(allShipWrapper);

let mapAllShipWrapper = [];
ArrayGridDj.forEach((node, index) => {
  if(node.classList.contains('ship_wrapper')) {
    mapAllShipWrapper.push(index);
  }
})

//FILTER ZERO
let mapArrZero = [];
ArrayGridDj.forEach((node, index) => {
  if(node.classList.contains('zero')) {
    mapArrZero.push(index);
  }
})

//FILTER NOT WAR
let mapArrNotWar = [];
ArrayGridDj.forEach((node, index) => {
  if(node.classList.contains('notWar')) {
    mapArrNotWar.push(index);
  }
})

//FILTER SHIPS
let mapArrShipsDj = [];
ArrayGridDj.forEach((node, index) => {
  if(node.classList.contains('ship_wrapper_oneShip')) {
    mapArrShipsDj.push(index);
  }
})

//FILTER ONE SHOUT
let mapArrShotOnGridDj = [];
ArrayGridDj.forEach((node, index) => {
  if(node.classList.contains('r2_One_shot')) {
    mapArrShotOnGridDj.push(index);
  }
})

//FILTER CLEAR GRID
let mapArrClearDj = [];
function clearMapGridArrayDj (){
  ArrayGridDj.forEach((node, index) => {
    if(!node.classList.contains('ship_wrapper_oneShip') && !node.classList.contains('zero') 
        && !node.classList.contains('notWar') && !node.classList.contains('r2_One_shot')) {
          mapArrClearDj.push(index);
    }
  })
  }

// FILTER ON R2D2 GRID!!!

const ArrayGridr2d2 = Array.from(allShipWrapperr2d2);

//FILTER ZERO
let mapArrZeroR2 = [];
ArrayGridr2d2.forEach((node, index) => {
  if(node.classList.contains('zero')) {
    mapArrZeroR2.push(index);
  }
})

//FILTER NOT WAR
let mapArrNotWarR2 = [];
ArrayGridr2d2.forEach((node, index) => {
  if(node.classList.contains('notWar')) {
    mapArrNotWarR2.push(index);
  }
})

//FILTER SHIPS
let mapArrShipsR2 = [];
ArrayGridr2d2.forEach((node, index) => {
  if(node.classList.contains('ship_wrapper_oneShip_r2d2')) {
    mapArrShipsR2.push(index);
  }
})

//FILTER ONE SHOUT
let mapArrShotOnGridR2 = [];
ArrayGridr2d2.forEach((node, index) => {
  if(node.classList.contains('dj_One_shot')) {
    mapArrShotOnGridR2.push(index);
  }
})


//FILTER CLEAR GRID
let mapArrClearR2 = [];
ArrayGridr2d2.forEach((node, index) => {
  if(!node.classList.contains('ship_wrapper_oneShip_r2d2') && !node.classList.contains('zero') 
      && !node.classList.contains('notWar') && !node.classList.contains('dj_One_shot')) {
        mapArrClearR2.push(index);
  }
})


//LIGH VERSION DOSENT WORK
// const mapGridDjedai = Array.from(allShipWrapper);
// const mapArrZero = mapGridDjedai.filter((node) => node.classList.contains('zero'))
//                                 .map((node, index) => index);


//TEST FUNCTION WORK WITH ARRAY MAP
function testZeros(zeroArray) {
  zeroArray.forEach((value) => {
    allShipWrapper[value].classList.add("r2_One_shot");
  })
}
testZeros(mapArrZero);

//FINCTION ON PAGE!!!!

//CLEAR FUNCTION
function clearFunction (clear){
  clear.forEach((value) => {
    allShipWrapper[value].className = 'ship_wrapper';
    allShipWrapperr2d2[value].className = 'ship_wrapper_r2d2';
  })
}
clearButton.addEventListener("click", _ => clearFunction(mapAllShipWrapper));

//RANDOM SHOT function

let randomNumberShout = 0;
let randomShoutArr = [];
//random
function randomShoutNumber(){
  return Math.floor(Math.random() * 101);
}

//RANDOM CLEAR function

//FILTER CLEAR GRID FOR SHOUT
let mapArrClearForShout = [];
function clearMapGridForShout (){
  mapArrClearForShout = [];
    ArrayGridDj.forEach((node, index) => {
    if(!node.classList.contains('zero') && !node.classList.contains('notWar') && !node.classList.contains('r2_One_shot')) {
          mapArrClearForShout.push(index);
    }
  })
  }
  //test
  clearMapGridForShout();

let mapArray = [];
function randomClearShout (){
  return mapArray = mapArrClearForShout[Math.floor(Math.random() * mapArrClearForShout.length)];
}

//SHOUT
function shout (){
  randomClearShout();
  clearMapGridForShout();
  randomNumberShout = randomClearShout();
  if(allShipWrapper[randomNumberShout].classList.contains('ship_wrapper_oneShip')){
    allShipWrapper[randomNumberShout].className = 'r2_One_shot';
    // allShipWrapper[randomNumberShout].classList.add("r2_One_shot");
  } else if(!allShipWrapper[randomNumberShout].classList.contains('ship_wrapper_oneShip'))
  allShipWrapper[randomNumberShout].classList.add("zero");
  // mapArrClearForShout.push(randomClearShout());
  console.log(randomClearShout());
  console.log(mapArrClearForShout);

  }

testShoutButton.addEventListener("click",_=>shout(mapAllShipWrapper));

//ROTATE FUNCTION:

function rotateButle (){
      allTwoShipArr[0].classList.toggle("element_90deg");
}
    allTwoShipArr[0].addEventListener("dblclick",_=>rotateButle())


//TWO SHIP ON BOARD FUNCTION
function twoShipOnGrid () {
  if(allTwoShipArr[0].classList === "element_90deg" ||
    allTwoShipArr[0].style.border === "2px solid red"){

    }
}






// window.asd = allShipWrapper
let newAllShipWrapper;

// newAllShipWrapper = newAlOnB.filter((item, index) => {
//   return item.style.border === "";
// })
// console.log('Red border ship number',newAllShipWrapper);

  function newShip({target:gridElement}) {
  if(allOneShipArr[0].style.border === "2px solid red" ||
      allOneShipArr[1].style.border === "2px solid red" ||
      allOneShipArr[2].style.border === "2px solid red" ||
      allOneShipArr[3].style.border === "2px solid red" ||
      allTwoShipArr[0].style.border === "2px solid red" ||
      allTwoShipArr[1].style.border === "2px solid red" ||
      allTwoShipArr[2].style.border === "2px solid red" ||
      allThreeShipArr[0].style.border === "2px solid red" ||
      allThreeShipArr[1].style.border === "2px solid red" ||
      foreShipArr[0].style.border === "2px solid red" )
      
      {
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
    } else if(allTwoShipArr[0].style.border === "2px solid red"){
      allTwoShipArr[0].style.border = "none";
      allTwoShipArr[0].remove();  
    } else if(allTwoShipArr[1].style.border === "2px solid red"){
      allTwoShipArr[1].style.border = "none";
      allTwoShipArr[1].remove();  
    } else if(allTwoShipArr[2].style.border === "2px solid red"){
      allTwoShipArr[2].style.border = "none";
      allTwoShipArr[2].remove();
    } else if(allThreeShipArr[0].style.border === "2px solid red"){
      allThreeShipArr[0].style.border = "none";
      allThreeShipArr[0].remove();
    } else if(allThreeShipArr[1].style.border === "2px solid red"){
      allThreeShipArr[1].style.border = "none";
      allThreeShipArr[1].remove();
    } else if(foreShipArr[0].style.border === "2px solid red"){
      foreShipArr[0].style.border = "none";
      foreShipArr[0].remove();
    
  } else if(gridElement.classList === "ship_wrapper_oneShip") {
    gridElement.classList.remove("ship_wrapper_oneShip");
    gridElement.classList.add("ship_wrapper");

  }}
  console.log('clik', newShip);
}}



allShipWrapper.forEach((el)=> {
  el.addEventListener('click', newShip)
  // console.log(el);
})

let Arr1 = [];

const randomButton = document.getElementById('random');
const playButton = document.getElementById('play');

function rnd1() {
  //ONE BOARD
  allShipWrapper[0].classList.add("ship_wrapper_oneShip");
  allShipWrapper[24].classList.add("ship_wrapper_oneShip");
  allShipWrapper[89].classList.add("ship_wrapper_oneShip");
  allShipWrapper[16].classList.add("ship_wrapper_oneShip");
//TWO BOARD
  allShipWrapper[54].classList.add("ship_wrapper_oneShip");
  allShipWrapper[64].classList.add("ship_wrapper_oneShip");

  allShipWrapper[48].classList.add("ship_wrapper_oneShip");
  allShipWrapper[49].classList.add("ship_wrapper_oneShip");

  allShipWrapper[9].classList.add("ship_wrapper_oneShip");
  allShipWrapper[19].classList.add("ship_wrapper_oneShip");
  //THREE BOARD
  allShipWrapper[91].classList.add("ship_wrapper_oneShip");
  allShipWrapper[92].classList.add("ship_wrapper_oneShip");
  allShipWrapper[93].classList.add("ship_wrapper_oneShip");

  allShipWrapper[20].classList.add("ship_wrapper_oneShip");
  allShipWrapper[30].classList.add("ship_wrapper_oneShip");
  allShipWrapper[40].classList.add("ship_wrapper_oneShip");
  //FOUR BOARD
  allShipWrapper[66].classList.add("ship_wrapper_oneShip");
  allShipWrapper[67].classList.add("ship_wrapper_oneShip");
  allShipWrapper[68].classList.add("ship_wrapper_oneShip");
  allShipWrapper[69].classList.add("ship_wrapper_oneShip");

}

function rnd2() {
  //ONE BOARD
  allShipWrapper[0].classList.add("ship_wrapper_oneShip");
  allShipWrapper[9].classList.add("ship_wrapper_oneShip");
  allShipWrapper[90].classList.add("ship_wrapper_oneShip");
  allShipWrapper[99].classList.add("ship_wrapper_oneShip");
//TWO BOARD
  allShipWrapper[23].classList.add("ship_wrapper_oneShip");
  allShipWrapper[33].classList.add("ship_wrapper_oneShip");

  allShipWrapper[48].classList.add("ship_wrapper_oneShip");
  allShipWrapper[49].classList.add("ship_wrapper_oneShip");

  allShipWrapper[7].classList.add("ship_wrapper_oneShip");
  allShipWrapper[17].classList.add("ship_wrapper_oneShip");
  //THREE BOARD
  allShipWrapper[74].classList.add("ship_wrapper_oneShip");
  allShipWrapper[84].classList.add("ship_wrapper_oneShip");
  allShipWrapper[94].classList.add("ship_wrapper_oneShip");

  allShipWrapper[20].classList.add("ship_wrapper_oneShip");
  allShipWrapper[30].classList.add("ship_wrapper_oneShip");
  allShipWrapper[40].classList.add("ship_wrapper_oneShip");
  //FOUR BOARD
  allShipWrapper[66].classList.add("ship_wrapper_oneShip");
  allShipWrapper[67].classList.add("ship_wrapper_oneShip");
  allShipWrapper[68].classList.add("ship_wrapper_oneShip");
  allShipWrapper[69].classList.add("ship_wrapper_oneShip");

}

function rnd3() {
  //ONE BOARD
  allShipWrapper[11].classList.add("ship_wrapper_oneShip");
  allShipWrapper[16].classList.add("ship_wrapper_oneShip");
  allShipWrapper[69].classList.add("ship_wrapper_oneShip");
  allShipWrapper[99].classList.add("ship_wrapper_oneShip");
//TWO BOARD
  allShipWrapper[28].classList.add("ship_wrapper_oneShip");
  allShipWrapper[29].classList.add("ship_wrapper_oneShip");

  allShipWrapper[66].classList.add("ship_wrapper_oneShip");
  allShipWrapper[67].classList.add("ship_wrapper_oneShip");

  allShipWrapper[96].classList.add("ship_wrapper_oneShip");
  allShipWrapper[98].classList.add("ship_wrapper_oneShip");
  //THREE BOARD
  allShipWrapper[31].classList.add("ship_wrapper_oneShip");
  allShipWrapper[41].classList.add("ship_wrapper_oneShip");
  allShipWrapper[51].classList.add("ship_wrapper_oneShip");

  allShipWrapper[72].classList.add("ship_wrapper_oneShip");
  allShipWrapper[73].classList.add("ship_wrapper_oneShip");
  allShipWrapper[74].classList.add("ship_wrapper_oneShip");
  //FOUR BOARD
  allShipWrapper[24].classList.add("ship_wrapper_oneShip");
  allShipWrapper[34].classList.add("ship_wrapper_oneShip");
  allShipWrapper[44].classList.add("ship_wrapper_oneShip");
  allShipWrapper[54].classList.add("ship_wrapper_oneShip");

}

function rnd4() {
  //ONE BOARD
  allShipWrapperr2d2[11].classList.add("ship_wrapper_oneShip_r2d2", "oneBoardR2");
  allShipWrapperr2d2[16].classList.add("ship_wrapper_oneShip_r2d2", "oneBoardR2");
  allShipWrapperr2d2[69].classList.add("ship_wrapper_oneShip_r2d2", "oneBoardR2");
  allShipWrapperr2d2[96].classList.add("ship_wrapper_oneShip_r2d2", "oneBoardR2");
//TWO BOARD
allShipWrapperr2d2[28].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2");
allShipWrapperr2d2[29].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2");

allShipWrapperr2d2[66].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2");
allShipWrapperr2d2[67].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2");

allShipWrapperr2d2[99].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2");
allShipWrapperr2d2[98].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2");
  //THREE BOARD
  allShipWrapperr2d2[31].classList.add("ship_wrapper_oneShip_r2d2");
  allShipWrapperr2d2[41].classList.add("ship_wrapper_oneShip_r2d2");
  allShipWrapperr2d2[51].classList.add("ship_wrapper_oneShip_r2d2");

  allShipWrapperr2d2[72].classList.add("ship_wrapper_oneShip_r2d2");
  allShipWrapperr2d2[73].classList.add("ship_wrapper_oneShip_r2d2");
  allShipWrapperr2d2[74].classList.add("ship_wrapper_oneShip_r2d2");
  //FOUR BOARD
  allShipWrapperr2d2[24].classList.add("ship_wrapper_oneShip_r2d2");
  allShipWrapperr2d2[34].classList.add("ship_wrapper_oneShip_r2d2");
  allShipWrapperr2d2[44].classList.add("ship_wrapper_oneShip_r2d2");
  allShipWrapperr2d2[54].classList.add("ship_wrapper_oneShip_r2d2");

}

//RANDOM NUMBER FUNCTION
let randomNumberScale = 0;
function randomNumber(max){
  return Math.floor(Math.random() * max);
}
randomNumberScale = randomNumber(3);

//RANDOM SHIP GRID
function randomOne (){
  clearFunction(mapAllShipWrapper);
  dark.style.display = "flex";
  choice.style.display = "none";
  clearMapGridForShout();
  if(randomNumberScale === 0){
    rnd1();
    rnd4();
  }
  else if(randomNumberScale === 1){
    rnd2();
    rnd4();
  }
    else{
      rnd3();
      rnd4();
  }
}

randomButton.addEventListener("click", _ => randomOne());

//LOGIC SHUTTER

//map shouter oneBoardR2
let mapShouterOneBoardR2 = [];
function mapOneBoardSHoutR2(){
  mapShouterOneBoardR2 = [];
ArrayGridr2d2.forEach((node, index) => {
  if(node.classList.contains('dj_One_shot')
    && node.classList.contains('ship_wrapper_oneShip_r2d2')
    && node.classList.contains('oneBoardR2')) {
    mapShouterOneBoardR2.push(index);
    
  }
})
}


function shout (){
  randomClearShout();
  clearMapGridForShout();
  randomNumberShout = randomClearShout();
  if(allShipWrapper[randomNumberShout].classList.contains('ship_wrapper_oneShip')){
    allShipWrapper[randomNumberShout].className = 'r2_One_shot';
    // allShipWrapper[randomNumberShout].classList.add("r2_One_shot");
  } else if(!allShipWrapper[randomNumberShout].classList.contains('ship_wrapper_oneShip'))
  allShipWrapper[randomNumberShout].classList.add("zero");


function shutter ({target:gridElement}){
  if(  choice.style.display == "none"){
    if(gridElement.classList.contains('ship_wrapper_oneShip_r2d2') 
      ){
        gridElement.classList.add("dj_One_shot");
    } else if(!gridElement.classList.contains('ship_wrapper_oneShip_r2d2'))
    {
      gridElement.classList.add("zero")
    }
  }
  mapOneBoardSHoutR2();
  console.log('map one board broken', mapShouterOneBoardR2)
}

allShipWrapperr2d2.forEach((el)=> {
  el.addEventListener('click', shutter)
  // console.log(el);
})

// function shout (){
//   randomClearShout();
//   clearMapGridForShout();
//   randomNumberShout = randomClearShout();
//   if(allShipWrapper[randomNumberShout].classList.contains('ship_wrapper_oneShip')){
//     allShipWrapper[randomNumberShout].className = 'r2_One_shot';
//     // allShipWrapper[randomNumberShout].classList.add("r2_One_shot");
//   } else if(!allShipWrapper[randomNumberShout].classList.contains('ship_wrapper_oneShip'))
//   allShipWrapper[randomNumberShout].classList.add("zero");
//   // mapArrClearForShout.push(randomClearShout());
//   console.log(randomClearShout());
//   console.log(mapArrClearForShout);

//   }
