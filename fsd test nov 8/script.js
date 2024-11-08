document.getElementById("quantity").addEventListener("input", function () {
    const price = 1199;
    const quantity = parseInt(this.value);
    const totalPrice = price * quantity;
    document.querySelector(".total-price").textContent = `Total Price: Rs. ${totalPrice}`;
});

function addToCart() {
    const quantity = parseInt(document.getElementById("quantity").value);
    const totalPrice = 1199 * quantity;
    alert(`Items added to cart. Your cart contains ${quantity} items pricing to Rs. ${totalPrice}`);
}
