AFRAME.registerComponent('saber', {
    schema: {type: 'string'},
    
    init: function() {
      var saberEl = this.el;
      var saberColor = this.data;
      
      saberEl.addEventListener('hitstart', function () {
        var obj = saberEl.components['aabb-collider']['intersectedEls'][0];
        var mat = obj.getAttribute('material');
        console.log("HITSTART: ", obj)
        if(obj.classList.contains('saber-destroy')){
          if (saberColor == mat.color) {
            saberEl.sceneEl.systems['scoresystem'].addScore(1);
            saberEl.sceneEl.components.pool__cubes.returnEntity(obj);
            obj.classList.remove('raycastable')
            const audioElement = document.getElementById('cube-destroy-sound')
            if (audioElement) {
              // audioElement.loop = true;
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
        }
      });
    },

});