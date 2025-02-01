AFRAME.registerComponent('controller', {
    init: function () {
      this.el.addEventListener('triggerdown', () => {
        this.handleClick();
      })
    },

    handleClick: function () {
      console.log('Click-Event ausgelöst!');
      const cursor = document.querySelector('[cursor]');
      if (!cursor) {
        console.error('Cursor nicht gefunden.');
        return;
      }
  
      const raycaster = cursor.components.raycaster;
      const intersectedEls = raycaster.intersectedEls;
      const link = intersectedEls.find(el => el.classList.contains('link') ||el.id == 'startGameButton')
      if (link) {
        link.emit('click');
      }
    }
  });
  