AFRAME.registerComponent('controller-click', {
    init: function () {
      const sceneEl = this.el.sceneEl;
  
      // Event-Listener für Maus-Klicks (Browser)
      window.addEventListener('click', () => {
        console.log('Mausklick erkannt!');
        this.handleClick();
      });
  
      // Event-Listener für Controller-Button-Press
      sceneEl.addEventListener('controllerconnected', (evt) => {
        const controller = evt.detail.name;
        console.log(`Controller verbunden: ${controller}`);
  
        this.el.addEventListener('triggerdown', () => {
          console.log('Controller-Button gedrückt!');
          this.handleClick();
        });
      });
    },
  
    handleClick: function () {
      // Logik für das Click-Event hier
      console.log('Click-Event ausgelöst!');
      // Beispiel: Interagiere mit einem Cube oder führe eine Aktion aus
      const intersectedEl = document.querySelector('[cursor]').components.raycaster.getIntersection(document.querySelector('.cubes'));
      if (intersectedEl) {
        console.log('Interaktion mit:', intersectedEl.object.el);
        intersectedEl.object.el.emit('click'); // Click-Event auf Cube auslösen
      }
    }
  });