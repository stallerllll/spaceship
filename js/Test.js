


let innerPositionShipY =  parseInt(window.getComputedStyle(document.getElementById('ourShip')).getPropertyValue('top'));


const ship = {
    element : document.getElementById('ourShip'),
    position : {
      
      y : innerPositionShipY
    },
    move : function(x, y) {
      this.position.x += x;
      this.position.y += y;
      this.element.style.left = this.position.x + "px";
      this.element.style.top = this.position.y + "px";
    },
    checkBounds : function() {
      if (this.position.y < 0 || this.position.y > 550) {
        this.position.y = 300;
        this.move(0, 0);
      }
    }
  }
  
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowUp') {
    ship.move(0, -50);
  } else if (event.key === 'ArrowDown') {
    ship.move(0, 50);
  }
});

const meteorites = {
    element : document.getElementById('meteorites'),

    startAction : function() {
        if (randomNumber === 1){
            meteorites.element.classList.add('move', 'lineOne');
            setTimeout(function(){
              meteorites.element.classList.remove('move', 'lineOne')
          },2000)
        }
    },


  };

  const meteoritesTwo = {
    element : document.getElementById('meteorites2'),

    startAction : function() {
        if (randomNumber === 2){
          meteoritesTwo.element.classList.add('move');
          setTimeout(function(){
            meteoritesTwo.element.classList.remove('move')
          },2000)

        }
    },


  };

  const meteoritesWith = {
    element : document.getElementById('meteorites3'),

    startAction : function() {
        if (randomNumber === 3){
          meteoritesTwo.element.classList.add('move', 'lineWith');
          setTimeout(function(){
            meteoritesTwo.element.classList.remove('move', 'lineWith')
          },2000)

        }
    },


  };







  setInterval(function() {
    ship.checkBounds();
    const positionAllMeteorites = {
      meteoritesOneX : parseInt(window.getComputedStyle(document.getElementById('meteorites')).getPropertyValue('left')),
      meteoritesOneY : parseInt(window.getComputedStyle(document.getElementById('meteorites')).getPropertyValue('top')),
      meteoritesTwoX : parseInt(window.getComputedStyle(document.getElementById('meteorites2')).getPropertyValue('left')),
      meteoritesTwoY : parseInt(window.getComputedStyle(document.getElementById('meteorites2')).getPropertyValue('top')),
      meteoritesWithX : parseInt(window.getComputedStyle(document.getElementById('meteorites2')).getPropertyValue('left')),
      meteoritesWithY : parseInt(window.getComputedStyle(document.getElementById('meteorites2')).getPropertyValue('top'))
    }

    let innerPositionMeteoritesX;
    let innerPositionMeteoritesY;

    if(randomNumber == 1){
      innerPositionMeteoritesX = positionAllMeteorites.meteoritesOneX;
      innerPositionMeteoritesY = positionAllMeteorites.meteoritesOneX;

    }else if (randomNumber == 2){
      innerPositionMeteoritesX = positionAllMeteorites.meteoritesTwoX;
      innerPositionMeteoritesY = positionAllMeteorites.meteoritesTwoY;

    }else if (randomNumber == 3){
      innerPositionMeteoritesX = positionAllMeteorites.meteoritesWithX;
      innerPositionMeteoritesY = positionAllMeteorites.meteoritesWithY;

    };


    let innerPositionShipY =  parseInt(window.getComputedStyle(document.getElementById('ourShip')).getPropertyValue('top'));

    console.log(innerPositionMeteoritesX, innerPositionMeteoritesY,innerPositionShipY);

    if(innerPositionMeteoritesY == (innerPositionShipY - 50)   && innerPositionMeteoritesX > 0 && innerPositionMeteoritesX < 55){
       alert(2)
    }

}, 10);

  
  let randomNumber = 0;

  function randomize() {
    let min = 1;
    let max = 3;
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomNumber);
    meteorites.startAction(); 
    meteoritesTwo.startAction();
    meteoritesWith.startAction();
  }
  
  setInterval(function() {
    randomize();
  }, 2100);