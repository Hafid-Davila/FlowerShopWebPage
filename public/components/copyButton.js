// Selecciona todos los botones de copia en la página
let copyButtons = document.querySelectorAll('.card-button');

copyButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Prevent the button's default click behavior
        e.preventDefault();

        // Accede a los elementos h3 y p dentro de la tarjeta
        let card = this.closest('.card');
        let h3Text = card.querySelector('h3').textContent;
        let pText = card.querySelector('p').textContent;
        
        let copiedText = `${h3Text} ${pText}`;

        let input = document.createElement('input');
        input.value = copiedText;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);

        // Dentro del listener del botón
        Swal.fire({
            title: 'Nombre del artículo copiado al portapapeles. Redirigiendo a la sección de "Entrega a Domicilio".',
            text: copiedText,
            icon: 'success',
            timer: 3000,
            showConfirmButton: true
        }).then((result) => {
            // Redirige después de cerrar el SweetAlert
            window.location.href = "/pages/contact.html";
        });

    });
});
