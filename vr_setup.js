AFRAME.registerComponent('mapcheck', {
    init: function () {
      const sceneEl = this.el.sceneEl;
      const camera = document.querySelector('[camera]').setAttribute('position', { x: 5, y: 2, z: -3 });

      const linkEls = document.querySelectorAll('.link');
        
      if(!linkEls) {
        return;
      }
      sceneEl.addEventListener('enter-vr', () => {
        camera.setAttribute('position', {x: 0, y: -1.6, z: 0});

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
  