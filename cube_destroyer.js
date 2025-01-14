
AFRAME.registerComponent('cubedestroyer', {
    init: function() {
      const el = this.el;
      el.addEventListener('raycaster-intersected', function() {
        console.log("INTERSECTED!", el)
        if(!el.getAttribute('visible')) return;
        if(el.classList.contains('ray-destroy')){
          console.log("should be added")
          el.sceneEl.systems['scoresystem'].addScore(1);
          el.sceneEl.components.pool__cubes.returnEntity(el);
          el.setAttribute('visible', false);
        }
      })

    },

    tick: function () {
      this.position = this.el.getAttribute('position');
      if (this.position.z >= 10) {
        this.el.sceneEl.systems['scoresystem'].minusScore(1);
        this.el.sceneEl.components.pool__cubes.returnEntity(this.el);
        // as the component is still targetable by ray...
        this.el.setAttribute('visible', false);
      }
    },


    returnToPool: function () {
      /** TODO: Return to Pool + make sure that the cubes are no longer targetable by raycaster
       */
    }

});

