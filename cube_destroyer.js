
AFRAME.registerComponent('cubedestroyer', {
    init: function() {
      const el = this.el;
      const destroyCube = this.destroyCube.bind(this);

      el.addEventListener('raycaster-intersected', function() {
        if(!el.getAttribute('visible')) return;
        if(el.classList.contains('ray-destroy')){
          destroyCube(true);
        }
      })

      el.addEventListener('click', function () {
        if(el.classList.contains('saber-destroy')){
          destroyCube(true);
        }
      })

    },

    tick: function () {
      this.position = this.el.getAttribute('position');
      if (this.position.z >= 10) {
        this.destroyCube(false);
      }
    },

    destroyCube: function (isPositive) {
      const score = this.el.sceneEl.systems['scoresystem'];
      if(isPositive) { score.addScore(1) }
      else score.minusScore(1);
      this.el.sceneEl.components.pool__cubes.returnEntity(this.el);
      this.el.setAttribute('visible', false);
    }

});

