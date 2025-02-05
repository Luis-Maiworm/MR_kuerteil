export const cubeTypes = [
  {
    name: 'rayCube',
    classes: ['ray-destroy'],
    material: 'src: url(./assets/eye.svg); repeat: 1 1;',
    components: {
      cubemovement: {},
      cubedestroyer: {},
    }
  },
  {
    name: 'saberCubeRed',
    classes: ['saber-destroy'],
    material: 'color: red;',
    components: {
      cubemovement: {},
      cubedestroyer: {},
    }
  },
  {
    name: 'saberCubeBlue',
    classes: ['saber-destroy'],
    material: 'color: blue;',
    components: {
      cubemovement: {},
      cubedestroyer: {},
    }
  },
]

function getRandomNumber(value, offset) {
    return Math.floor(Math.random() * value + offset);
}
  
AFRAME.registerComponent('cubespawner', {
  init: function() {
    this.timeStep = 0;
    this.isSpawning = false;
  },

  configureCube: function (cubeEl) {
    const cubeConfig = cubeTypes[Math.floor(Math.random() * cubeTypes.length)]
    cubeEl.classList.add('raycastable')
    cubeEl.dataset.name = cubeConfig.name; 
    cubeEl.removeAttribute('material', 'src');
    cubeConfig.classes?.forEach(c => cubeEl.classList.add(c))

    if(cubeConfig.material) {
      cubeEl.setAttribute('material', cubeConfig.material)
    }

    for (const [component, value] of Object.entries(cubeConfig.components)) {
      cubeEl.setAttribute(component, value);
    }

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
    var positionY = getRandomNumber(1.5, 1);
    var positionZ = -10;

    cubeEl.setAttribute('position', {x: positionX, y: positionY, z: positionZ});

    this.configureCube(cubeEl);

    cubeEl.play();
  }
});