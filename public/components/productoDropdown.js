function handleSelectionChange() {
    var selectElement = document.getElementById('id-select');
    var selectedValue = selectElement.value;  // Get the value of the selected option

    if (selectedValue !== "") {
        // Copy the selected value to clipboard
        navigator.clipboard.writeText(selectedValue);

        // Use SweetAlert2 to alert the user
        Swal.fire({
            title: 'Value copied to clipboard!',
            text: 'Value: ' + selectedValue,
            icon: 'success',
        }).then((result) => {
            // Redirect to the contact page after the user closes the alert
            if (result.isConfirmed) {
                window.location.href = '/pages/contact.html';
            }
        });
    }
}
