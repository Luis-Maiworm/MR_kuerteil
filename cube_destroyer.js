
AFRAME.registerComponent('cubedestroyer', {
    init: function() {
      const el = this.el;
      const destroyCube = this.destroyCube.bind(this);

      el.addEventListener('raycaster-intersected', function() {
        if(el.classList.contains('ray-destroy')){
          destroyCube(true);
        }
      })

      el.addEventListener('click', () => {
        if(el.classList.contains('saber-destroy')){
          destroyCube(true);
        }
      })

    },

    tick: function () {
      this.position = this.el.getAttribute('position');
      if (this.position.z >= 1) {
        this.destroyCube(false);
      }
    },

    destroyCube: function (isPositive) {

      const isRayCube = this.el.dataset.name == "rayCube";
      const points = isRayCube ? 2 : 1;
      const score = this.el.sceneEl.systems['scoresystem'];
      if(isPositive) { 
        score.addScore(points);
        this.playDestroySound();
      } else {
        score.minusScore(points); 
      }
      this.el.sceneEl.components.pool__cubes.returnEntity(this.el);
      this.el.classList.remove('ray-destroy');
      this.el.classList.remove('raycastable');
    },

    playDestroySound: function () {
      const audioElement = document.getElementById('cube-destroy-sound')
      if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.volume = 0.5;
        audioElement.play()
          .then(() => {
            console.log('Audio gestartet und wird geloopt!');
          })
          .catch(error => {
            console.error('Fehler beim Starten des Audios:', error);
          });
      }
    }

});

