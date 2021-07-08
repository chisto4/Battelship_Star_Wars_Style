// tets button shower/hidden

const buttonTest = document.getElementById("changeWrapperDark");
const dark = document.getElementById("r2d2");
const choice = document.getElementById("shipping");
const shipWrapperOne = document.getElementsByClassName("ship_wrapper_one");
const settingImage = document.getElementById("settingHref");
const reloadImage = document.getElementById("reloadHref");
const testModul = document.getElementById("settingWrapper");
const testShoutButton = document.getElementById("test_shout");
const clearButton = document.getElementById("clear_button");

const faqButton = document.getElementById("helpHref");
const faqWrapper = document.getElementById("faqWrapper");
const closeButton = document.getElementById("closeButtonModal");
//LOSE WIN
const loseWrapper = document.getElementById("loseWrapper");
const closeButtonLose = document.getElementById("closeButtonLose");

const winnerWrapper = document.getElementById("winnerWrapper");
const closeButtonWinner = document.getElementById("closeButtonWinner");

//HELP FUNCTION
function helpwrapper() {
  if (faqWrapper.style.display === "block") {
    faqWrapper.style.display = "none";
  }
  else {
    faqWrapper.style.display = "block";
  }
}
faqButton.addEventListener("click", _ => helpwrapper());
closeButton.addEventListener("click", _ => helpwrapper());

//LOSE FUNCTION
function losewrapper() {
  if (loseWrapper.style.display === "block") {
    loseWrapper.style.display = "none";
  }
  else {
    loseWrapper.style.display = "block";
  }
}
closeButtonLose.addEventListener("click", _ => losewrapper());
//LOSE FUNCTION
function winerwrapper() {
  if (winnerWrapper.style.display === "block") {
    winnerWrapper.style.display = "none";
  }
  else {
    winnerWrapper.style.display = "block";
  }
}
closeButtonWinner.addEventListener("click", _ => winerwrapper());


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

function settingVision() {
    testModul.classList.toggle("vision");
}
 
settingImage.addEventListener("click", _ => settingVision());

function reloadPageimage(){
  window.location.reload();
}
reloadImage.addEventListener("click", _ => reloadPageimage());

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

// FUNCTION SCALE SHIPS ON DJEDAI BOARD
let mapArrShipsDj = [];
function scaleShipsDj(){
  ArrayGridDj.forEach((node, index) => {
    if(node.classList.contains('ship_wrapper_oneShip')) {
      mapArrShipsDj.push(index);
    }
  })
}


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

//FUNCTION END GAME
 const endGameElement = document.getElementById('winOrlose')

//Function YOU WIN!
let mapArrShotOnGridR2 = [];
function youWin(){
  mapArrShotOnGridR2 = [];
ArrayGridr2d2.forEach((node, index) => {
  if(node.classList.contains('dj_One_shot')) {
    mapArrShotOnGridR2.push(index);
    if(mapArrShotOnGridR2.length === 20){
      winnerwrapper();
      dark.style.display = "none";
      endGameElement.style.display = "flex";

    }
  }
})
}

//Function YOU LOSER!
let mapArrShotOnGridDjForLose = [];
function youLose(){
  mapArrShotOnGridDjForLose = [];
ArrayGridDj.forEach((node, index) => {
  if(node.classList.contains('r2_One_shot')) {
    mapArrShotOnGridDjForLose.push(index);
    if(mapArrShotOnGridDjForLose.length === 20){
      losewrapper();
      dark.style.display = "none";
      endGameElement.style.display = "flex";
    }
  }
})
}

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
    allShipWrapper[randomNumberShout].classList.add("r2_One_shot");
    shout(mapAllShipWrapper);
    // allShipWrapper[randomNumberShout].classList.add("r2_One_shot");
  } else if(!allShipWrapper[randomNumberShout].classList.contains('ship_wrapper_oneShip'))
  allShipWrapper[randomNumberShout].classList.add("zero");
  // mapArrClearForShout.push(randomClearShout());

  }

testShoutButton.addEventListener("click",_=>shout(mapAllShipWrapper));

//ROTATE FUNCTION:

//FOR TWO BOARD
function rotateButle1 (){
      allTwoShipArr[0].classList.toggle("element_90deg");
}
    allTwoShipArr[0].addEventListener("dblclick",_=>rotateButle1());

function rotateButle2 (){
      allTwoShipArr[1].classList.toggle("element_90deg");
}
    allTwoShipArr[1].addEventListener("dblclick",_=>rotateButle2());

  function rotateButle3 (){
      allTwoShipArr[2].classList.toggle("element_90deg");
}
    allTwoShipArr[2].addEventListener("dblclick",_=>rotateButle3());

//FOR THREE BOARD
function rotateButle4 (){
  allThreeShipArr[0].classList.toggle("element_90deg");
}
allThreeShipArr[0].addEventListener("dblclick",_=>rotateButle4());

function rotateButle5 (){
  allThreeShipArr[1].classList.toggle("element_90deg");
}
allThreeShipArr[1].addEventListener("dblclick",_=>rotateButle5());

//FOR THREE BOARD
const foreShipOnChoiceBoard = document.getElementById("fore_ship");
function rotateButle6 (){
  foreShipOnChoiceBoard.classList.toggle("element_90deg");
}
foreShipOnChoiceBoard.addEventListener("dblclick",_=>rotateButle6());

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

        //ONE
  if (gridElement.classList !== "ship_wrapper_oneShip") {
    gridElement.classList.add("ship_wrapper_oneShip");
    if(allOneShipArr[0].style.border === "2px solid red"){
      gridElement.classList.add("ship_wrapper_oneShip",  "oneBoardDj",  "controlPoint");
      MapBoardForOneBoardDj(oneBoardShipOne);
      if( gridElement.classList.contains("ship_wrapper_oneShip",  "oneBoardDj",  "controlPoint")
      ) {
      allOneShipArr[0].style.border = "none";
      allOneShipArr[0].remove();  
      }
    }else if(allOneShipArr[1].style.border === "2px solid red"){
      gridElement.classList.add("ship_wrapper_oneShip",  "oneBoardDj",  "controlPoint");
      MapBoardForOneBoardDj(oneBoardShipTwo);
      if( gridElement.classList.contains("ship_wrapper_oneShip",  "oneBoardDj",  "controlPoint")
      ) {
      allOneShipArr[1].style.border = "none";
      allOneShipArr[1].remove(); 
      } 
    }else if(allOneShipArr[2].style.border === "2px solid red"){
      gridElement.classList.add("ship_wrapper_oneShip",  "oneBoardDj",  "controlPoint");
      MapBoardForOneBoardDj(oneBoardShipThree);
      if( gridElement.classList.contains("ship_wrapper_oneShip",  "oneBoardDj",  "controlPoint")
      ) {
      allOneShipArr[2].style.border = "none";
      allOneShipArr[2].remove(); 
      }
    }else if(allOneShipArr[3].style.border === "2px solid red"){
      gridElement.classList.add("ship_wrapper_oneShip",  "oneBoardDj",  "controlPoint");
      MapBoardForOneBoardDj(oneBoardShipFore);
      if( gridElement.classList.contains("ship_wrapper_oneShip",  "oneBoardDj",  "controlPoint")
      ) {
      allOneShipArr[3].style.border = "none";
      allOneShipArr[3].remove();  
      }

        //TWO
    } else if(allTwoShipArr[0].style.border === "2px solid red"){
      gridElement.classList.add("ship_wrapper_oneShip",  "twoBoardDj",  "controlPoint");
      MapBoardForTwoBoardDj(twoBoardShipOne);
      if( gridElement.classList.contains("ship_wrapper_oneShip",  "twoBoardDj",  "controlPoint")
      ) {
        allTwoShipArr[0].style.border = "none";
        allTwoShipArr[0].remove(); 
      }
    } else if(allTwoShipArr[1].style.border === "2px solid red"){
      gridElement.classList.add("ship_wrapper_oneShip",  "twoBoardDj",  "controlPoint");
      MapBoardForTwoBoardDj(twoBoardShipTwo);
      if( gridElement.classList.contains("ship_wrapper_oneShip",  "twoBoardDj",  "controlPoint")
      ) {
      allTwoShipArr[1].style.border = "none";
      allTwoShipArr[1].remove();  
      }
    } else if(allTwoShipArr[2].style.border === "2px solid red"){
      gridElement.classList.add("ship_wrapper_oneShip",  "twoBoardDj",  "controlPoint");
      MapBoardForTwoBoardDj(twoBoardShipThree);
      if( gridElement.classList.contains("ship_wrapper_oneShip",  "twoBoardDj",  "controlPoint")
      ) {
      allTwoShipArr[2].style.border = "none";
      allTwoShipArr[2].remove();
      }

        //THREE
    } else if(allThreeShipArr[0].style.border === "2px solid red"){
      gridElement.classList.add("ship_wrapper_oneShip",  "threeBoardDj",  "controlPoint");
      MapBoardForThreeBoardDj(threeBoardShipOne);
      if( gridElement.classList.contains("ship_wrapper_oneShip",  "threeBoardDj",  "controlPoint")
      ) {
      allThreeShipArr[0].style.border = "none";
      allThreeShipArr[0].remove();
      }
    } else if(allThreeShipArr[1].style.border === "2px solid red"){
      gridElement.classList.add("ship_wrapper_oneShip",  "threeBoardDj",  "controlPoint");
      MapBoardForThreeBoardDj(threeBoardShipTwo);
      if( gridElement.classList.contains("ship_wrapper_oneShip",  "threeBoardDj",  "controlPoint")
      ) {
      allThreeShipArr[1].style.border = "none";
      allThreeShipArr[1].remove();
      }


      //FORE
    } else if(foreShipArr[0].style.border === "2px solid red"){
      gridElement.classList.add("ship_wrapper_oneShip",  "foreBoardDj",  "controlPoint");
      MapBoardForForeBoardDj(foreBoardShipOne);
      if( gridElement.classList.contains("ship_wrapper_oneShip",  "foreBoardDj",  "controlPoint")
      ) {
      foreShipArr[0].style.border = "none";
      foreShipArr[0].remove();
      }
  } else if(gridElement.classList === "ship_wrapper_oneShip") {
    gridElement.classList.remove("ship_wrapper_oneShip");
    gridElement.classList.add("ship_wrapper");
  }}
}}

allShipWrapper.forEach((el, index)=> {
  el.addEventListener('click', newShip);
})
// FUNCTION ONLY ONE RED BOARD
const allImageOnArmada = document.querySelectorAll('.shipImg');
const ArrayAllImageOnArmada = Array.from(allImageOnArmada);

function redBoardNew () {
  const alltestred = document.querySelectorAll('.testRed');
const arrayTestRed = Array.from(alltestred);
if(arrayTestRed.length === 2){
      allOneShipArr[0].style.border = "none";
      allOneShipArr[1].style.border = "none";
        allOneShipArr[2].style.border = "none";
        allOneShipArr[3].style.border = "none";
        allTwoShipArr[0].style.border = "none";
        allTwoShipArr[1].style.border = "none";
        allTwoShipArr[2].style.border = "none";
        allThreeShipArr[0].style.border = "none";
        allThreeShipArr[1].style.border = "none";
        foreShipArr[0].style.border = "none";
        arrayTestRed[0].classList.remove("testRed");
        arrayTestRed[1].classList.remove("testRed");
    }
}
function testRed({target:shipImageElement}){
  shipImageElement.classList.add("testRed");
  redBoardNew();
}

ArrayAllImageOnArmada.forEach((el, index)=> {
  el.addEventListener('click', testRed);})

//BLOCK ABOUT START PLAY GAME

let Arr1 = [];

const randomButton = document.getElementById('random');
const playButton = document.getElementById('play');

function rnd1() {
  //ONE BOARD
  allShipWrapper[0].classList.add("ship_wrapper_oneShip", "oneBoardDj");
  allShipWrapper[24].classList.add("ship_wrapper_oneShip", "oneBoardDj");
  allShipWrapper[89].classList.add("ship_wrapper_oneShip", "oneBoardDj");
  allShipWrapper[16].classList.add("ship_wrapper_oneShip", "oneBoardDj");
//TWO BOARD
  allShipWrapper[54].classList.add("ship_wrapper_oneShip",  "twoBoardDj");
  allShipWrapper[64].classList.add("ship_wrapper_oneShip",  "twoBoardDj");

  allShipWrapper[48].classList.add("ship_wrapper_oneShip",  "twoBoardDj");
  allShipWrapper[49].classList.add("ship_wrapper_oneShip",  "twoBoardDj");

  allShipWrapper[9].classList.add("ship_wrapper_oneShip",  "twoBoardDj");
  allShipWrapper[19].classList.add("ship_wrapper_oneShip",  "twoBoardDj");
  //THREE BOARD
  allShipWrapper[91].classList.add("ship_wrapper_oneShip", "threeBoardDj");
  allShipWrapper[92].classList.add("ship_wrapper_oneShip", "threeBoardDj");
  allShipWrapper[93].classList.add("ship_wrapper_oneShip", "threeBoardDj");

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
  allShipWrapper[0].classList.add("ship_wrapper_oneShip", "oneBoardDj");
  allShipWrapper[9].classList.add("ship_wrapper_oneShip", "oneBoardDj");
  allShipWrapper[90].classList.add("ship_wrapper_oneShip", "oneBoardDj");
  allShipWrapper[99].classList.add("ship_wrapper_oneShip", "oneBoardDj");
//TWO BOARD
  allShipWrapper[23].classList.add("ship_wrapper_oneShip",  "twoBoardDj");
  allShipWrapper[33].classList.add("ship_wrapper_oneShip",  "twoBoardDj");

  allShipWrapper[48].classList.add("ship_wrapper_oneShip",  "twoBoardDj");
  allShipWrapper[49].classList.add("ship_wrapper_oneShip",  "twoBoardDj");

  allShipWrapper[7].classList.add("ship_wrapper_oneShip",  "twoBoardDj");
  allShipWrapper[17].classList.add("ship_wrapper_oneShip", "twoBoardDj");
  //THREE BOARD
  allShipWrapper[74].classList.add("ship_wrapper_oneShip", "threeBoardDj");
  allShipWrapper[84].classList.add("ship_wrapper_oneShip", "threeBoardDj");
  allShipWrapper[94].classList.add("ship_wrapper_oneShip", "threeBoardDj");

  allShipWrapper[20].classList.add("ship_wrapper_oneShip", "threeBoardDj");
  allShipWrapper[30].classList.add("ship_wrapper_oneShip", "threeBoardDj");
  allShipWrapper[40].classList.add("ship_wrapper_oneShip", "threeBoardDj");
  //FOUR BOARD
  allShipWrapper[66].classList.add("ship_wrapper_oneShip", "foreBoardDj");
  allShipWrapper[67].classList.add("ship_wrapper_oneShip", "foreBoardDj");
  allShipWrapper[68].classList.add("ship_wrapper_oneShip", "foreBoardDj");
  allShipWrapper[69].classList.add("ship_wrapper_oneShip", "foreBoardDj");

}

function rnd3() {
  //ONE BOARD
  allShipWrapper[11].classList.add("ship_wrapper_oneShip", "oneBoardDj");
  allShipWrapper[16].classList.add("ship_wrapper_oneShip", "oneBoardDj");
  allShipWrapper[69].classList.add("ship_wrapper_oneShip", "oneBoardDj");
  allShipWrapper[99].classList.add("ship_wrapper_oneShip", "oneBoardDj");
//TWO BOARD
  allShipWrapper[28].classList.add("ship_wrapper_oneShip",  "twoBoardDj");
  allShipWrapper[29].classList.add("ship_wrapper_oneShip",  "twoBoardDj");

  allShipWrapper[66].classList.add("ship_wrapper_oneShip",  "twoBoardDj");
  allShipWrapper[67].classList.add("ship_wrapper_oneShip"),  "twoBoardDj";

  allShipWrapper[96].classList.add("ship_wrapper_oneShip",  "twoBoardDj");
  allShipWrapper[97].classList.add("ship_wrapper_oneShip",  "twoBoardDj");
  //THREE BOARD
  allShipWrapper[31].classList.add("ship_wrapper_oneShip", "threeBoardDj");
  allShipWrapper[41].classList.add("ship_wrapper_oneShip", "threeBoardDj");
  allShipWrapper[51].classList.add("ship_wrapper_oneShip", "threeBoardDj");

  allShipWrapper[72].classList.add("ship_wrapper_oneShip", "threeBoardDj");
  allShipWrapper[73].classList.add("ship_wrapper_oneShip", "threeBoardDj");
  allShipWrapper[74].classList.add("ship_wrapper_oneShip", "threeBoardDj");
  //FOUR BOARD
  allShipWrapper[24].classList.add("ship_wrapper_oneShip", "foreBoardDj");
  allShipWrapper[34].classList.add("ship_wrapper_oneShip", "foreBoardDj");
  allShipWrapper[44].classList.add("ship_wrapper_oneShip", "foreBoardDj");
  allShipWrapper[54].classList.add("ship_wrapper_oneShip", "foreBoardDj");

}

//RANDOM R2D2 Function

function rnd1R2() {
  //ONE BOARD
  allShipWrapperr2d2[11].classList.add("ship_wrapper_oneShip_r2d2", "oneBoardR2");
  allShipWrapperr2d2[16].classList.add("ship_wrapper_oneShip_r2d2", "oneBoardR2");
  allShipWrapperr2d2[69].classList.add("ship_wrapper_oneShip_r2d2", "oneBoardR2");
  allShipWrapperr2d2[96].classList.add("ship_wrapper_oneShip_r2d2", "oneBoardR2");
  //TWO BOARD
  allShipWrapperr2d2[18].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2", "tbn1");
  allShipWrapperr2d2[19].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2", "tbn1");

  allShipWrapperr2d2[37].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2", "tbn2");
  allShipWrapperr2d2[47].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2" , "tbn2");

  allShipWrapperr2d2[66].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2", "tbn3");
  allShipWrapperr2d2[67].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2", "tbn3");
  //THREE BOARD
  allShipWrapperr2d2[31].classList.add("ship_wrapper_oneShip_r2d2",  "threeBoardR2", "thbn1");
  allShipWrapperr2d2[41].classList.add("ship_wrapper_oneShip_r2d2",  "threeBoardR2", "thbn1");
  allShipWrapperr2d2[51].classList.add("ship_wrapper_oneShip_r2d2",  "threeBoardR2", "thbn1");

  allShipWrapperr2d2[92].classList.add("ship_wrapper_oneShip_r2d2",  "threeBoardR2", "thbn2");
  allShipWrapperr2d2[93].classList.add("ship_wrapper_oneShip_r2d2",  "threeBoardR2", "thbn2");
  allShipWrapperr2d2[94].classList.add("ship_wrapper_oneShip_r2d2",  "threeBoardR2", "thbn2");
  //FOUR BOARD
  allShipWrapperr2d2[24].classList.add("ship_wrapper_oneShip_r2d2",  "foreBoardR2", "fb");
  allShipWrapperr2d2[34].classList.add("ship_wrapper_oneShip_r2d2",  "foreBoardR2", "fb");
  allShipWrapperr2d2[44].classList.add("ship_wrapper_oneShip_r2d2",  "foreBoardR2", "fb");
  allShipWrapperr2d2[54].classList.add("ship_wrapper_oneShip_r2d2",  "foreBoardR2", "fb");

}

function rnd2R2() {
  //ONE BOARD
  allShipWrapperr2d2[5].classList.add("ship_wrapper_oneShip_r2d2", "oneBoardR2");
  allShipWrapperr2d2[11].classList.add("ship_wrapper_oneShip_r2d2", "oneBoardR2");
  allShipWrapperr2d2[25].classList.add("ship_wrapper_oneShip_r2d2", "oneBoardR2");
  allShipWrapperr2d2[44].classList.add("ship_wrapper_oneShip_r2d2", "oneBoardR2");
  //TWO BOARD
  allShipWrapperr2d2[42].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2", "tbn1");
  allShipWrapperr2d2[52].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2", "tbn1");

  allShipWrapperr2d2[85].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2", "tbn2");
  allShipWrapperr2d2[86].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2", "tbn2");

  allShipWrapperr2d2[91].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2", "tbn3");
  allShipWrapperr2d2[92].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2", "tbn3");

  //THREE BOARD
  allShipWrapperr2d2[28].classList.add("ship_wrapper_oneShip_r2d2",  "threeBoardR2", "thbn1");
  allShipWrapperr2d2[38].classList.add("ship_wrapper_oneShip_r2d2",  "threeBoardR2", "thbn1");
  allShipWrapperr2d2[48].classList.add("ship_wrapper_oneShip_r2d2",  "threeBoardR2", "thbn1");

  allShipWrapperr2d2[79].classList.add("ship_wrapper_oneShip_r2d2",  "threeBoardR2", "thbn2");
  allShipWrapperr2d2[89].classList.add("ship_wrapper_oneShip_r2d2",  "threeBoardR2", "thbn2");
  allShipWrapperr2d2[99].classList.add("ship_wrapper_oneShip_r2d2",  "threeBoardR2", "thbn2");
  //FOUR BOARD
  allShipWrapperr2d2[40].classList.add("ship_wrapper_oneShip_r2d2",  "foreBoardR2", "fb");
  allShipWrapperr2d2[50].classList.add("ship_wrapper_oneShip_r2d2",  "foreBoardR2", "fb");
  allShipWrapperr2d2[60].classList.add("ship_wrapper_oneShip_r2d2",  "foreBoardR2", "fb");
  allShipWrapperr2d2[70].classList.add("ship_wrapper_oneShip_r2d2",  "foreBoardR2", "fb");
}

function rnd3R2() {
  //ONE BOARD
  allShipWrapperr2d2[41].classList.add("ship_wrapper_oneShip_r2d2", "oneBoardR2");
  allShipWrapperr2d2[63].classList.add("ship_wrapper_oneShip_r2d2", "oneBoardR2");
  allShipWrapperr2d2[1].classList.add("ship_wrapper_oneShip_r2d2", "oneBoardR2");
  allShipWrapperr2d2[99].classList.add("ship_wrapper_oneShip_r2d2", "oneBoardR2");
  //TWO BOARD
  allShipWrapperr2d2[20].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2", "tbn1");
  allShipWrapperr2d2[21].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2", "tbn1");

  allShipWrapperr2d2[60].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2", "tbn2");
  allShipWrapperr2d2[61].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2", "tbn2");

  allShipWrapperr2d2[35].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2", "tbn3");
  allShipWrapperr2d2[36].classList.add("ship_wrapper_oneShip_r2d2",  "twoBoardR2", "tbn3");

  //THREE BOARD
  allShipWrapperr2d2[4].classList.add("ship_wrapper_oneShip_r2d2",  "threeBoardR2", "thbn1");
  allShipWrapperr2d2[5].classList.add("ship_wrapper_oneShip_r2d2",  "threeBoardR2", "thbn1");
  allShipWrapperr2d2[6].classList.add("ship_wrapper_oneShip_r2d2",  "threeBoardR2", "thbn1");

  allShipWrapperr2d2[81].classList.add("ship_wrapper_oneShip_r2d2",  "threeBoardR2", "thbn2");
  allShipWrapperr2d2[82].classList.add("ship_wrapper_oneShip_r2d2",  "threeBoardR2", "thbn2");
  allShipWrapperr2d2[83].classList.add("ship_wrapper_oneShip_r2d2",  "threeBoardR2", "thbn2");
  //FOUR BOARD
  allShipWrapperr2d2[57].classList.add("ship_wrapper_oneShip_r2d2",  "foreBoardR2", "fb");
  allShipWrapperr2d2[67].classList.add("ship_wrapper_oneShip_r2d2",  "foreBoardR2", "fb");
  allShipWrapperr2d2[77].classList.add("ship_wrapper_oneShip_r2d2",  "foreBoardR2", "fb");
  allShipWrapperr2d2[87].classList.add("ship_wrapper_oneShip_r2d2",  "foreBoardR2", "fb");
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
    rnd3R2();
  }
  else if(randomNumberScale === 1){
    rnd2();
    rnd2R2();
  }
    else{
      rnd3();
      rnd1R2();
  }
}

randomButton.addEventListener("click", _ => randomOne());

// START PLAY GAME FUNCTION
function playGame (){
  scaleShipsDj();
  if(mapArrShipsDj.length === 20){
    dark.style.display = "flex";
    choice.style.display = "none";
    clearMapGridForShout();
    if(randomNumberScale === 0){
      rnd3R2();
    }
    else if(randomNumberScale === 1){
      rnd2R2();
    }
      else{
        rnd1R2();
    }
  }
  else {
    randomOne();
  }
}
playButton.addEventListener("click", _ => playGame());

//LOGIC SHUTTER

//map shouter oneBoardR2

//one ship notWar
let mapShouterOneBoardR2 = [];
function mapOneBoardSHoutR2(){
  mapShouterOneBoardR2 = [];
ArrayGridr2d2.forEach((node, index) => {
  if(node.classList.contains('dj_One_shot')
    && node.classList.contains('ship_wrapper_oneShip_r2d2')
    && node.classList.contains('oneBoardR2')
    && !node.classList.contains('twoBoardR2')
    && !node.classList.contains('threeBoardR2')
    && !node.classList.contains('foreBoardR2')
    ) {
      if(index === 0){
        mapShouterOneBoardR2.push(index + 1);
        mapShouterOneBoardR2.push(index + 10);
        mapShouterOneBoardR2.push(index + 11);
      } else if(index === 9){
        mapShouterOneBoardR2.push(index - 1);
        mapShouterOneBoardR2.push(index + 10);
        mapShouterOneBoardR2.push(index + 9);
      } else if(index === 90){
        mapShouterOneBoardR2.push(index + 1);
        mapShouterOneBoardR2.push(index - 10);
        mapShouterOneBoardR2.push(index - 9);
      } else if(index === 99){
        mapShouterOneBoardR2.push(index - 1);
        mapShouterOneBoardR2.push(index - 10);
        mapShouterOneBoardR2.push(index - 11);
      } else if(index === 1 || index === 2 || index === 3
        || index === 4 || index === 5 || index === 6
        || index === 7 || index === 8){
        mapShouterOneBoardR2.push(index - 1);
        mapShouterOneBoardR2.push(index + 1);
        mapShouterOneBoardR2.push(index + 9);
        mapShouterOneBoardR2.push(index + 10);
        mapShouterOneBoardR2.push(index + 11);
      } else if(index === 10 || index === 20 || index === 30
        || index === 40 || index === 50 || index === 60
        || index === 70 || index === 80){
        mapShouterOneBoardR2.push(index - 10);
        mapShouterOneBoardR2.push(index + 1);
        mapShouterOneBoardR2.push(index - 9);
        mapShouterOneBoardR2.push(index + 10);
        mapShouterOneBoardR2.push(index + 11);
      } else if(index === 91 || index === 92 || index === 93
        || index === 94 || index === 95 || index === 96
        || index === 97 || index === 98){
        mapShouterOneBoardR2.push(index - 1);
        mapShouterOneBoardR2.push(index - 11);
        mapShouterOneBoardR2.push(index - 10);
        mapShouterOneBoardR2.push(index - 9);
        mapShouterOneBoardR2.push(index + 1);
      } else if(index === 19 || index === 29 || index === 39
        || index === 49 || index === 59 || index === 69
        || index === 79 || index === 89){
        mapShouterOneBoardR2.push(index - 10);
        mapShouterOneBoardR2.push(index - 11);
        mapShouterOneBoardR2.push(index - 1);
        mapShouterOneBoardR2.push(index + 9);
        mapShouterOneBoardR2.push(index + 10);
        } else {
    mapShouterOneBoardR2.push(index - 1);
    mapShouterOneBoardR2.push(index + 1);
    mapShouterOneBoardR2.push(index + 10);
    mapShouterOneBoardR2.push(index - 10);
    mapShouterOneBoardR2.push(index - 9);
    mapShouterOneBoardR2.push(index + 9);
    mapShouterOneBoardR2.push(index + 11);
    mapShouterOneBoardR2.push(index - 11);
  }
  }
})
}

//FOR RIHT VISION WHEN SHOUT ONLY HALF BOARD
let mapShouterTwoBoardR2n1 = [];
function mapShoutTwoBoardn1(boardMrker, boardClass){

  mapShouterTwoBoardR2n1 = [];

  ArrayGridr2d2.forEach((node, index) => 
     {
      if(node.classList.contains('dj_One_shot')
          && node.classList.contains('ship_wrapper_oneShip_r2d2')
          && node.classList.contains(boardMrker)
          && node.classList.contains(boardClass)
        ) {
            mapShouterTwoBoardR2n1.push(index);
          }
    })
    if(
      boardMrker == 'tbn1' && mapShouterTwoBoardR2n1.length === 2
    ) {
        mapTwoBoardSHoutR2('tbn1');
      }
    else if(boardMrker == 'tbn2' && mapShouterTwoBoardR2n1.length === 2
      ) {
          mapTwoBoardSHoutR2('tbn2');
        }
    else if(boardMrker == 'tbn3' && mapShouterTwoBoardR2n1.length === 2
      ) {
          mapTwoBoardSHoutR2('tbn3');
        }
     else if(boardMrker == 'thbn1' && mapShouterTwoBoardR2n1.length === 3
      ) {
          mapThreeBoardSHoutR2('thbn1');
        }
    else if(boardMrker == 'thbn2' && mapShouterTwoBoardR2n1.length === 3
      ) {
          mapThreeBoardSHoutR2('thbn2');
        } 
        else if(boardMrker == 'fb' && mapShouterTwoBoardR2n1.length === 4
      ) {
        mapForeBoardSHoutR2('fb');
        } 
        console.log('zalupa tut', mapShouterTwoBoardR2n1);
  }


//two ship notWar
let mapShouterTwoBoardR2 = [];
function mapTwoBoardSHoutR2(board){
  mapShouterOneBoardR2 = [];
ArrayGridr2d2.forEach((node, index) => {
  if(node.classList.contains('dj_One_shot')
    && node.classList.contains('ship_wrapper_oneShip_r2d2')
    && node.classList.contains(board)
    && node.classList.contains('twoBoardR2')) {
      if((index === 0 && index === 1) || (index === 0 && index === 10)){
        mapShouterTwoBoardR2.push(index + 1);
        mapShouterTwoBoardR2.push(index + 10);
        mapShouterTwoBoardR2.push(index + 11);
      } else if((index === 9 & index === 8) || (index === 9 && index === 19)){
        mapShouterTwoBoardR2.push(index - 1);
        mapShouterTwoBoardR2.push(index + 10);
        mapShouterTwoBoardR2.push(index + 9);
      } else if((index === 90 && index === 91) || (index === 90 && index === 80)){
        mapShouterTwoBoardR2.push(index + 1);
        mapShouterTwoBoardR2.push(index - 10);
        mapShouterTwoBoardR2.push(index - 9);
      } else if((index === 98 && index === 99) || (index === 99 && index === 89)){
        mapShouterTwoBoardR2.push(index - 1);
        mapShouterTwoBoardR2.push(index - 10);
        mapShouterTwoBoardR2.push(index - 9);
      } else if((index === 1 && index === 2) || (index === 2 && index === 3) 
        || (index === 3 && index === 4) || (index === 4 && index === 5) 
        || (index === 5 && index === 6) || (index === 6 && index === 7)
        || (index === 7 && index === 8 )) {
          mapShouterTwoBoardR2.push(index - 1);
          mapShouterTwoBoardR2.push(index + 1);
          mapShouterTwoBoardR2.push(index + 9);
          mapShouterTwoBoardR2.push(index + 10);
          mapShouterTwoBoardR2.push(index + 11);
        } else if((index === 10 && index === 20) || (index === 20 && index === 30) 
        || (index === 30 && index === 40) || (index === 40 && index === 50) 
        || (index === 50 && index === 60) || (index === 60 && index === 70)
        || (index === 70 && index === 80 )) {
          mapShouterTwoBoardR2.push(index - 10);
          mapShouterTwoBoardR2.push(index + 1);
          mapShouterTwoBoardR2.push(index - 9);
          mapShouterTwoBoardR2.push(index + 10);
          mapShouterTwoBoardR2.push(index + 11);
        } else if((index === 91 && index === 92) || (index === 92 && index === 93) 
        || (index === 93 && index === 94) || (index === 94 && index === 95) 
        || (index === 95 && index === 96) || (index === 96 && index === 97)
        || (index === 97 && index === 98 )) {
          mapShouterTwoBoardR2.push(index - 1);
          mapShouterTwoBoardR2.push(index - 11);
          mapShouterTwoBoardR2.push(index - 10);
          mapShouterTwoBoardR2.push(index - 9);
          mapShouterTwoBoardR2.push(index + 1);
        } else if((index === 19 && index === 29) || (index === 29 && index === 39) 
        || (index === 39 && index === 49) || (index === 49 && index === 59) 
        || (index === 59 && index === 69) || (index === 69 && index === 79)
        || (index === 79 && index === 89 )) {
          mapShouterTwoBoardR2.push(index - 10);
          mapShouterTwoBoardR2.push(index - 11);
          mapShouterTwoBoardR2.push(index - 1);
          mapShouterTwoBoardR2.push(index + 9);
          mapShouterTwoBoardR2.push(index + 10);
        } else if(index === 1 || index === 2 || index === 3
          || index === 4 || index === 5 || index === 6
          || index === 7 || index === 8){
            mapShouterTwoBoardR2.push(index - 1);
            mapShouterTwoBoardR2.push(index + 1);
            mapShouterTwoBoardR2.push(index + 9);
          mapShouterTwoBoardR2.push(index + 10);
          mapShouterTwoBoardR2.push(index + 11);
        } else if(index === 10 || index === 20 || index === 30
          || index === 40 || index === 50 || index === 60
          || index === 70 || index === 80){
            mapShouterTwoBoardR2.push(index - 10);
          mapShouterTwoBoardR2.push(index + 1);
          mapShouterTwoBoardR2.push(index - 9);
          mapShouterTwoBoardR2.push(index + 10);
          mapShouterTwoBoardR2.push(index + 11);
        } else if(index === 91 || index === 92 || index === 93
          || index === 94 || index === 95 || index === 96
          || index === 97 || index === 98){
            mapShouterTwoBoardR2.push(index - 1);
          mapShouterTwoBoardR2.push(index - 11);
          mapShouterTwoBoardR2.push(index - 10);
          mapShouterTwoBoardR2.push(index - 9);
          mapShouterTwoBoardR2.push(index + 1);
        } else if(index === 19 || index === 29 || index === 39
          || index === 49 || index === 59 || index === 69
          || index === 79 || index === 89){
            mapShouterTwoBoardR2.push(index - 10);
            mapShouterTwoBoardR2.push(index - 11);
            mapShouterTwoBoardR2.push(index - 1);
            mapShouterTwoBoardR2.push(index + 9);
            mapShouterTwoBoardR2.push(index + 10);
          } else if(index === 0){
            mapShouterTwoBoardR2.push(index + 1);
            mapShouterTwoBoardR2.push(index + 10);
            mapShouterTwoBoardR2.push(index + 11);
          } else if(index === 9){
            mapShouterTwoBoardR2.push(index - 1);
            mapShouterTwoBoardR2.push(index + 10);
            mapShouterTwoBoardR2.push(index + 9);
          } else if(index === 90){
            mapShouterTwoBoardR2.push(index + 1);
            mapShouterTwoBoardR2.push(index - 10);
            mapShouterTwoBoardR2.push(index - 9);
          } else if(index === 99){
            mapShouterTwoBoardR2.push(index - 1);
            mapShouterTwoBoardR2.push(index - 10);
            mapShouterTwoBoardR2.push(index - 11);
          } else {
          mapShouterTwoBoardR2.push(index - 1);
          mapShouterTwoBoardR2.push(index + 1);
          mapShouterTwoBoardR2.push(index + 10);
          mapShouterTwoBoardR2.push(index - 10);
          mapShouterTwoBoardR2.push(index - 9);
          mapShouterTwoBoardR2.push(index + 9);
          mapShouterTwoBoardR2.push(index + 11);
          mapShouterTwoBoardR2.push(index - 11);
  }
  }
})
}


//three ship notWar
let mapShouterThreeBoardR2 = [];
function mapThreeBoardSHoutR2(board){
  mapShouterThreeBoardR2 = [];
ArrayGridr2d2.forEach((node, index) => {
  if(node.classList.contains('dj_One_shot')
    && node.classList.contains('ship_wrapper_oneShip_r2d2')
    && node.classList.contains(board)
    && node.classList.contains('threeBoardR2')) {
      if((index === 0 && index === 1) || (index === 0 && index === 10)){
        mapShouterThreeBoardR2.push(index + 1);
        mapShouterThreeBoardR2.push(index + 10);
        mapShouterThreeBoardR2.push(index + 11);
      } else if((index === 9 & index === 8) || (index === 9 && index === 19)){
        mapShouterThreeBoardR2.push(index - 1);
        mapShouterThreeBoardR2.push(index + 10);
        mapShouterThreeBoardR2.push(index + 9);
      } else if((index === 90 && index === 91) || (index === 90 && index === 80)){
        mapShouterThreeBoardR2.push(index + 1);
        mapShouterThreeBoardR2.push(index - 10);
        mapShouterThreeBoardR2.push(index - 9);
      } else if((index === 98 && index === 99) || (index === 99 && index === 89)){
        mapShouterThreeBoardR2.push(index - 1);
        mapShouterThreeBoardR2.push(index - 10);
        mapShouterThreeBoardR2.push(index - 9);
      } else if((index === 1 && index === 2) || (index === 2 && index === 3) 
        || (index === 3 && index === 4) || (index === 4 && index === 5) 
        || (index === 5 && index === 6) || (index === 6 && index === 7)
        || (index === 7 && index === 8 )) {
          mapShouterThreeBoardR2.push(index - 1);
          mapShouterThreeBoardR2.push(index + 1);
          mapShouterThreeBoardR2.push(index + 9);
          mapShouterThreeBoardR2.push(index + 10);
          mapShouterThreeBoardR2.push(index + 11);
        } else if((index === 10 && index === 20) || (index === 20 && index === 30) 
        || (index === 30 && index === 40) || (index === 40 && index === 50) 
        || (index === 50 && index === 60) || (index === 60 && index === 70)
        || (index === 70 && index === 80 )) {
          mapShouterThreeBoardR2.push(index - 10);
          mapShouterThreeBoardR2.push(index + 1);
          mapShouterThreeBoardR2.push(index - 9);
          mapShouterThreeBoardR2.push(index + 10);
          mapShouterThreeBoardR2.push(index + 11);
        } else if((index === 91 && index === 92) || (index === 92 && index === 93) 
        || (index === 93 && index === 94) || (index === 94 && index === 95) 
        || (index === 95 && index === 96) || (index === 96 && index === 97)
        || (index === 97 && index === 98 )) {
          mapShouterThreeBoardR2.push(index - 1);
          mapShouterThreeBoardR2.push(index - 11);
          mapShouterThreeBoardR2.push(index - 10);
          mapShouterThreeBoardR2.push(index - 9);
          mapShouterThreeBoardR2.push(index + 1);
        } else if((index === 19 && index === 29) || (index === 29 && index === 39) 
        || (index === 39 && index === 49) || (index === 49 && index === 59) 
        || (index === 59 && index === 69) || (index === 69 && index === 79)
        || (index === 79 && index === 89 )) {
          mapShouterThreeBoardR2.push(index - 10);
          mapShouterThreeBoardR2.push(index - 11);
          mapShouterThreeBoardR2.push(index - 1);
          mapShouterThreeBoardR2.push(index + 9);
          mapShouterThreeBoardR2.push(index + 10);
        } else if(index === 1 || index === 2 || index === 3
          || index === 4 || index === 5 || index === 6
          || index === 7 || index === 8){
            mapShouterThreeBoardR2.push(index - 1);
            mapShouterThreeBoardR2.push(index + 1);
            mapShouterThreeBoardR2.push(index + 9);
            mapShouterThreeBoardR2.push(index + 10);
            mapShouterThreeBoardR2.push(index + 11);
        } else if(index === 10 || index === 20 || index === 30
          || index === 40 || index === 50 || index === 60
          || index === 70 || index === 80){
            mapShouterThreeBoardR2.push(index - 10);
            mapShouterThreeBoardR2.push(index + 1);
            mapShouterThreeBoardR2.push(index - 9);
            mapShouterThreeBoardR2.push(index + 10);
            mapShouterThreeBoardR2.push(index + 11);
        } else if(index === 91 || index === 92 || index === 93
          || index === 94 || index === 95 || index === 96
          || index === 97 || index === 98){
            mapShouterThreeBoardR2.push(index - 1);
            mapShouterThreeBoardR2.push(index - 11);
            mapShouterThreeBoardR2.push(index - 10);
            mapShouterThreeBoardR2.push(index - 9);
            mapShouterThreeBoardR2.push(index + 1);
        } else if(index === 19 || index === 29 || index === 39
          || index === 49 || index === 59 || index === 69
          || index === 79 || index === 89){
            mapShouterThreeBoardR2.push(index - 10);
            mapShouterThreeBoardR2.push(index - 11);
            mapShouterThreeBoardR2.push(index - 1);
            mapShouterThreeBoardR2.push(index + 9);
            mapShouterThreeBoardR2.push(index + 10);
          } else if(index === 0){
            mapShouterThreeBoardR2.push(index + 1);
            mapShouterThreeBoardR2.push(index + 10);
            mapShouterThreeBoardR2.push(index + 11);
          } else if(index === 9){
            mapShouterThreeBoardR2.push(index - 1);
            mapShouterThreeBoardR2.push(index + 10);
            mapShouterThreeBoardR2.push(index + 9);
          } else if(index === 90){
            mapShouterThreeBoardR2.push(index + 1);
            mapShouterThreeBoardR2.push(index - 10);
            mapShouterThreeBoardR2.push(index - 9);
          } else if(index === 99){
            mapShouterThreeBoardR2.push(index - 1);
            mapShouterThreeBoardR2.push(index - 10);
            mapShouterThreeBoardR2.push(index - 11);
          } else {
            mapShouterThreeBoardR2.push(index - 1);
            mapShouterThreeBoardR2.push(index + 1);
            mapShouterThreeBoardR2.push(index + 10);
            mapShouterThreeBoardR2.push(index - 10);
            mapShouterThreeBoardR2.push(index - 9);
            mapShouterThreeBoardR2.push(index + 9);
            mapShouterThreeBoardR2.push(index + 11);
            mapShouterThreeBoardR2.push(index - 11);
  }
  }
})
}

//foure ship notWar
let mapShouterForeBoardR2 = [];
function mapForeBoardSHoutR2(board){
  mapShouterForeBoardR2 = [];
ArrayGridr2d2.forEach((node, index) => {
  if(node.classList.contains('dj_One_shot')
    && node.classList.contains('ship_wrapper_oneShip_r2d2')
    && node.classList.contains(board)
    && node.classList.contains('foreBoardR2')) {
      if((index === 0 && index === 1) || (index === 0 && index === 10)){
        mapShouterForeBoardR2.push(index + 1);
        mapShouterForeBoardR2.push(index + 10);
        mapShouterForeBoardR2.push(index + 11);
      } else if((index === 9 & index === 8) || (index === 9 && index === 19)){
        mapShouterForeBoardR2.push(index - 1);
        mapShouterForeBoardR2.push(index + 10);
        mapShouterForeBoardR2.push(index + 9);
      } else if((index === 90 && index === 91) || (index === 90 && index === 80)){
        mapShouterForeBoardR2.push(index + 1);
        mapShouterForeBoardR2.push(index - 10);
        mapShouterForeBoardR2.push(index - 9);
      } else if((index === 98 && index === 99) || (index === 99 && index === 89)){
        mapShouterForeBoardR2.push(index - 1);
        mapShouterForeBoardR2.push(index - 10);
        mapShouterForeBoardR2.push(index - 9);
      } else if((index === 1 && index === 2) || (index === 2 && index === 3) 
        || (index === 3 && index === 4) || (index === 4 && index === 5) 
        || (index === 5 && index === 6) || (index === 6 && index === 7)
        || (index === 7 && index === 8 )) {
          mapShouterForeBoardR2.push(index - 1);
          mapShouterForeBoardR2.push(index + 1);
          mapShouterForeBoardR2.push(index + 9);
          mapShouterForeBoardR2.push(index + 10);
          mapShouterForeBoardR2.push(index + 11);
        } else if((index === 10 && index === 20) || (index === 20 && index === 30) 
        || (index === 30 && index === 40) || (index === 40 && index === 50) 
        || (index === 50 && index === 60) || (index === 60 && index === 70)
        || (index === 70 && index === 80 )) {
          mapShouterForeBoardR2.push(index - 10);
          mapShouterForeBoardR2.push(index + 1);
          mapShouterForeBoardR2.push(index - 9);
          mapShouterForeBoardR2.push(index + 10);
          mapShouterForeBoardR2.push(index + 11);
        } else if((index === 91 && index === 92) || (index === 92 && index === 93) 
        || (index === 93 && index === 94) || (index === 94 && index === 95) 
        || (index === 95 && index === 96) || (index === 96 && index === 97)
        || (index === 97 && index === 98 )) {
          mapShouterForeBoardR2.push(index - 1);
          mapShouterForeBoardR2.push(index - 11);
          mapShouterForeBoardR2.push(index - 10);
          mapShouterForeBoardR2.push(index - 9);
          mapShouterForeBoardR2.push(index + 1);
        } else if((index === 19 && index === 29) || (index === 29 && index === 39) 
        || (index === 39 && index === 49) || (index === 49 && index === 59) 
        || (index === 59 && index === 69) || (index === 69 && index === 79)
        || (index === 79 && index === 89 )) {
          mapShouterForeBoardR2.push(index - 10);
          mapShouterForeBoardR2.push(index - 11);
          mapShouterForeBoardR2.push(index - 1);
          mapShouterForeBoardR2.push(index + 9);
          mapShouterForeBoardR2.push(index + 10);
        } else if(index === 1 || index === 2 || index === 3
          || index === 4 || index === 5 || index === 6
          || index === 7 || index === 8){
            mapShouterForeBoardR2.push(index - 1);
            mapShouterForeBoardR2.push(index + 1);
            mapShouterForeBoardR2.push(index + 9);
            mapShouterForeBoardR2.push(index + 10);
            mapShouterForeBoardR2.push(index + 11);
        } else if(index === 10 || index === 20 || index === 30
          || index === 40 || index === 50 || index === 60
          || index === 70 || index === 80){
            mapShouterForeBoardR2.push(index - 10);
            mapShouterForeBoardR2.push(index + 1);
            mapShouterForeBoardR2.push(index - 9);
            mapShouterForeBoardR2.push(index + 10);
            mapShouterForeBoardR2.push(index + 11);
        } else if(index === 91 || index === 92 || index === 93
          || index === 94 || index === 95 || index === 96
          || index === 97 || index === 98){
            mapShouterForeBoardR2.push(index - 1);
            mapShouterForeBoardR2.push(index - 11);
            mapShouterForeBoardR2.push(index - 10);
            mapShouterForeBoardR2.push(index - 9);
            mapShouterForeBoardR2.push(index + 1);
        } else if(index === 19 || index === 29 || index === 39
          || index === 49 || index === 59 || index === 69
          || index === 79 || index === 89){
            mapShouterForeBoardR2.push(index - 10);
            mapShouterForeBoardR2.push(index - 11);
            mapShouterForeBoardR2.push(index - 1);
            mapShouterForeBoardR2.push(index + 9);
            mapShouterForeBoardR2.push(index + 10);
          } else if(index === 0){
            mapShouterForeBoardR2.push(index + 1);
            mapShouterForeBoardR2.push(index + 10);
            mapShouterForeBoardR2.push(index + 11);
          } else if(index === 9){
            mapShouterForeBoardR2.push(index - 1);
            mapShouterForeBoardR2.push(index + 10);
            mapShouterForeBoardR2.push(index + 9);
          } else if(index === 90){
            mapShouterForeBoardR2.push(index + 1);
            mapShouterForeBoardR2.push(index - 10);
            mapShouterForeBoardR2.push(index - 9);
          } else if(index === 99){
            mapShouterForeBoardR2.push(index - 1);
            mapShouterForeBoardR2.push(index - 10);
            mapShouterForeBoardR2.push(index - 11);
          } else {
            mapShouterForeBoardR2.push(index - 1);
            mapShouterForeBoardR2.push(index + 1);
            mapShouterForeBoardR2.push(index + 10);
            mapShouterForeBoardR2.push(index - 10);
            mapShouterForeBoardR2.push(index - 9);
            mapShouterForeBoardR2.push(index + 9);
            mapShouterForeBoardR2.push(index + 11);
            mapShouterForeBoardR2.push(index - 11);
  }
  }
})
}

//map shouter oneBoard DJEDAI


//one ship notWar
let mapShouterOneBoardDj = [];
function mapOneBoardSHoutDj(){
  mapShouterOneBoardDj = [];
  ArrayGridDj.forEach((node, index) => {
  if(node.classList.contains('r2_One_shot')
    && node.classList.contains('ship_wrapper_oneShip')
    && node.classList.contains('oneBoardDj')
    && !node.classList.contains('twoBoardDj')
    && !node.classList.contains('threeBoardDj')
    && !node.classList.contains('foreBoardDj')
    ) {
      if(index === 0){
        mapShouterOneBoardDj.push(index + 1);
        mapShouterOneBoardDj.push(index + 10);
        mapShouterOneBoardDj.push(index + 11);
      } else if(index === 9){
        mapShouterOneBoardDj.push(index - 1);
        mapShouterOneBoardDj.push(index + 10);
        mapShouterOneBoardDj.push(index + 9);
      } else if(index === 90){
        mapShouterOneBoardDj.push(index + 1);
        mapShouterOneBoardDj.push(index - 10);
        mapShouterOneBoardDj.push(index - 9);
      } else if(index === 99){
        mapShouterOneBoardDj.push(index - 1);
        mapShouterOneBoardDj.push(index - 10);
        mapShouterOneBoardDj.push(index - 11);
      } else if(index === 1 || index === 2 || index === 3
        || index === 4 || index === 5 || index === 6
        || index === 7 || index === 8){
          mapShouterOneBoardDj.push(index - 1);
          mapShouterOneBoardDj.push(index + 1);
          mapShouterOneBoardDj.push(index + 9);
          mapShouterOneBoardDj.push(index + 10);
          mapShouterOneBoardDj.push(index + 11);
      } else if(index === 10 || index === 20 || index === 30
        || index === 40 || index === 50 || index === 60
        || index === 70 || index === 80){
          mapShouterOneBoardDj.push(index - 10);
          mapShouterOneBoardDj.push(index + 1);
          mapShouterOneBoardDj.push(index - 9);
          mapShouterOneBoardDj.push(index + 10);
          mapShouterOneBoardDj.push(index + 11);
      } else if(index === 91 || index === 92 || index === 93
        || index === 94 || index === 95 || index === 96
        || index === 97 || index === 98){
          mapShouterOneBoardDj.push(index - 1);
          mapShouterOneBoardDj.push(index - 11);
          mapShouterOneBoardDj.push(index - 10);
          mapShouterOneBoardDj.push(index - 9);
          mapShouterOneBoardDj.push(index + 1);
      } else if(index === 19 || index === 29 || index === 39
        || index === 49 || index === 59 || index === 69
        || index === 79 || index === 89){
          mapShouterOneBoardDj.push(index - 10);
          mapShouterOneBoardDj.push(index - 11);
          mapShouterOneBoardDj.push(index - 1);
          mapShouterOneBoardDj.push(index + 9);
          mapShouterOneBoardDj.push(index + 10);
        } else {
          mapShouterOneBoardDj.push(index - 1);
          mapShouterOneBoardDj.push(index + 1);
          mapShouterOneBoardDj.push(index + 10);
          mapShouterOneBoardDj.push(index - 10);
          mapShouterOneBoardDj.push(index - 9);
          mapShouterOneBoardDj.push(index + 9);
          mapShouterOneBoardDj.push(index + 11);
          mapShouterOneBoardDj.push(index - 11);
  }
  }
})
}

//two ship notWar
let mapShouterTwoBoardDj = [];
function mapTwoBoardSHoutDj(){
  mapShouterTwoBoardDj = [];
ArrayGridDj.forEach((node, index) => {
  if(node.classList.contains('r2_One_shot')
    && node.classList.contains('ship_wrapper_oneShip')
    && node.classList.contains('twoBoardDj')) {
      if((index === 0 && index === 1) || (index === 0 && index === 10)){
        mapShouterTwoBoardDj.push(index + 1);
        mapShouterTwoBoardDj.push(index + 10);
        mapShouterTwoBoardDj.push(index + 11);
      } else if((index === 9 & index === 8) || (index === 9 && index === 19)){
        mapShouterTwoBoardDj.push(index - 1);
        mapShouterTwoBoardDj.push(index + 10);
        mapShouterTwoBoardDj.push(index + 9);
      } else if((index === 90 && index === 91) || (index === 90 && index === 80)){
        mapShouterTwoBoardDj.push(index + 1);
        mapShouterTwoBoardDj.push(index - 10);
        mapShouterTwoBoardDj.push(index - 9);
      } else if((index === 98 && index === 99) || (index === 99 && index === 89)){
        mapShouterTwoBoardDj.push(index - 1);
        mapShouterTwoBoardDj.push(index - 10);
        mapShouterTwoBoardDj.push(index - 9);
      } else if((index === 1 && index === 2) || (index === 2 && index === 3) 
        || (index === 3 && index === 4) || (index === 4 && index === 5) 
        || (index === 5 && index === 6) || (index === 6 && index === 7)
        || (index === 7 && index === 8 )) {
          mapShouterTwoBoardDj.push(index - 1);
          mapShouterTwoBoardDj.push(index + 1);
          mapShouterTwoBoardDj.push(index + 9);
          mapShouterTwoBoardDj.push(index + 10);
          mapShouterTwoBoardDj.push(index + 11);
        } else if((index === 10 && index === 20) || (index === 20 && index === 30) 
        || (index === 30 && index === 40) || (index === 40 && index === 50) 
        || (index === 50 && index === 60) || (index === 60 && index === 70)
        || (index === 70 && index === 80 )) {
          mapShouterTwoBoardDj.push(index - 10);
          mapShouterTwoBoardDj.push(index + 1);
          mapShouterTwoBoardDj.push(index - 9);
          mapShouterTwoBoardDj.push(index + 10);
          mapShouterTwoBoardDj.push(index + 11);
        } else if((index === 91 && index === 92) || (index === 92 && index === 93) 
        || (index === 93 && index === 94) || (index === 94 && index === 95) 
        || (index === 95 && index === 96) || (index === 96 && index === 97)
        || (index === 97 && index === 98 )) {
          mapShouterTwoBoardDj.push(index - 1);
          mapShouterTwoBoardDj.push(index - 11);
          mapShouterTwoBoardDj.push(index - 10);
          mapShouterTwoBoardDj.push(index - 9);
          mapShouterTwoBoardDj.push(index + 1);
        } else if((index === 19 && index === 29) || (index === 29 && index === 39) 
        || (index === 39 && index === 49) || (index === 49 && index === 59) 
        || (index === 59 && index === 69) || (index === 69 && index === 79)
        || (index === 79 && index === 89 )) {
          mapShouterTwoBoardDj.push(index - 10);
          mapShouterTwoBoardDj.push(index - 11);
          mapShouterTwoBoardDj.push(index - 1);
          mapShouterTwoBoardDj.push(index + 9);
          mapShouterTwoBoardDj.push(index + 10);
        } else if(index === 1 || index === 2 || index === 3
          || index === 4 || index === 5 || index === 6
          || index === 7 || index === 8){
            mapShouterTwoBoardDj.push(index - 1);
            mapShouterTwoBoardDj.push(index + 1);
            mapShouterTwoBoardDj.push(index + 9);
            mapShouterTwoBoardDj.push(index + 10);
            mapShouterTwoBoardDj.push(index + 11);
        } else if(index === 10 || index === 20 || index === 30
          || index === 40 || index === 50 || index === 60
          || index === 70 || index === 80){
            mapShouterTwoBoardDj.push(index - 10);
            mapShouterTwoBoardDj.push(index + 1);
            mapShouterTwoBoardDj.push(index - 9);
            mapShouterTwoBoardDj.push(index + 10);
            mapShouterTwoBoardDj.push(index + 11);
        } else if(index === 91 || index === 92 || index === 93
          || index === 94 || index === 95 || index === 96
          || index === 97 || index === 98){
            mapShouterTwoBoardDj.push(index - 1);
            mapShouterTwoBoardDj.push(index - 11);
            mapShouterTwoBoardDj.push(index - 10);
            mapShouterTwoBoardDj.push(index - 9);
            mapShouterTwoBoardDj.push(index + 1);
        } else if(index === 19 || index === 29 || index === 39
          || index === 49 || index === 59 || index === 69
          || index === 79 || index === 89){
            mapShouterTwoBoardDj.push(index - 10);
            mapShouterTwoBoardDj.push(index - 11);
            mapShouterTwoBoardDj.push(index - 1);
            mapShouterTwoBoardDj.push(index + 9);
            mapShouterTwoBoardDj.push(index + 10);
          } else if(index === 0){
            mapShouterTwoBoardDj.push(index + 1);
            mapShouterTwoBoardDj.push(index + 10);
            mapShouterTwoBoardDj.push(index + 11);
          } else if(index === 9){
            mapShouterTwoBoardDj.push(index - 1);
            mapShouterTwoBoardDj.push(index + 10);
            mapShouterTwoBoardDj.push(index + 9);
          } else if(index === 90){
            mapShouterTwoBoardDj.push(index + 1);
            mapShouterTwoBoardDj.push(index - 10);
            mapShouterTwoBoardDj.push(index - 9);
          } else if(index === 99){
            mapShouterTwoBoardDj.push(index - 1);
            mapShouterTwoBoardDj.push(index - 10);
            mapShouterTwoBoardDj.push(index - 11);
          } else {
            mapShouterTwoBoardDj.push(index - 1);
            mapShouterTwoBoardDj.push(index + 1);
            mapShouterTwoBoardDj.push(index + 10);
            mapShouterTwoBoardDj.push(index - 10);
            mapShouterTwoBoardDj.push(index - 9);
            mapShouterTwoBoardDj.push(index + 9);
            mapShouterTwoBoardDj.push(index + 11);
            mapShouterTwoBoardDj.push(index - 11);
  }
  }
})
}

//three ship notWar
let mapShouterThreeBoardDj = [];
function mapThreeBoardSHoutDj(){
  mapShouterThreeBoardDj = [];
ArrayGridDj.forEach((node, index) => {
  if(node.classList.contains('r2_One_shot')
    && node.classList.contains('ship_wrapper_oneShip')
    && node.classList.contains('threeBoardDj')) {
      if((index === 0 && index === 1) || (index === 0 && index === 10)){
        mapShouterThreeBoardDj.push(index + 1);
        mapShouterThreeBoardDj.push(index + 10);
        mapShouterThreeBoardDj.push(index + 11);
      } else if((index === 9 & index === 8) || (index === 9 && index === 19)){
        mapShouterThreeBoardDj.push(index - 1);
        mapShouterThreeBoardDj.push(index + 10);
        mapShouterThreeBoardDj.push(index + 9);
      } else if((index === 90 && index === 91) || (index === 90 && index === 80)){
        mapShouterThreeBoardDj.push(index + 1);
        mapShouterThreeBoardDj.push(index - 10);
        mapShouterThreeBoardDj.push(index - 9);
      } else if((index === 98 && index === 99) || (index === 99 && index === 89)){
        mapShouterThreeBoardDj.push(index - 1);
        mapShouterThreeBoardDj.push(index - 10);
        mapShouterThreeBoardDj.push(index - 9);
      } else if((index === 1 && index === 2) || (index === 2 && index === 3) 
        || (index === 3 && index === 4) || (index === 4 && index === 5) 
        || (index === 5 && index === 6) || (index === 6 && index === 7)
        || (index === 7 && index === 8 )) {
          mapShouterThreeBoardDj.push(index - 1);
          mapShouterThreeBoardDj.push(index + 1);
          mapShouterThreeBoardDj.push(index + 9);
          mapShouterThreeBoardDj.push(index + 10);
          mapShouterThreeBoardDj.push(index + 11);
        } else if((index === 10 && index === 20) || (index === 20 && index === 30) 
        || (index === 30 && index === 40) || (index === 40 && index === 50) 
        || (index === 50 && index === 60) || (index === 60 && index === 70)
        || (index === 70 && index === 80 )) {
          mapShouterThreeBoardDj.push(index - 10);
          mapShouterThreeBoardDj.push(index + 1);
          mapShouterThreeBoardDj.push(index - 9);
          mapShouterThreeBoardDj.push(index + 10);
          mapShouterThreeBoardDj.push(index + 11);
        } else if((index === 91 && index === 92) || (index === 92 && index === 93) 
        || (index === 93 && index === 94) || (index === 94 && index === 95) 
        || (index === 95 && index === 96) || (index === 96 && index === 97)
        || (index === 97 && index === 98 )) {
          mapShouterThreeBoardDj.push(index - 1);
          mapShouterThreeBoardDj.push(index - 11);
          mapShouterThreeBoardDj.push(index - 10);
          mapShouterThreeBoardDj.push(index - 9);
          mapShouterThreeBoardDj.push(index + 1);
        } else if((index === 19 && index === 29) || (index === 29 && index === 39) 
        || (index === 39 && index === 49) || (index === 49 && index === 59) 
        || (index === 59 && index === 69) || (index === 69 && index === 79)
        || (index === 79 && index === 89 )) {
          mapShouterThreeBoardDj.push(index - 10);
          mapShouterThreeBoardDj.push(index - 11);
          mapShouterThreeBoardDj.push(index - 1);
          mapShouterThreeBoardDj.push(index + 9);
          mapShouterThreeBoardDj.push(index + 10);
        } else if(index === 1 || index === 2 || index === 3
          || index === 4 || index === 5 || index === 6
          || index === 7 || index === 8){
            mapShouterThreeBoardDj.push(index - 1);
            mapShouterThreeBoardDj.push(index + 1);
            mapShouterThreeBoardDj.push(index + 9);
            mapShouterThreeBoardDj.push(index + 10);
            mapShouterThreeBoardDj.push(index + 11);
        } else if(index === 10 || index === 20 || index === 30
          || index === 40 || index === 50 || index === 60
          || index === 70 || index === 80){
            mapShouterThreeBoardDj.push(index - 10);
            mapShouterThreeBoardDj.push(index + 1);
            mapShouterThreeBoardDj.push(index - 9);
            mapShouterThreeBoardDj.push(index + 10);
            mapShouterThreeBoardDj.push(index + 11);
        } else if(index === 91 || index === 92 || index === 93
          || index === 94 || index === 95 || index === 96
          || index === 97 || index === 98){
            mapShouterThreeBoardDj.push(index - 1);
            mapShouterThreeBoardDj.push(index - 11);
            mapShouterThreeBoardDj.push(index - 10);
            mapShouterThreeBoardDj.push(index - 9);
            mapShouterThreeBoardDj.push(index + 1);
        } else if(index === 19 || index === 29 || index === 39
          || index === 49 || index === 59 || index === 69
          || index === 79 || index === 89){
            mapShouterThreeBoardDj.push(index - 10);
            mapShouterThreeBoardDj.push(index - 11);
            mapShouterThreeBoardDj.push(index - 1);
            mapShouterThreeBoardDj.push(index + 9);
            mapShouterThreeBoardDj.push(index + 10);
          } else if(index === 0){
            mapShouterThreeBoardDj.push(index + 1);
            mapShouterThreeBoardDj.push(index + 10);
            mapShouterThreeBoardDj.push(index + 11);
          } else if(index === 9){
            mapShouterThreeBoardDj.push(index - 1);
            mapShouterThreeBoardDj.push(index + 10);
            mapShouterThreeBoardDj.push(index + 9);
          } else if(index === 90){
            mapShouterThreeBoardDj.push(index + 1);
            mapShouterThreeBoardDj.push(index - 10);
            mapShouterThreeBoardDj.push(index - 9);
          } else if(index === 99){
            mapShouterThreeBoardDj.push(index - 1);
            mapShouterThreeBoardDj.push(index - 10);
            mapShouterThreeBoardDj.push(index - 11);
          } else {
            mapShouterThreeBoardDj.push(index - 1);
            mapShouterThreeBoardDj.push(index + 1);
            mapShouterThreeBoardDj.push(index + 10);
            mapShouterThreeBoardDj.push(index - 10);
            mapShouterThreeBoardDj.push(index - 9);
            mapShouterThreeBoardDj.push(index + 9);
            mapShouterThreeBoardDj.push(index + 11);
            mapShouterThreeBoardDj.push(index - 11);
  }
  }
})
}

//fore ship notWar
let mapShouterForeBoardDj = [];
function mapForeBoardSHoutDj(){
  mapShouterForeBoardDj = [];
ArrayGridDj.forEach((node, index) => {
  if(node.classList.contains('r2_One_shot')
    && node.classList.contains('ship_wrapper_oneShip')
    && node.classList.contains('foreBoardDj')) {
      if((index === 0 && index === 1) || (index === 0 && index === 10)){
        mapShouterForeBoardDj.push(index + 1);
        mapShouterForeBoardDj.push(index + 10);
        mapShouterForeBoardDj.push(index + 11);
      } else if((index === 9 & index === 8) || (index === 9 && index === 19)){
        mapShouterForeBoardDj.push(index - 1);
        mapShouterForeBoardDj.push(index + 10);
        mapShouterForeBoardDj.push(index + 9);
      } else if((index === 90 && index === 91) || (index === 90 && index === 80)){
        mapShouterForeBoardDj.push(index + 1);
        mapShouterForeBoardDj.push(index - 10);
        mapShouterForeBoardDj.push(index - 9);
      } else if((index === 98 && index === 99) || (index === 99 && index === 89)){
        mapShouterForeBoardDj.push(index - 1);
        mapShouterForeBoardDj.push(index - 10);
        mapShouterForeBoardDj.push(index - 9);
      } else if((index === 1 && index === 2) || (index === 2 && index === 3) 
        || (index === 3 && index === 4) || (index === 4 && index === 5) 
        || (index === 5 && index === 6) || (index === 6 && index === 7)
        || (index === 7 && index === 8 )) {
          mapShouterForeBoardDj.push(index - 1);
          mapShouterForeBoardDj.push(index + 1);
          mapShouterForeBoardDj.push(index + 9);
          mapShouterForeBoardDj.push(index + 10);
          mapShouterForeBoardDj.push(index + 11);
        } else if((index === 10 && index === 20) || (index === 20 && index === 30) 
        || (index === 30 && index === 40) || (index === 40 && index === 50) 
        || (index === 50 && index === 60) || (index === 60 && index === 70)
        || (index === 70 && index === 80 )) {
          mapShouterForeBoardDj.push(index - 10);
          mapShouterForeBoardDj.push(index + 1);
          mapShouterForeBoardDj.push(index - 9);
          mapShouterForeBoardDj.push(index + 10);
          mapShouterForeBoardDj.push(index + 11);
        } else if((index === 91 && index === 92) || (index === 92 && index === 93) 
        || (index === 93 && index === 94) || (index === 94 && index === 95) 
        || (index === 95 && index === 96) || (index === 96 && index === 97)
        || (index === 97 && index === 98 )) {
          mapShouterForeBoardDj.push(index - 1);
          mapShouterForeBoardDj.push(index - 11);
          mapShouterForeBoardDj.push(index - 10);
          mapShouterForeBoardDj.push(index - 9);
          mapShouterForeBoardDj.push(index + 1);
        } else if((index === 19 && index === 29) || (index === 29 && index === 39) 
        || (index === 39 && index === 49) || (index === 49 && index === 59) 
        || (index === 59 && index === 69) || (index === 69 && index === 79)
        || (index === 79 && index === 89 )) {
          mapShouterForeBoardDj.push(index - 10);
          mapShouterForeBoardDj.push(index - 11);
          mapShouterForeBoardDj.push(index - 1);
          mapShouterForeBoardDj.push(index + 9);
          mapShouterForeBoardDj.push(index + 10);
        } else if(index === 1 || index === 2 || index === 3
          || index === 4 || index === 5 || index === 6
          || index === 7 || index === 8){
            mapShouterForeBoardDj.push(index - 1);
            mapShouterForeBoardDj.push(index + 1);
            mapShouterForeBoardDj.push(index + 9);
            mapShouterForeBoardDj.push(index + 10);
            mapShouterForeBoardDj.push(index + 11);
        } else if(index === 10 || index === 20 || index === 30
          || index === 40 || index === 50 || index === 60
          || index === 70 || index === 80){
            mapShouterForeBoardDj.push(index - 10);
            mapShouterForeBoardDj.push(index + 1);
            mapShouterForeBoardDj.push(index - 9);
            mapShouterForeBoardDj.push(index + 10);
            mapShouterForeBoardDj.push(index + 11);
        } else if(index === 91 || index === 92 || index === 93
          || index === 94 || index === 95 || index === 96
          || index === 97 || index === 98){
            mapShouterForeBoardDj.push(index - 1);
            mapShouterForeBoardDj.push(index - 11);
            mapShouterForeBoardDj.push(index - 10);
            mapShouterForeBoardDj.push(index - 9);
            mapShouterForeBoardDj.push(index + 1);
        } else if(index === 19 || index === 29 || index === 39
          || index === 49 || index === 59 || index === 69
          || index === 79 || index === 89){
            mapShouterForeBoardDj.push(index - 10);
            mapShouterForeBoardDj.push(index - 11);
            mapShouterForeBoardDj.push(index - 1);
            mapShouterForeBoardDj.push(index + 9);
            mapShouterForeBoardDj.push(index + 10);
          } else if(index === 0){
            mapShouterForeBoardDj.push(index + 1);
            mapShouterForeBoardDj.push(index + 10);
            mapShouterForeBoardDj.push(index + 11);
          } else if(index === 9){
            mapShouterForeBoardDj.push(index - 1);
            mapShouterForeBoardDj.push(index + 10);
            mapShouterForeBoardDj.push(index + 9);
          } else if(index === 90){
            mapShouterForeBoardDj.push(index + 1);
            mapShouterForeBoardDj.push(index - 10);
            mapShouterForeBoardDj.push(index - 9);
          } else if(index === 99){
            mapShouterForeBoardDj.push(index - 1);
            mapShouterForeBoardDj.push(index - 10);
            mapShouterForeBoardDj.push(index - 11);
          } else {
            mapShouterForeBoardDj.push(index - 1);
            mapShouterForeBoardDj.push(index + 1);
            mapShouterForeBoardDj.push(index + 10);
            mapShouterForeBoardDj.push(index - 10);
            mapShouterForeBoardDj.push(index - 9);
            mapShouterForeBoardDj.push(index + 9);
            mapShouterForeBoardDj.push(index + 11);
            mapShouterForeBoardDj.push(index - 11);
  }
  }
})
}
// FUNCTION MANUAL ADD SHIP ON GRID WHEN START GAME

//ARRAY FOR ONE SHIP
const oneBoardShipOne = document.getElementById('one_ship_1');
const oneBoardShipTwo = document.getElementById('one_ship_2');
const oneBoardShipThree = document.getElementById('one_ship_3');
const oneBoardShipFore = document.getElementById('one_ship_4');
function MapBoardForOneBoardDj(boardd)
{
    ArrayGridDj.forEach((node, index) => 
    { if(
          node.classList.contains('ship_wrapper_oneShip')
          && node.classList.contains('oneBoardDj')
          && node.classList.contains('controlPoint')
        ) 
          if(
                   index === 10 || index === 20 || index === 30
                   || index === 40 || index === 50 || index === 60 || index === 70
                   || index === 80
                 ) {
                   if(
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip')
                    ){
                      allShipWrapper[index].className = 'ship_wrapper';
                      alert("Выберите другую клетку!");
                    } else {
                      allShipWrapper[index].className = 'ship_wrapper_oneShip oneBoardDj';
                    }
                 } else if(
                  index === 19 || index === 29 || index === 39
                  || index === 49 || index === 59 || index === 69 || index === 79
                  || index === 89
                ) {
                  if(
                     allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                     allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                     allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                     allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                     allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip')
                   ){
                     allShipWrapper[index].className = 'ship_wrapper';
                     alert("Выберите другую клетку!");
                   } else {
                     allShipWrapper[index].className = 'ship_wrapper_oneShip oneBoardDj';
                   }
                }
                 
                 else if(index === 0){
                   if(
                    allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip oneBoardDj';
                  }
                 } else if(index === 90){
                   if(
                    allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip oneBoardDj';
                 }
                 } else if(
                            index === 91 || index === 92 || index === 93 || index === 98
                            || index === 94 || index === 95 || index === 96 || index === 97
                  ){
                    if(
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip')
                    ){
                      allShipWrapper[index].className = 'ship_wrapper';
                      alert("Выберите другую клетку!");
                    } else {
                      allShipWrapper[index].className = 'ship_wrapper_oneShip oneBoardDj';
                    }
                 } else if( index === 99){
                   if(
                    allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip oneBoardDj';
                 }
                 } else if(
                   index === 1 || index === 2 || index === 3 || index === 4
                   || index === 5 || index === 6 || index === 7 || index === 8
                 ) {
                   if(
                    allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip oneBoardDj';
                 }
                 } else if ( index === 9){
                   if(
                    allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip oneBoardDj';
                 }
                 }

                else if(
                  allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip')
                ){
                  allShipWrapper[index].className = 'ship_wrapper';
                  alert("Выберите другую клетку!");  
                } else {
                  allShipWrapper[index].className = 'ship_wrapper_oneShip oneBoardDj';
            }
    }
    )}

//ARRAY FOR TWO BOARD LOGIC CHOICE START GAME
const twoBoardShipOne = document.getElementById('two_ship_1');
const twoBoardShipTwo = document.getElementById('two_ship_2');
const twoBoardShipThree = document.getElementById('two_ship_3');
let arrayMapBoardForTwoBoardDj = [];
function MapBoardForTwoBoardDj(boardd)
{
  arrayMapBoardForTwoBoardDj = [];
    ArrayGridDj.forEach((node, index) => 
    { if(
          node.classList.contains('ship_wrapper_oneShip')
          && node.classList.contains('twoBoardDj')
          && node.classList.contains('controlPoint')
          && !boardd.classList.contains('element_90deg')
        ) 
          { if(
              index === 9 || index === 19 || index === 29 || index === 39
              || index === 49 || index === 59 || index === 69 || index === 79
              || index === 89 || index === 99
              )
                {
                allShipWrapper[index].className = 'ship_wrapper';
                alert("Выберите другую клетку!");
                } else if(
                   index === 10 || index === 20 || index === 30
                   || index === 40 || index === 50 || index === 60 || index === 70
                   || index === 80
                 ) {
                   if(
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 8].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 12].classList.contains('ship_wrapper_oneShip')
                    ){
                      allShipWrapper[index].className = 'ship_wrapper';
                      alert("Выберите другую клетку!");
                    } else {
                      allShipWrapper[index].className = 'ship_wrapper_oneShip twoBoardDj';
                      allShipWrapper[index + 1].className = 'ship_wrapper_oneShip twoBoardDj';

                      // allShipWrapper[index + 1].classList.add('ship_wrapper_oneShip twoBoardDj');
                    }
                 } else if(index === 0){
                   if(
                    allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 12].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip twoBoardDj';
                    allShipWrapper[index + 1].className = 'ship_wrapper_oneShip twoBoardDj';
                 }
                 } else if(index === 90){
                   if(
                    allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 8].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip twoBoardDj';
                    allShipWrapper[index + 1].className = 'ship_wrapper_oneShip twoBoardDj';
                 }
                 } else if(
                            index === 91 || index === 92 || index === 93 
                            || index === 94 || index === 95 || index === 96 || index === 97
                  ){
                    if(
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 8].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip')
                    ){
                      allShipWrapper[index].className = 'ship_wrapper';
                      alert("Выберите другую клетку!");
                    } else {
                      allShipWrapper[index].className = 'ship_wrapper_oneShip twoBoardDj';
                      allShipWrapper[index + 1].className = 'ship_wrapper_oneShip twoBoardDj';
                    }
                 } else if( index === 98){
                   if(
                    allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip twoBoardDj';
                    allShipWrapper[index + 1].className = 'ship_wrapper_oneShip twoBoardDj';
                 }
                 } else if(
                   index === 1 || index === 2 || index === 3 || index === 4
                   || index === 5 || index === 6 || index === 7
                 ) {
                   if(
                    allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 12].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip twoBoardDj';
                    allShipWrapper[index + 1].className = 'ship_wrapper_oneShip twoBoardDj';
                 }
                 } else if ( index === 8){
                   if(
                    allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip twoBoardDj';
                    allShipWrapper[index + 1].className = 'ship_wrapper_oneShip twoBoardDj';
                 }
                 }

                else if(
                  allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 8].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 12].classList.contains('ship_wrapper_oneShip')
                ){
                  allShipWrapper[index].className = 'ship_wrapper';
                  alert("Выберите другую клетку!");  
                } else {
                  allShipWrapper[index].className = 'ship_wrapper_oneShip twoBoardDj';
                  allShipWrapper[index + 1].className = 'ship_wrapper_oneShip twoBoardDj';
            }
          } else if (
            node.classList.contains('ship_wrapper_oneShip')
            && node.classList.contains('twoBoardDj')
            && node.classList.contains('controlPoint')
            && boardd.classList.contains('element_90deg')
            ) 
            { if(
                index === 90 || index === 91 || index === 92 || index === 93
                || index === 94 || index === 95 || index === 96 || index === 97
                || index === 98 || index === 99
                )
                {
                allShipWrapper[index].className = 'ship_wrapper';
                alert("Выберите другую клетку!");
                } 
              else if(
                  index === 19 || index === 29 || index === 39
                  || index === 49 || index === 59 || index === 69 || index === 79
                  ){
                    if(
                      allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 19].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip')
                    ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                    } else{
                      allShipWrapper[index].className = 'ship_wrapper_oneShip twoBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip twoBoardDj';
                    }
                  }
              else if(index === 9){
                    if(
                      allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 19].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip')
                      ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                        } 
                    else {
                      allShipWrapper[index].className = 'ship_wrapper_oneShip twoBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip twoBoardDj';
                          }
                       } 
              else if(index === 89){
                    if(
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip')
                      ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                        } 
                    else {
                      allShipWrapper[index].className = 'ship_wrapper_oneShip twoBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip twoBoardDj';
                          }
                       }
              else if(
                  index === 10 || index === 20 || index === 30
                  || index === 40 || index === 50 || index === 60 || index === 70
                  ){
                    if(
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 21].classList.contains('ship_wrapper_oneShip')
                    ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                    } else{
                      allShipWrapper[index].className = 'ship_wrapper_oneShip twoBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip twoBoardDj';
                    }
                  }
              else if(
                  index === 0
                  ){
                    if(
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 21].classList.contains('ship_wrapper_oneShip')
                    ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                    } else{
                      allShipWrapper[index].className = 'ship_wrapper_oneShip twoBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip twoBoardDj';
                    }
                  }
              else if(
                  index === 80
                  ){
                    if(
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip')
                    ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                    } else{
                      allShipWrapper[index].className = 'ship_wrapper_oneShip twoBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip twoBoardDj';
                    }
                  }
              else if(
                  index === 81 || index === 82 || index === 83 || index === 84
                  || index === 85 || index === 86 || index === 87 || index === 88
                  ){
                    if(
                      allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip')
                    ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                    } else{
                      allShipWrapper[index].className = 'ship_wrapper_oneShip twoBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip twoBoardDj';
                    }
                  }
              else if(
                  index === 1 || index === 2 || index === 3 || index === 4
                  || index === 5 || index === 6 || index === 7 || index === 8
                  ){
                    if(
                      allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 19].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 21].classList.contains('ship_wrapper_oneShip')
                    ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                    } else{
                      allShipWrapper[index].className = 'ship_wrapper_oneShip twoBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip twoBoardDj';
                    }
                  }

                  else if(
                  allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 19].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 21].classList.contains('ship_wrapper_oneShip')
                  ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");  
                  } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip twoBoardDj';
                    allShipWrapper[index + 10].className = 'ship_wrapper_oneShip twoBoardDj';
                }
            }
    }
    )}

    //ARRAY FOR THREE BOARD LOGIC CHOICE START GAME
const threeBoardShipOne = document.getElementById('three_ship_1');
const threeBoardShipTwo = document.getElementById('three_ship_2');
function MapBoardForThreeBoardDj(boardd)
{
    ArrayGridDj.forEach((node, index) => 
    { if( //HORIZONTAL ORINTAION
          node.classList.contains('ship_wrapper_oneShip')
          && node.classList.contains('threeBoardDj')
          && node.classList.contains('controlPoint')
          && !boardd.classList.contains('element_90deg')
        ) 
          { if(
              index === 9 || index === 19 || index === 29 || index === 39
              || index === 49 || index === 59 || index === 69 || index === 79
              || index === 89 || index === 99 || index === 8 || index === 18 || 
              index === 28 || index === 38 || index === 48 || index === 58 || 
              index === 68 || index === 78
              || index === 88 || index === 98
              )
                {
                allShipWrapper[index].className = 'ship_wrapper';
                alert("Выберите другую клетку!");
                } else if(
                   index === 10 || index === 20 || index === 30
                   || index === 40 || index === 50 || index === 60 || index === 70
                   || index === 80
                 ) {
                   if(
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 8].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 7].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 3].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 12].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 13].classList.contains('ship_wrapper_oneShip')
                    ){
                      allShipWrapper[index].className = 'ship_wrapper';
                      alert("Выберите другую клетку!");
                    } else {
                      allShipWrapper[index].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 1].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 2].className = 'ship_wrapper_oneShip threeBoardDj';

                      // allShipWrapper[index + 1].classList.add('ship_wrapper_oneShip twoBoardDj');
                    }
                 } else if(index === 0){
                   if(
                    allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 3].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 12].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 13].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip threeBoardDj';
                    allShipWrapper[index + 1].className = 'ship_wrapper_oneShip threeBoardDj';
                    allShipWrapper[index + 2].className = 'ship_wrapper_oneShip threeBoardDj';
                 }
                 } else if(index === 90){
                   if(
                    allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 3].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 8].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 7].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip threeBoardDj';
                    allShipWrapper[index + 1].className = 'ship_wrapper_oneShip threeBoardDj';
                    allShipWrapper[index + 2].className = 'ship_wrapper_oneShip threeBoardDj';
                 }
                 } else if(
                            index === 91 || index === 92 || index === 93 
                            || index === 94 || index === 95 || index === 96
                  ){
                    if(
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 3].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 8].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 7].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip')
                    ){
                      allShipWrapper[index].className = 'ship_wrapper';
                      alert("Выберите другую клетку!");
                    } else {
                      allShipWrapper[index].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 1].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 2].className = 'ship_wrapper_oneShip threeBoardDj';
                    }
                 } else if( index === 97){
                   if(
                    allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 8].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip threeBoardDj';
                    allShipWrapper[index + 1].className = 'ship_wrapper_oneShip threeBoardDj';
                    allShipWrapper[index + 2].className = 'ship_wrapper_oneShip threeBoardDj';
                 }
                 } else if(
                   index === 1 || index === 2 || index === 3 || index === 4
                   || index === 5 || index === 6
                 ) {
                   if(
                    allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 3].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 12].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 13].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip threeBoardDj';
                    allShipWrapper[index + 1].className = 'ship_wrapper_oneShip threeBoardDj';
                    allShipWrapper[index + 2].className = 'ship_wrapper_oneShip threeBoardDj';
                 }
                 } else if ( index === 7){
                   if(
                    allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 12].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip threeBoardDj';
                    allShipWrapper[index + 1].className = 'ship_wrapper_oneShip threeBoardDj';
                    allShipWrapper[index + 2].className = 'ship_wrapper_oneShip threeBoardDj';
                 }
                 }

                else if(
                  allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 3].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 8].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 7].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 12].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 13].classList.contains('ship_wrapper_oneShip')
                ){
                  allShipWrapper[index].className = 'ship_wrapper';
                  alert("Выберите другую клетку!");  
                } else {
                  allShipWrapper[index].className = 'ship_wrapper_oneShip threeBoardDj';
                  allShipWrapper[index + 1].className = 'ship_wrapper_oneShip threeBoardDj';
                  allShipWrapper[index + 2].className = 'ship_wrapper_oneShip threeBoardDj';
            }
          } else if (
            node.classList.contains('ship_wrapper_oneShip')
            && node.classList.contains('threeBoardDj')
            && node.classList.contains('controlPoint')
            && boardd.classList.contains('element_90deg')
            ) 
            { if(
                index === 90 || index === 91 || index === 92 || index === 93
                || index === 94 || index === 95 || index === 96 || index === 97
                || index === 98 || index === 99 || index === 80 || index === 81 
                || index === 82 || index === 83|| index === 84 || index === 85 
                || index === 86 || index === 87|| index === 88 || index === 89
                )
                {
                allShipWrapper[index].className = 'ship_wrapper';
                alert("Выберите другую клетку!");
                } 
              else if(
                  index === 19 || index === 29 || index === 39
                  || index === 49 || index === 59 || index === 69
                  ){
                    if(
                      allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 19].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 29].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 30].classList.contains('ship_wrapper_oneShip')
                    ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                    } else{
                      allShipWrapper[index].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 20].className = 'ship_wrapper_oneShip threeBoardDj';
                    }
                  }
              else if(index === 9){
                    if(
                      allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 19].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 29].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 30].classList.contains('ship_wrapper_oneShip')
                      ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                        } 
                    else {
                      allShipWrapper[index].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 20].className = 'ship_wrapper_oneShip threeBoardDj';
                          }
                       } 
              else if(index === 79){
                    if(
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 19].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip')
                      ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                        } 
                    else {
                      allShipWrapper[index].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 20].className = 'ship_wrapper_oneShip threeBoardDj';
                          }
                       }
              else if(
                  index === 10 || index === 20 || index === 30
                  || index === 40 || index === 50 || index === 60
                  ){
                    if(
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 21].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 30].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 31].classList.contains('ship_wrapper_oneShip')
                    ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                    } else{
                      allShipWrapper[index].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 20].className = 'ship_wrapper_oneShip threeBoardDj';
                    }
                  }
              else if(
                  index === 0
                  ){
                    if(
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 21].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 30].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 31].classList.contains('ship_wrapper_oneShip')
                    ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                    } else{
                      allShipWrapper[index].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 20].className = 'ship_wrapper_oneShip threeBoardDj';
                    }
                  }
              else if(
                  index === 70
                  ){
                    if(
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 21].classList.contains('ship_wrapper_oneShip')
                    ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                    } else{
                      allShipWrapper[index].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 20].className = 'ship_wrapper_oneShip threeBoardDj';
                    }
                  }
              else if(
                  index === 71 || index === 72 || index === 73 || index === 74
                  || index === 75 || index === 76 || index === 77 || index === 78
                  ){
                    if(
                      allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 19].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 21].classList.contains('ship_wrapper_oneShip')
                    ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                    } else{
                      allShipWrapper[index].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 20].className = 'ship_wrapper_oneShip threeBoardDj';
                    }
                  }
              else if(
                  index === 1 || index === 2 || index === 3 || index === 4
                  || index === 5 || index === 6 || index === 7 || index === 8
                  ){
                    if(
                      allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 19].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 21].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 29].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 30].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 31].classList.contains('ship_wrapper_oneShip')
                    ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                    } else{
                      allShipWrapper[index].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip threeBoardDj';
                      allShipWrapper[index + 20].className = 'ship_wrapper_oneShip threeBoardDj';
                    }
                  }

                  else if(
                  allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 19].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 21].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 29].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 30].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 31].classList.contains('ship_wrapper_oneShip')
                  ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");  
                  } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip threeBoardDj';
                    allShipWrapper[index + 10].className = 'ship_wrapper_oneShip threeBoardDj';
                    allShipWrapper[index + 20].className = 'ship_wrapper_oneShip threeBoardDj';
                }
            }
    }
    )}

        //ARRAY FOR FORE BOARD LOGIC CHOICE START GAME
const foreBoardShipOne = document.getElementById('fore_ship');
function MapBoardForForeBoardDj(boardd)
{
    ArrayGridDj.forEach((node, index) => 
    { if( //HORIZONTAL ORINTAION
          node.classList.contains('ship_wrapper_oneShip')
          && node.classList.contains('foreBoardDj')
          && node.classList.contains('controlPoint')
          && !boardd.classList.contains('element_90deg')
        ) 
          { if(
              index === 9 || index === 19 || index === 29 || index === 39
              || index === 49 || index === 59 || index === 69 || index === 79
              || index === 89 || index === 99 || index === 8 || index === 18
              || index === 28 || index === 38 || index === 48 || index === 58
              || index === 68 || index === 78 || index === 88 || index === 98
              || index === 7 || index === 17 || index === 27 || index === 37
              || index === 47 || index === 57 || index === 67 || index === 77 
              || index === 87 || index === 97
              )
                {
                allShipWrapper[index].className = 'ship_wrapper';
                alert("Выберите другую клетку!");
                } else if(
                   index === 10 || index === 20 || index === 30
                   || index === 40 || index === 50 || index === 60 || index === 70
                   || index === 80
                 ) {
                   if(
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 8].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 7].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 6].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 3].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 4].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 12].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 13].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 14].classList.contains('ship_wrapper_oneShip')
                    ){
                      allShipWrapper[index].className = 'ship_wrapper';
                      alert("Выберите другую клетку!");
                    } else {
                      allShipWrapper[index].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 1].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 2].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 3].className = 'ship_wrapper_oneShip foreBoardDj';
                    }
                 } else if(index === 0){
                   if(
                    allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 3].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 4].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 12].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 13].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 14].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip foreBoardDj';
                    allShipWrapper[index + 1].className = 'ship_wrapper_oneShip foreBoardDj';
                    allShipWrapper[index + 2].className = 'ship_wrapper_oneShip foreBoardDj';
                    allShipWrapper[index + 3].className = 'ship_wrapper_oneShip foreBoardDj';
                 }
                 } else if(index === 90){
                   if(
                    allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 3].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 4].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 8].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 7].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 6].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip foreBoardDj';
                    allShipWrapper[index + 1].className = 'ship_wrapper_oneShip foreBoardDj';
                    allShipWrapper[index + 2].className = 'ship_wrapper_oneShip foreBoardDj';
                    allShipWrapper[index + 3].className = 'ship_wrapper_oneShip foreBoardDj';
                 }
                 } else if(
                            index === 91 || index === 92 || index === 93 
                            || index === 94 || index === 95
                  ){
                    if(
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 3].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 4].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 8].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 7].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 6].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip')
                    ){
                      allShipWrapper[index].className = 'ship_wrapper';
                      alert("Выберите другую клетку!");
                    } else {
                      allShipWrapper[index].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 1].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 2].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 3].className = 'ship_wrapper_oneShip foreBoardDj';
                    }
                 } else if( index === 96){
                   if(
                    allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 3].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 8].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 7].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip foreBoardDj';
                    allShipWrapper[index + 1].className = 'ship_wrapper_oneShip foreBoardDj';
                    allShipWrapper[index + 2].className = 'ship_wrapper_oneShip foreBoardDj';
                    allShipWrapper[index + 3].className = 'ship_wrapper_oneShip foreBoardDj';
                 }
                 } else if(
                   index === 1 || index === 2 || index === 3 || index === 4
                   || index === 5 
                 ) {
                   if(
                    allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 3].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 4].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 12].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 13].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 14].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip foreBoardDj';
                    allShipWrapper[index + 1].className = 'ship_wrapper_oneShip foreBoardDj';
                    allShipWrapper[index + 2].className = 'ship_wrapper_oneShip foreBoardDj';
                    allShipWrapper[index + 3].className = 'ship_wrapper_oneShip foreBoardDj';
                 }
                 } else if ( index === 6){
                   if(
                    allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 3].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 12].classList.contains('ship_wrapper_oneShip') ||
                    allShipWrapper[index + 13].classList.contains('ship_wrapper_oneShip')
                   ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");
                   } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip foreBoardDj';
                    allShipWrapper[index + 1].className = 'ship_wrapper_oneShip foreBoardDj';
                    allShipWrapper[index + 2].className = 'ship_wrapper_oneShip foreBoardDj';
                    allShipWrapper[index + 3].className = 'ship_wrapper_oneShip foreBoardDj';
                 }
                 }

                else if(
                  allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 2].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 3].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 4].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 8].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 7].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 6].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 12].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 13].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 14].classList.contains('ship_wrapper_oneShip')
                ){
                  allShipWrapper[index].className = 'ship_wrapper';
                  alert("Выберите другую клетку!");  
                } else {
                  allShipWrapper[index].className = 'ship_wrapper_oneShip foreBoardDj';
                  allShipWrapper[index + 1].className = 'ship_wrapper_oneShip foreBoardDj';
                  allShipWrapper[index + 2].className = 'ship_wrapper_oneShip foreBoardDj';
                  allShipWrapper[index + 3].className = 'ship_wrapper_oneShip foreBoardDj';
            }
          } else if (
            node.classList.contains('ship_wrapper_oneShip')
            && node.classList.contains('foreBoardDj')
            && node.classList.contains('controlPoint')
            && boardd.classList.contains('element_90deg')
            ) 
            { if(
                index === 90 || index === 91 || index === 92 || index === 93
                || index === 94 || index === 95 || index === 96 || index === 97
                || index === 98 || index === 99 || index === 80 || index === 81 
                || index === 82 || index === 83|| index === 84 || index === 85 
                || index === 86 || index === 87|| index === 88 || index === 89
                || index === 70 || index === 71|| index === 72 || index === 73 
                || index === 74 || index === 75|| index === 76 || index === 77
                || index === 78 || index === 79
                )
                {
                allShipWrapper[index].className = 'ship_wrapper';
                alert("Выберите другую клетку!");
                } 
              else if(
                  index === 19 || index === 29 || index === 39
                  || index === 49 || index === 59
                  ){
                    if(
                      allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 19].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 29].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 30].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 39].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 40].classList.contains('ship_wrapper_oneShip')
                    ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                    } else{
                      allShipWrapper[index].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 20].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 30].className = 'ship_wrapper_oneShip foreBoardDj';
                    }
                  }
              else if(index === 9){
                    if(
                      allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 19].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 29].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 30].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 39].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 40].classList.contains('ship_wrapper_oneShip')
                      ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                        } 
                    else {
                      allShipWrapper[index].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 20].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 30].className = 'ship_wrapper_oneShip foreBoardDj';
                          }
                       } 
              else if(index === 69){
                    if(
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 19].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 29].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 30].classList.contains('ship_wrapper_oneShip')
                      ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                        } 
                    else {
                      allShipWrapper[index].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 20].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 30].className = 'ship_wrapper_oneShip foreBoardDj';
                          }
                       }
              else if(
                  index === 10 || index === 20 || index === 30
                  || index === 40 || index === 50 
                  ){
                    if(
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 21].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 30].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 31].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 40].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 41].classList.contains('ship_wrapper_oneShip')
                    ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                    } else{
                      allShipWrapper[index].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 20].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 30].className = 'ship_wrapper_oneShip foreBoardDj';
                    }
                  }
              else if(
                  index === 0
                  ){
                    if(
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 21].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 30].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 31].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 31].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 40].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 41].classList.contains('ship_wrapper_oneShip')

                    ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                    } else{
                      allShipWrapper[index].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 20].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 30].className = 'ship_wrapper_oneShip foreBoardDj';
                    }
                  }
              else if(
                  index === 60
                  ){
                    if(
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 21].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 30].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 31].classList.contains('ship_wrapper_oneShip')
                    ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                    } else{
                      allShipWrapper[index].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 20].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 30].className = 'ship_wrapper_oneShip foreBoardDj';
                    }
                  }
              else if(
                  index === 61 || index === 62 || index === 63 || index === 64
                  || index === 65 || index === 66 || index === 67 || index === 68
                  ){
                    if(
                      allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 19].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 21].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 29].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 30].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 31].classList.contains('ship_wrapper_oneShip')
                    ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                    } else{
                      allShipWrapper[index].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 20].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 30].className = 'ship_wrapper_oneShip foreBoardDj';
                    }
                  }
              else if(
                  index === 1 || index === 2 || index === 3 || index === 4
                  || index === 5 || index === 6 || index === 7 || index === 8
                  ){
                    if(
                      allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 19].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 21].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 29].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 30].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 31].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 39].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 40].classList.contains('ship_wrapper_oneShip') ||
                      allShipWrapper[index + 41].classList.contains('ship_wrapper_oneShip')
                    ){
                        allShipWrapper[index].className = 'ship_wrapper';
                        alert("Выберите другую клетку!");
                    } else{
                      allShipWrapper[index].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 10].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 20].className = 'ship_wrapper_oneShip foreBoardDj';
                      allShipWrapper[index + 30].className = 'ship_wrapper_oneShip foreBoardDj';
                    }
                  }

                  else if(
                  allShipWrapper[index - 1].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 9].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 10].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index - 11].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 1].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 9].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 10].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 11].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 19].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 20].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 21].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 29].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 30].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 31].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 39].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 40].classList.contains('ship_wrapper_oneShip') ||
                  allShipWrapper[index + 41].classList.contains('ship_wrapper_oneShip')
              ){
                    allShipWrapper[index].className = 'ship_wrapper';
                    alert("Выберите другую клетку!");  
                  } else {
                    allShipWrapper[index].className = 'ship_wrapper_oneShip foreBoardDj';
                    allShipWrapper[index + 10].className = 'ship_wrapper_oneShip foreBoardDj';
                    allShipWrapper[index + 20].className = 'ship_wrapper_oneShip foreBoardDj';
                    allShipWrapper[index + 30].className = 'ship_wrapper_oneShip foreBoardDj';
                }
            }
    }
    )}


//Function for notWar or zero condition
//include all map for iteration for R2D2
function notWarPoint(map) {
  map.forEach((value) => {
    if(!allShipWrapperr2d2[value].classList.contains("zero")
    && !allShipWrapperr2d2[value].classList.contains("dj_One_shot")
    && !allShipWrapperr2d2[value].classList.contains("notWar")
    && !allShipWrapperr2d2[value].classList.contains("oneBoardR2")
    && !allShipWrapperr2d2[value].classList.contains("ship_wrapper_oneShip_r2d2")
    && !allShipWrapperr2d2[value].classList.contains("twoBoardR2")
    && !allShipWrapperr2d2[value].classList.contains("threeBoardR2")
    && !allShipWrapperr2d2[value].classList.contains("foreBoardR2")
    
    ){
    allShipWrapperr2d2[value].classList.add("notWar");
    }
   })
}

//include all map for iteration for DJEDAI
function notWarPointDj(map) {
  map.forEach((value) => {
    if(!allShipWrapper[value].classList.contains("zero")
    && !allShipWrapper[value].classList.contains("r2_One_shot")
    && !allShipWrapper[value].classList.contains("notWar")
    && !allShipWrapper[value].classList.contains("oneBoardDj")
    && !allShipWrapper[value].classList.contains("ship_wrapper_oneShip")
    && !allShipWrapper[value].classList.contains("twoBoardDj")
    && !allShipWrapper[value].classList.contains("threeBoardDj")
    && !allShipWrapper[value].classList.contains("foreBoardDj")
    
    ){
    allShipWrapper[value].classList.add("notWar");
    }
   })
}
// function shout (){
//   randomClearShout();
//   clearMapGridForShout();
//   randomNumberShout = randomClearShout();
//   if(allShipWrapper[randomNumberShout].classList.contains('ship_wrapper_oneShip')){
//     allShipWrapper[randomNumberShout].className = 'r2_One_shot';
//     // allShipWrapper[randomNumberShout].classList.add("r2_One_shot");
//   } else if(!allShipWrapper[randomNumberShout].classList.contains('ship_wrapper_oneShip'))
//   allShipWrapper[randomNumberShout].classList.add("zero");

// FULL VERSION OF SHUTTER GRID
function shutter ({target:gridElement}){
  if(  choice.style.display == "none"){
    if(gridElement.classList.contains('ship_wrapper_oneShip_r2d2') 
      ){
        gridElement.classList.add("dj_One_shot");
    } else if(gridElement.classList.contains('notWar')) {
      
    }else if(gridElement.classList.contains('zero')) {
      
    }
    else if(!gridElement.classList.contains('ship_wrapper_oneShip_r2d2'))
    {
      gridElement.classList.add("zero");
      youLose();
      shout ();
    }
  }
  
  mapOneBoardSHoutR2();
  notWarPoint(mapShouterOneBoardR2);
  mapShoutTwoBoardn1('tbn1', 'twoBoardR2');
  mapShoutTwoBoardn1('tbn2', 'twoBoardR2');
  mapShoutTwoBoardn1('tbn3', 'twoBoardR2');
  mapShoutTwoBoardn1('thbn1', 'threeBoardR2');
  mapShoutTwoBoardn1('thbn2', 'threeBoardR2');
  mapShoutTwoBoardn1('fb', 'foreBoardR2');
  notWarPoint(mapShouterTwoBoardR2);
  notWarPoint(mapShouterThreeBoardR2);
  notWarPoint(mapShouterForeBoardR2); 
  mapOneBoardSHoutDj();
  notWarPointDj(mapShouterOneBoardDj);
  mapTwoBoardSHoutDj();
  notWarPointDj(mapShouterTwoBoardDj);
  mapThreeBoardSHoutDj();
  notWarPointDj(mapShouterThreeBoardDj);
  mapForeBoardSHoutDj();
  notWarPointDj(mapShouterForeBoardDj);
  youWin();
}

allShipWrapperr2d2.forEach((el)=> {
  el.addEventListener('click', shutter)
})

