//three ship notWar
let mapShouterThreeBoardDj = [];
function mapThreeBoardSHoutDj() {
  mapShouterThreeBoardDj = [];
  ArrayGridDj.forEach((node, index) => {
    if (node.classList.contains('r2_One_shot')
      && node.classList.contains('ship_wrapper_oneShip')
      && node.classList.contains('threeBoardDj')) {
      if ((index === 0 && index === 1) || (index === 0 && index === 10)) {
        mapShouterThreeBoardDj.push(index + 1);
        mapShouterThreeBoardDj.push(index + 10);
        mapShouterThreeBoardDj.push(index + 11);
      } else if ((index === 9 & index === 8) || (index === 9 && index === 19)) {
        mapShouterThreeBoardDj.push(index - 1);
        mapShouterThreeBoardDj.push(index + 10);
        mapShouterThreeBoardDj.push(index + 9);
      } else if ((index === 90 && index === 91) || (index === 90 && index === 80)) {
        mapShouterTwoBoardDj.push(index + 1);
        mapShouterTwoBoardDj.push(index - 10);
        mapShouterTwoBoardDj.push(index - 9);
      } else if ((index === 98 && index === 99) || (index === 99 && index === 89)) {
        mapShouterTwoBoardDj.push(index - 1);
        mapShouterTwoBoardDj.push(index - 10);
        mapShouterTwoBoardDj.push(index - 9);
      } else if ((index === 1 && index === 2) || (index === 2 && index === 3)
        || (index === 3 && index === 4) || (index === 4 && index === 5)
        || (index === 5 && index === 6) || (index === 6 && index === 7)
        || (index === 7 && index === 8)) {
        mapShouterTwoBoardDj.push(index - 1);
        mapShouterTwoBoardDj.push(index + 1);
        mapShouterTwoBoardDj.push(index + 9);
        mapShouterTwoBoardDj.push(index + 10);
        mapShouterTwoBoardDj.push(index + 11);
      } else if ((index === 10 && index === 20) || (index === 20 && index === 30)
        || (index === 30 && index === 40) || (index === 40 && index === 50)
        || (index === 50 && index === 60) || (index === 60 && index === 70)
        || (index === 70 && index === 80)) {
        mapShouterTwoBoardDj.push(index - 10);
        mapShouterTwoBoardDj.push(index + 1);
        mapShouterTwoBoardDj.push(index - 9);
        mapShouterTwoBoardDj.push(index + 10);
        mapShouterTwoBoardDj.push(index + 11);
      } else if ((index === 91 && index === 92) || (index === 92 && index === 93)
        || (index === 93 && index === 94) || (index === 94 && index === 95)
        || (index === 95 && index === 96) || (index === 96 && index === 97)
        || (index === 97 && index === 98)) {
        mapShouterTwoBoardDj.push(index - 1);
        mapShouterTwoBoardDj.push(index - 11);
        mapShouterTwoBoardDj.push(index - 10);
        mapShouterTwoBoardDj.push(index - 9);
        mapShouterTwoBoardDj.push(index + 1);
      } else if ((index === 19 && index === 29) || (index === 29 && index === 39)
        || (index === 39 && index === 49) || (index === 49 && index === 59)
        || (index === 59 && index === 69) || (index === 69 && index === 79)
        || (index === 79 && index === 89)) {
        mapShouterTwoBoardDj.push(index - 10);
        mapShouterTwoBoardDj.push(index - 11);
        mapShouterTwoBoardDj.push(index - 1);
        mapShouterTwoBoardDj.push(index + 9);
        mapShouterTwoBoardDj.push(index + 10);
      } else if (index === 1 || index === 2 || index === 3
        || index === 4 || index === 5 || index === 6
        || index === 7 || index === 8) {
        mapShouterTwoBoardDj.push(index - 1);
        mapShouterTwoBoardDj.push(index + 1);
        mapShouterTwoBoardDj.push(index + 9);
        mapShouterTwoBoardDj.push(index + 10);
        mapShouterTwoBoardDj.push(index + 11);
      } else if (index === 10 || index === 20 || index === 30
        || index === 40 || index === 50 || index === 60
        || index === 70 || index === 80) {
        mapShouterTwoBoardDj.push(index - 10);
        mapShouterTwoBoardDj.push(index + 1);
        mapShouterTwoBoardDj.push(index - 9);
        mapShouterTwoBoardDj.push(index + 10);
        mapShouterTwoBoardDj.push(index + 11);
      } else if (index === 91 || index === 92 || index === 93
        || index === 94 || index === 95 || index === 96
        || index === 97 || index === 98) {
        mapShouterTwoBoardDj.push(index - 1);
        mapShouterTwoBoardDj.push(index - 11);
        mapShouterTwoBoardDj.push(index - 10);
        mapShouterTwoBoardDj.push(index - 9);
        mapShouterTwoBoardDj.push(index + 1);
      } else if (index === 19 || index === 29 || index === 39
        || index === 49 || index === 59 || index === 69
        || index === 79 || index === 89) {
        mapShouterTwoBoardDj.push(index - 10);
        mapShouterTwoBoardDj.push(index - 11);
        mapShouterTwoBoardDj.push(index - 1);
        mapShouterTwoBoardDj.push(index + 9);
        mapShouterTwoBoardDj.push(index + 10);
      } else if (index === 0) {
        mapShouterTwoBoardDj.push(index + 1);
        mapShouterTwoBoardDj.push(index + 10);
        mapShouterTwoBoardDj.push(index + 11);
      } else if (index === 9) {
        mapShouterTwoBoardDj.push(index - 1);
        mapShouterTwoBoardDj.push(index + 10);
        mapShouterTwoBoardDj.push(index + 9);
      } else if (index === 90) {
        mapShouterTwoBoardDj.push(index + 1);
        mapShouterTwoBoardDj.push(index - 10);
        mapShouterTwoBoardDj.push(index - 9);
      } else if (index === 99) {
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
