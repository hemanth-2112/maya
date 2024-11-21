function validateAndSubmit() {
    const name = document.getElementById('productName').value.trim();
    const price = document.getElementById('productPrice').value.trim();
    const category = document.getElementById('productCategory').value;

    if (!name || !price || !category) {
        alert('All fields are .');
        return;
    }
    
    if (price <= 0) {
        alert('Price must be a positive number.');
        return;
    }

    // Submit logic here (e.g., AJAX or form submission)
    alert(`Product added successfully!\nName: ${name}\nPrice: ₹${price}\nCategory: ${category}`);
    document.getElementById('addProductForm').reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById('addProductModal'));
    modal.hide();
}