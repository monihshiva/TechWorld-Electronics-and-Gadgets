let orders = [];

function addOrder(product) {
    const name = prompt("Enter your name:");
    if (!name) return;

    const email = prompt("Enter your email:");
    if (!email) return;

    const phone = prompt("Enter your phone number:");
    if (!phone) return;

    const address = prompt("Enter your delivery address:");
    if (!address) return;

    orders.push({
        product: product,
        name: name,
        email: email,
        phone: phone,
        address: address,
        status: "Pending"
    });

    displayOrders();
    alert("Order placed successfully!");
}

function displayOrders() {
    const list = document.getElementById("orderList");

    if (orders.length === 0) {
        list.innerHTML = "<p>No orders yet.</p>";
        return;
    }

    list.innerHTML = "<h3>Your Orders</h3>";

    orders.forEach((order, index) => {
        list.innerHTML += `
            <div class="order-card">
                <h3>Order #${index + 1}</h3>
                <p><b>Product:</b> ${order.product}</p>
                <p><b>Customer Name:</b> ${order.name}</p>
                <p><b>Email:</b> ${order.email}</p>
                <p><b>Phone:</b> ${order.phone}</p>
                <p><b>Address:</b> ${order.address}</p>
                <p><b>Status:</b> <span class="status">${order.status}</span></p>
            </div>`;
    });
}
