document.addEventListener('DOMContentLoaded', function() {
    loadContenido();
});

function loadContenido() {
    fetch('inicio.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contenido').innerHTML = data;
        })
        .catch(error => console.error('Error loading contenido:', error));
}
