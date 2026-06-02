function addToCart(name, price) {

    let cart =
        JSON.parse(localStorage.getItem('cart')) || [];

    let product = {
        name: name,
        price: price
    };

    cart.push(product);

    localStorage.setItem(
        'cart',
        JSON.stringify(cart)
    );

    updateCartCount();

    alert(name + ' added to cart!');
}

function updateCartCount() {

    let cart =
        JSON.parse(localStorage.getItem('cart')) || [];

    let cartCount =
        document.getElementById('cart-count');

    if(cartCount) {
        cartCount.innerText = cart.length;
    }
}

function searchProducts() {

    let input =
        document.getElementById('search')
        .value.toLowerCase();

    let products =
        document.querySelectorAll('.product');

    products.forEach(product => {

        let title =
            product.querySelector('h2')
            .innerText.toLowerCase();

        if(title.includes(input)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

updateCartCount();
function showDetails(name, price, desc) {

    alert(
        "Product: " + name +
        "\nPrice: ₹" + price +
        "\n\n" + desc
    );
}