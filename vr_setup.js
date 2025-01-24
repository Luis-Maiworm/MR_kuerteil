AFRAME.registerComponent('vrsetup', {
    init: function () {
      const sceneEl = this.el.sceneEl;


      const sky = document.getElementById('image-360');
        
      if(!sky) {
        return;
      }
      sceneEl.addEventListener('enter-vr', () => {
        console.log("IS AR: ", sceneEl.isAR)
        const xrSession = sceneEl.renderer.xr.getSession();
        console.log(xrSession)
        const mode = xrSession.environmentBlendMode;
        const isAR = mode && mode === 'immersive-ar';

        if (isAR) {
          this.enterAr()
        } else {
          this.enterVr()
        }
      });
    },
    enterAr: function () {
      this.sky.setAttribute('src', '')
      this.sky.setAttribute('visible', 'false')
    },

    enterVr: function () {
      this.sky.setAttribute('visible', 'true')
      console.log('VR-Modus aktiviert');
    },
  });
  