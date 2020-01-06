// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

document.addEventListener('DOMContentLoaded', () => {
    const validate = document.querySelector('#validate');
    const badgeCount = document.querySelector('#badgeCount');
    validate.addEventListener('click', (event) => {
        window.ipcRenderer.send('badgeCount', parseInt(badgeCount.value));
    }, false);
});