// contact.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const serviceID = 'service_psvixdk'; // reemplaza con tu Service ID
    const templateID = 'template_589sc3b'; // reemplaza con tu Template ID
    const userID = '2SmJ-kqq1gDZQP-sv'; // reemplaza con tu Public Key
    
    emailjs.sendForm(serviceID, templateID, this, userID)
      .then(function() {
        alert('¡Mensaje enviado con éxito!');
      }, function(error) {
        alert('Hubo un error al enviar el mensaje:' + JSON.stringify(error));
      });
  });

  