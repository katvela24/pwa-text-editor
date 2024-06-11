const butInstall = document.getElementById('buttonInstall');

// PWA logic. Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    butInstall.textContent = 'Install!'

});

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('😇', 'appinstalled', event);
});
