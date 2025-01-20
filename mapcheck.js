AFRAME.registerComponent('mapcheck', {
    init: function () {
      const sceneEl = this.el.sceneEl;
        

      const linkEls = document.querySelectorAll('.link');
        
      if(!linkEls) {
        return;
      }
      sceneEl.addEventListener('enter-vr', () => {
        console.log("IS AR: ", sceneEl.isAR)
        const isAR = sceneEl.xrSession && sceneEl.xrSession.mode === 'immersive-ar';
        if (isAR) {
          console.log('AR-Modus aktiviert');
          linkEls.forEach(link => {
            link.setAttribute('visible', 'false');
        })
        } else {
            linkEls.forEach(link => {
                link.setAttribute('visible', 'true');
            })
          console.log('VR-Modus aktiviert');
        }
      });

    }
  });
  