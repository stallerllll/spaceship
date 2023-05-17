
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

let lineHeight;



const meteorites = [];

const meteoritesOne = {
  element : null,
  position : null,

  startAction : function() {
    if (randomNumber == 1 || randomNumber == 2) {
      const innerSpace = document.querySelector('.innerSpace');
      const newDiv = document.createElement('div')
      newDiv.classList.add('move');
      newDiv.style.top = lineHeight + 'px';
      innerSpace.appendChild(newDiv);

      this.element = newDiv;

      meteorites.push(newDiv);

     

      this.position = setInterval(function() {
        const x = parseInt(window.getComputedStyle(meteoritesOne.element).getPropertyValue('left'));
        const y = parseInt(window.getComputedStyle(meteoritesOne.element).getPropertyValue('top'));
        let innerPositionShipY =  parseInt(window.getComputedStyle(document.getElementById('ourShip')).getPropertyValue('top'));

        if (y == innerPositionShipY && x > 0 && x < 155) {
          alert('Stop')
        }
      }, 10);
    }
     
  }
}



  setInterval(function() {
    for (let i = 0; i < meteorites.length; i++) {
      const x = parseInt(window.getComputedStyle(meteorites[i]).getPropertyValue('left'));
      
      if (x < 0) {
        meteorites[i].remove();
        meteorites.splice(i, 1);
      }
    }
    ship.checkBounds();
}, 10);

let randomNumber = 0;

function randomize() {
  let min = 1;
  let max = 2;
  randomNumber = Math.floor(Math.random() * (max - min + 1) + min);


    meteoritesOne.startAction();

}

setInterval(function() {
  console.log(randomNumber, lineHeight);
  randomize();
}, 2000);

if (randomNumber === 1) { 
  const line = parseInt(window.getComputedStyle(document.getElementById('lineOne')).getPropertyValue('top'));
  lineHeight = line - 50;
} else if (randomNumber === 2) {
  const line = parseInt(window.getComputedStyle(document.getElementById('lineOne')).getPropertyValue('top'));
  lineHeight = line + 50;
}

