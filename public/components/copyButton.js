// Selecciona todos los botones de copia en la página
let copyButtons = document.querySelectorAll('.card-button');

copyButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Prevent the button's default click behavior
        e.preventDefault();

        let input = document.createElement('input');
        input.value = this.textContent;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);

      // Within your button event listener
        Swal.fire({
            title: 'ID del producto copiado al portapapeles, al presionar OK la pagina se redirige a la seccion de "Entrega a Domicilio".',
            text: this.textContent,
            icon: 'success',
            timer: 3000,
            showConfirmButton: true
        }).then((result) => {
            // Redirect after the SweetAlert closes
            window.location.href = "/pages/contact.html";
        });

    });
});
