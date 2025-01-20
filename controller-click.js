AFRAME.registerComponent('controller-click', {
    init: function () {
      const sceneEl = this.el.sceneEl;
  
      console.log('Controller-Click-Komponente initialisiert.');
  
      // Prüfe, ob ein Controller verbunden ist
      sceneEl.addEventListener('controllerconnected', (evt) => {
        console.log(`Controller verbunden: ${evt.detail.name}`);
      });
      sceneEl.addEventListener('gamepadbuttondown: 7', (evt) => {
        console.log(`Clicked the 7!!!: ${evt.detail.name}`);
      });
    },
  
    // tick: function () {
    //   // Rufe die Gamepads ab
    //   const gamepads = navigator.getGamepads();
  
    //   // Überprüfe, ob ein Controller verbunden ist
    //   if (!gamepads || !gamepads[0]) return;
  
    //   const gamepad = gamepads[0];
  
    //   // Prüfe, ob der X-Button (Button 2) gedrückt wird
    //   if (gamepad.buttons[2].pressed) {
    //     console.log('X-Button gedrückt!');
    //     this.handleClick();
    //   }
  
    //   // Prüfe, ob der Y-Button (Button 3) gedrückt wird
    //   if (gamepad.buttons[3].pressed) {
    //     console.log('Y-Button gedrückt!');
    //     this.handleClick();
    //   }
    // },
  
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
        intersectedEl.object.el.emit('click'); // Click-Event auf Cube auslösen
      } else {
        console.log('Keine Interaktion erkannt.');
      }
    }
  });
  