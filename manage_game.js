
// document.addEventListener('DOMContentLoaded', () => {
AFRAME.registerComponent('manage_game', {
  init: function () {

    this.startGame = document.querySelector('#startGameButton');
    this.links = document.querySelector('#links');
    this.settingsWrapper = document.querySelector('#settingsWrapper');
    this.scoreboard = document.querySelector('#scoreboard');
    this.audioElement = document.getElementById('geometry-dash-music')
    this.spawner = document.querySelector('[cubespawner]');
    this.scoreSystem = this.el.sceneEl.systems['[scoresystem]'];
    this.message = document.querySelector('#textMessage')

    this.startGame.addEventListener('click', () => {
        this.gameStart();
    });

    
    if(this.audioElement) {
      this.audioElement.addEventListener('ended', () => {
        this.el.emit('game_end', { positiveEnd: true });
      });
    }
    
    this.el.addEventListener('game_end', (event) => {
      const isPositiveEnd = event.detail.positiveEnd;
      this.gameEnd(isPositiveEnd);
    });
  },

  gameEnd: function (isPositiveEnd) {
    // show message regarding isFinished positive or nah
    this.spawner.components.cubespawner.stopSpawning();
    this.settingsWrapper.setAttribute('position', '0 1.6 0');
    let scoresystem = this.el.sceneEl.systems['scoresystem'];
    let score = scoresystem.getScore();
    scoresystem.resetScore();
    this.scoreboard.setAttribute('position', '0.2 1000 -8');
    this.audioElement.pause();
    this.audioElement.currentTime = 0;
  
    let message = isPositiveEnd ? 'You won, congratulations! Points: ' + score : 'Game Over! You Lost!'
    this.message.setAttribute('text', 'value: ' + message)
    this.message.setAttribute('visible', 'true');
    setTimeout(() => {
      this.message.setAttribute('visible', 'false');
    }, 5000)


  },
  
  gameStart: function () {
    
    this.scoreboard.setAttribute('position', '0.2 1 -8');
    this.settingsWrapper.setAttribute('position', '0 1000 0');
    if (this.audioElement) {
      // this.audioElement.loop = true;
      // audioElement.volume = 0.5;
      this.audioElement.play()
      .then(() => {
        console.log('Music started!');
      })
      .catch(error => {
        console.error('Error starting Music:', error);
      });
      // setTimeout(() => {
      //   this.audioElement.currentTime = this.audioElement.duration;
      // }, 5000)
    }
    this.spawner.components.cubespawner.startSpawning();
  }

});
// });