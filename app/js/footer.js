function loadFooter() {
    fetch('inc/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

window.onload = function() {
    loadFooter();
};
