function playAudio(file) {
    var audioPlayer = document.getElementById('audioPlayer');
    var audioSource = document.getElementById('audioSource');
    audioSource.src = 'audio/' + file;
    audioPlayer.load();
    audioPlayer.play();
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
            console.log('ServiceWorker registered with scope:', registration.scope);
        })
        .catch((error) => {
            console.log('ServiceWorker registration failed:', error);
        });
    });
}
