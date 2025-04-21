// Script para el control de cambio de tema (claro/oscuro/auto)

document.addEventListener('DOMContentLoaded', function() {
    const autoButton = document.getElementById('auto-theme');
    const lightButton = document.getElementById('light-theme');
    const darkButton = document.getElementById('dark-theme');
    
    // Verificar si hay una preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    
    // Aplicar tema guardado o detectar preferencia del sistema
    if (savedTheme) {
        document.body.className = savedTheme;
        activateButton(savedTheme);
    } else {
        // Por defecto mantener tema oscuro
        document.body.className = 'dark';
        activateButton('dark');
    }
    
    // Funciones para cambiar tema
    autoButton.addEventListener('click', function() {
        document.body.className = 'auto';
        localStorage.setItem('theme', 'auto');
        activateButton('auto');
    });
    
    lightButton.addEventListener('click', function() {
        document.body.className = 'light';
        localStorage.setItem('theme', 'light');
        activateButton('light');
    });
    
    darkButton.addEventListener('click', function() {
        document.body.className = 'dark';
        localStorage.setItem('theme', 'dark');
        activateButton('dark');
    });
    
    // Función para destacar el botón activo
    function activateButton(theme) {
        // Remover clase active de todos los botones
        autoButton.classList.remove('active');
        lightButton.classList.remove('active');
        darkButton.classList.remove('active');
        
        // Añadir clase active al botón correspondiente
        if (theme === 'auto') {
            autoButton.classList.add('active');
        } else if (theme === 'light') {
            lightButton.classList.add('active');
        } else {
            darkButton.classList.add('active');
        }
    }
});
