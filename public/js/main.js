/////////////// Nút Back To Top ///////////////
let mybutton = document.getElementById("btn-back-to-top");


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



/////////////// Thêm sản phẩm ///////////////

const product_ap = [
    {
        id_ap: 0,
        image_ap: './public/image/product-1.jpg',
        title_ap: 'Minty',
        price_ap: 100,
    }
];

const categories_ap = [...new Set(product_ap.map((item) => { return item }))]

// Lấy giỏ hàng từ localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Hiển thị sản phẩm
let i_ap = 0;
document.getElementById('root').innerHTML = categories_ap.map((item) => {
    var { image_ap, title_ap, price_ap } = item;
    return (
        "<button onclick='addtocart(" + (i_ap++) + ")'>Add to cart</button>"
    )
}).join('')

// Thêm sản phẩm vào giỏ hàng
function addtocart(a) {
    cart.push({ ...categories_ap[a] });
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
    let j_ap = 0, total_ap = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty.";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
        document.getElementById("total-1").innerHTML = "$ " + 0 + ".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image_ap, title_ap, price_ap } = items;
            total_ap = total_ap + price_ap;
            document.getElementById("total").innerHTML = "$ " + total_ap + ".00";
            document.getElementById("total-1").innerHTML = "$ " + total_ap + ".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image_ap}>
                    </div>
                    <h2>${title_ap}</h2>
                    <p>$ ${price_ap}.00</p>` +
                    "<i class='fa fa-trash fa-2x' onclick='delElement(" + (j_ap++) + ")'></i></div>"
            );
        }).join('');
    }
}

displaycart(); // Hiển thị giỏ hàng khi tải trang