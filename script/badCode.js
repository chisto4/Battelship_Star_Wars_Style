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