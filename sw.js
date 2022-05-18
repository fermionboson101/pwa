self.addEventListener('install', (event) => {
    console.log('sw installed', event);
});

self.addEventListener('active', (event) => {
    console.log('sw activated!!', event);
})