function toggleMenu() {
    const panel = document.getElementById('sidePanel');
    if (panel.style.right === '0px') {
        panel.style.right = '-250px';
        document.getElementById('menu-toggle').innerText = '☰'; // Change icon to menu
        document.getElementById('menu-toggle').style.color = ''; // Reset icon color
    } else {
        panel.style.right = '0px';
        document.getElementById('menu-toggle').innerText = '✖'; // Change icon to close
        document.getElementById('menu-toggle').style.color = 'red'; // Change icon color to red
    }
}


function giveDlg() {
    document.querySelector('dialog').show();
}