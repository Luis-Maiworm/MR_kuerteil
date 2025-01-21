AFRAME.registerComponent('controller-click', {
    init: function () {
      const sceneEl = this.el.sceneEl;

    },
    
    tick: function () {
        const gamepads = navigator.getGamepads();
        // console.log("Gamepads: ", gamepads)
        if(!gamepads || !gamepads[0]) return;

        const gamepad = gamepads[0];
        if (gamepad.buttons[0].pressed || gamepad.buttons[1] || gamepad.buttons[2] || gamepad.buttons[3]) {
          this.handleClick();
          console.log("Button Pressed")
        }
    },
  
    handleClick: function () {
      // Logik für das Click-Event hier
      console.log('Click-Event ausgelöst!');
      const cursor = document.querySelector('[cursor]');
      if (!cursor) {
        console.error('Cursor nicht gefunden.');
        return;
      }
  
      const raycaster = cursor.components.raycaster;
      const intersectedEl = raycaster.getIntersection(document.querySelector('.links'));
  
      if (intersectedEl) {
        console.log('Interaktion mit:', intersectedEl.object.el);
        intersectedEl.object.el.emit('click');
      } else {
        console.log('Keine Interaktion erkannt.');
      }
    }
  });
  