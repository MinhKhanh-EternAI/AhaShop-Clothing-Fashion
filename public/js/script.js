// Thêm sản phẩm

const product = [
    {
        id: 0,
        image: './public/image/product-1.jpg',
        title: 'Minty',
        price: 100,
    }
];

const categories = [...new Set(product.map((item) => { return item }))]

// Lấy giỏ hàng từ localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Hiển thị sản phẩm
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>"
    )
}).join('')

// Thêm sản phẩm vào giỏ hàng
function addtocart(a) {
    cart.push({ ...categories[a] });
    localStorage.setItem("cart", JSON.stringify(cart)); // Lưu giỏ hàng vào localStorage
    displaycart();
}

// Xóa sản phẩm khỏi giỏ hàng
function delElement(a) {
    cart.splice(a, 1);
    localStorage.setItem("cart", JSON.stringify(cart)); // Lưu giỏ hàng vào localStorage
    displaycart();
}

// Hiển thị giỏ hàng
function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty.";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
        document.getElementById("total-1").innerHTML = "$ " + 0 + ".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            document.getElementById("total-1").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <h2>${title}</h2>
                    <p>$ ${price}.00</p>` +
                    "<i class='fa fa-trash fa-2x' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}

displaycart(); // Hiển thị giỏ hàng khi tải trang