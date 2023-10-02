// categoriasDropdown.js

// Función para redirigir a la página correspondiente
function redirectToPage() {
    var selectedCategory = document.getElementById("categorias-dropdown").value;
    if (selectedCategory) {
      window.location.href = selectedCategory;
    }
  }
  