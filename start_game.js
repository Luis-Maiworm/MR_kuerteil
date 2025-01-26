
// document.addEventListener('DOMContentLoaded', () => {
AFRAME.registerComponent('startgame', {
  init: function () {

    const startGame = document.querySelector('#startGameButton');
    const links = document.querySelector('#links');
    const settingsWrapper = document.querySelector('#settingsWrapper');
    const score = document.querySelector('#scoreboard');
    const audioElement = document.getElementById('geometry-dash-music')
    const spawner = document.querySelector("[cubespawner]");

    startGame.addEventListener('click', () => {
        console.log("Start Button: Click!")
        links.parentNode.removeChild(links)
        settingsWrapper.parentNode.removeChild(settingsWrapper)
        score.setAttribute('visible', true);

        if (audioElement) {
          audioElement.loop = true;
          audioElement.volume = 0.1;
          audioElement.play()
            .then(() => {
              console.log('Audio gestartet und wird geloopt!');
            })
            .catch(error => {
              console.error('Fehler beim Starten des Audios:', error);
            });
        }
      
        spawner.components.cubespawner.startSpawning();

      console.log('Links hidden and camera moved!');
    });
  }
});
// });