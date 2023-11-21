function incrementAmountByTenPercent() {
  const amountElements = document.querySelectorAll('.amount');
  
  amountElements.forEach(amountElement => {
    const currentAmountText = amountElement.textContent;
    const currentAmount = parseFloat(currentAmountText.replace('$', '').replace(',', '')); // Extract numeric value

    if (!isNaN(currentAmount)) {
      const incrementedAmount = currentAmount * 1.1; // Increment by 10%

      // Format the incremented amount back to currency format
      const formattedIncrementedAmount = '$' + incrementedAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      
      // Update the content of each element with the new amount
      amountElement.textContent = formattedIncrementedAmount;
    } else {
      console.error('Invalid amount format');
    }
  });
}

// Call the function to increment the amounts when needed
incrementAmountByTenPercent();
