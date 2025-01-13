// random num generator
function getRandomNumber(value, offset) {
    return Math.floor(Math.random() * value + offset);
  }
  
// get either red or blue
function getRedOrBlue() {
  return getRandomNumber(10, 0) > 5 ? "blue" : "red";
}

function isDestroyable() {
  return getRandomNumber(10, 0) > 5;
}

  AFRAME.registerComponent('cubespawner', {
    init: function() {
      this.timeStep = 0;
      this.isSpawning = false;
    },
    
    startSpawning: function () {
      this.isSpawning = true;
    },

    stopSpawning: function () {
      this.isSpawning = false;
    },

    tick: function (time, timeDelta) {
      if(!this.isSpawning) {
        return;
      }

      if (this.timeStep < 1000) {
        this.timeStep += timeDelta;
        return;
      }
      this.timeStep = 0;
      
      var cubeEl = this.el.components.pool__cubes.requestEntity();
      if (!cubeEl) {
        return;
      }
      
      var positionX = getRandomNumber(3, -1);
      var positionY = getRandomNumber(1, 0.5);
      var positionZ = -25;
      
      // var cubeColor = getRedOrBlue();
      var destroyable = isDestroyable()

      cubeEl.setAttribute('position', {x: positionX, y: positionY, z: positionZ});
      // cubeEl.setAttribute('class', 'cubes' + (destroyable ? 'destroyable' : ''));
      if(destroyable) {
        cubeEl.setAttribute('material', `color: red`);
        cubeEl.setAttribute('class', (destroyable ? 'destroyable' : ''));
      } else {
        cubeEl.setAttribute('material', `color: white`);
      }
      console.log("Cube created: ", cubeEl)
      cubeEl.play();
    }
  });