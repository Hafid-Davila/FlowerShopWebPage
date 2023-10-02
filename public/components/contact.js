function enviarMensajeWhatsApp() {
    const formData = new FormData(document.getElementById('contact-form'));
    const item = formData.get('item');
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const nombreDestinatario = formData.get('nombreDestinatario');
    const address = formData.get('address');
    const phoneDestinatario = formData.get('phoneDestinatario');
    const date = formData.get('date');
    const time = formData.get('time');
    const message = formData.get('message');
  
    // Construir el mensaje personalizado
    const mensajePersonalizado = `Hola soy ${name}, me interesa comprar este arreglo:`;
  
    // Construir el mensaje de WhatsApp con los datos del formulario
    const mensajeWhatsApp = `${mensajePersonalizado}\nPedido: ${item}\nNombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nNombre del destinatario: ${nombreDestinatario}\nDirección de entrega: ${address}\nTeléfono del destinatario: ${phoneDestinatario}\nFecha de entrega: ${date}\nHora de entrega: ${time}\nMensaje: ${message}`;
  
    // Codificar el mensaje para que se pueda pasar como parámetro en el enlace de WhatsApp
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
  
    // Obtener el número de WhatsApp del enlace del botón
    const numeroWhatsApp = document.querySelector('.whatsapp-button').href;
  
    // Construir el enlace de WhatsApp con el mensaje prellenado y el número correcto
    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp.replace('https://wa.me/', '')}?text=${mensajeCodificado}`;
  
    // Abrir el enlace de WhatsApp en una nueva pestaña
    window.open(enlaceWhatsApp, '_blank');
}

