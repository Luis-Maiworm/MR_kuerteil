
AFRAME.registerComponent('scoreboard', {
    schema: {
        position: { type: 'vec3', default: { x: 0, y: 2, z: -3 } }, // Position des Scoreboards
        color: { type: 'color', default: '#FFFFFF' } // Textfarbe
    },
    
    init: function () {
        // const spawner = document.querySelector("#scoreboard");
        console.log("Spawner")
        this.el.setAttribute('text', 'value: Score: 0');
        this.el.setAttribute('color', this.data.color);
        //   this.el.appendChild(this.textEl);
    
        // Event-Listener für Score-Updates
        this.el.sceneEl.addEventListener('update_score', (event) => {
            const newScore = event.detail.score;
            console.log("SCOREBOARD", newScore)
            this.el.setAttribute('text', `value: Score: ${newScore}`);
        });
    }
  });