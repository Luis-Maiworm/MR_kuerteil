
document.addEventListener('DOMContentLoaded', () => {
    const startGame = document.querySelector('#startGameButton');
    const links = document.querySelector('#links');
    const camera = document.querySelector('[camera]');
    const settingsWrapper = document.querySelector('#settingsWrapper');
    const spawner = document.querySelector("[cubespawner]");
    console.log(camera)
    

    // Add event listener to the button
    startGame.addEventListener('click', () => {
        console.log("Start Button: Click!")
        // Hide links
        links.setAttribute('visible', 'false');
        settingsWrapper.setAttribute('visible', 'false');
        spawner.components.cubespawner.startSpawning();

        // //rotating or let user look in correct direction? 
        // camera.setAttribute('look-controls', 'enabled', 'false')
        // camera.setAttribute('rotation', '0 180 0')

      console.log('Links hidden and camera moved!');
    });
});