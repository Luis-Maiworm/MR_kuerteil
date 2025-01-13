AFRAME.registerComponent('cubedestroyer', {
    init: function() {
      const el = this.el;
      el.addEventListener('raycaster-intersected', function() {
        console.log("INTERSECTED!", el)
        if(el.classList.contains('destroyable')){
          this.el.sceneEl.components.pool__cubes.returnEntity(this.el);
          // el.parentNode.removeChild(el);
        }
      })

    },
    
    tick: function () {
      this.position = this.el.getAttribute('position');
      if (this.position.z >= 10) {
        this.el.sceneEl.components.pool__cubes.returnEntity(this.el);
      }
    }
});