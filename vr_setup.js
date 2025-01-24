AFRAME.registerComponent('vrsetup', {
    init: function () {
      const sceneEl = this.el.sceneEl;
      
      const links = document.querySelectorAll('.link');
      
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
          
          this.enterAr(sky, links)
        } else {
          this.enterAr(sky, links)
          // const settingsWrapper = document.querySelector('#settingsWrapper');
          // settingsWrapper.components.layout.updateLayout();
          // this.enterVr(sky)
        }
      });
    },
    enterAr: function (sky, links) {
      // settingsWrapper.parentNode.removeChild(settingsWrapper)
      links.forEach(link => {
        link.parentNode.removeChild(link)
      })
      sky.setAttribute('src', '')
      sky.setAttribute('visible', 'false')
    },

    enterVr: function (sky) {
      sky.setAttribute('visible', 'true')
      console.log('VR-Modus aktiviert');
    },
  });
  