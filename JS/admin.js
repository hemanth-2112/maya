// Add event listener for loading the Add Product modal
document.getElementById("loadAddProductModal").addEventListener("click", function () {
    fetch("../HTML/addProduct.html") // Path to your modal HTML file
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load modal content");
            }
            return response.text();
        })
        .then(data => {
            // Inject the modal HTML content into the modal container
            const modalContainer = document.getElementById("modalContainer");
            modalContainer.innerHTML = data;

            // Reinitialize Bootstrap modal if necessary
            const modalElement = document.getElementById("addProductModal");
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
        })
        .catch(error => console.error("Error loading modal:", error));
});


document.getElementById("123").addEventListener("click", function () {
    fetch("../HTML/updateProduct.html") // Path to your modal HTML file
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load modal content");
            }
            return response.text();
        })
        .then(data => {
            // Inject the modal HTML content into the modal container
            const modalContainer = document.getElementById("modalContainer");
            modalContainer.innerHTML = data;

            // Reinitialize Bootstrap modal if necessary
            const modalElement = document.getElementById("updateProductModal");
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
        })
        .catch(error => console.error("Error loading modal:", error));
});
document.getElementById("delete").addEventListener("click", function () {
    fetch("../HTML/deleteProduct.html") // Path to your modal HTML file
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load modal content");
            }
            return response.text();
        })
        .then(data => {
            // Inject the modal HTML content into the modal container
            const modalContainer = document.getElementById("modalContainer");
            modalContainer.innerHTML = data;

            // Reinitialize Bootstrap modal if necessary
            const modalElement = document.getElementById("deleteProductModal");
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
        })
        .catch(error => console.error("Error loading modal:", error));
});


