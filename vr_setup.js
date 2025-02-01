AFRAME.registerComponent('vrsetup', {
    init: function () {
      const sceneEl = this.el.sceneEl;
      const links = document.querySelectorAll('.link');
      const sky = document.getElementById('image-360');
      
      if(!sky) {
        return;
      }
      sceneEl.addEventListener('enter-vr', () => {
        const isAR = sceneEl.is('ar-mode');
        
        if (isAR) {
          this.enterAr(sky, links)
        } else {
          this.enterVr(sky, links)
        }
      });
    },
    enterAr: function (sky, links) {
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
  