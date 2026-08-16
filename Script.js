let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
  document.getElementById("cart").classList.add("open");
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("open");
}

function renderCart() {
  document.getElementById("cartCount").textContent = cart.length;

  const box = document.getElementById("cartItems");

  if (!cart.length) {
    box.innerHTML = "<p>Your bag is empty.</p>";
    document.getElementById("cartTotal").textContent = "0.00";
    return;
  }

  box.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <span>${item.name}</span>
      <span>
        €${item.price.toFixed(2)}
        <button onclick="removeItem(${index})">×</button>
      </span>
    </div>
  `).join("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("cartTotal").textContent = total.toFixed(2);
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}
