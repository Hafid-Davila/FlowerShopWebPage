document.getElementById('mySelect').addEventListener('change', function() {
    var url = this.value;
    if (url) {
      // Abre el enlace de WhatsApp en una nueva pestaña
      window.open(url, '_blank');
    }
  });
