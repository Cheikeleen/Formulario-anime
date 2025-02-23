function mostrarAlerta() {
    const username = document.getElementById('username').value;
    const telefono = document.getElementById('telefono').value;
    const fecha = document.getElementById('fecha').value;
    const opciones = document.getElementById('opciones').selectedOptions;
    const numero = document.getElementById('numero').value;
    const peorParte = document.querySelector('input[name="peor_parte"]:checked');

    if (username === '' || telefono === '' || fecha === '' || opciones.length === 0 || numero === '' || !peorParte) {
        alert('Por favor, rellene todos los campos.');
    } else {
        alert('¡Formulario registrado!');
        document.querySelector('form').submit();  
    }
}