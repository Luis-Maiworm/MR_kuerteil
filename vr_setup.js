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
          this.enterAr(sky)
        } else {
          this.enterAr(sky)
          // this.enterVr(sky)
        }
      });
    },
    enterAr: function (sky) {
      sky.setAttribute('src', '')
      sky.setAttribute('visible', 'false')
    },

    enterVr: function (sky) {
      sky.setAttribute('visible', 'true')
      console.log('VR-Modus aktiviert');
    },
  });
  