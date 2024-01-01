/////////////// Thêm sản phẩm vào Shop Layout ///////////////
const product = [
    {
        id: 0,
        image: './public/image/product-1.jpg',
        title: 'Minty Dress',
        sale: 'none-product-sale',
        saleText: '',
        stockout: 'none-product-stockout',
        stockoutText: '',
        price: 110,
    },
    {
        id: 1,
        image: './public/image/product-2.jpg',
        title: 'Variable Product',
        sale: 'product-sale',
        saleText: 'SALE!',
        stockout: 'none-product-stockout',
        stockoutText: '',
        price: 70,
    },
    {
        id: 2,
        image: './public/image/product-3.jpg',
        title: 'Rose Pink Dress',
        sale: 'none-product-sale',
        saleText: '',
        stockout: 'none-product-stockout',
        stockoutText: '',
        price: 95,
    },
    {
        id: 3,
        image: './public/image/product-4.jpg',
        title: 'Gray California Dress',
        sale: 'product-sale',
        saleText: 'SALE!',
        stockout: 'none-product-stockout',
        stockoutText: '',
        price: 200,
    },
    {
        id: 4,
        image: './public/image/product-5.jpg',
        title: 'Elegent White Dress',
        sale: 'none-product-sale',
        saleText: '',
        stockout: 'product-stockout',
        stockoutText: 'OUT OF STOCK',
        price: 150,
    },
    {
        id: 5,
        image: './public/image/product-6.jpg',
        title: 'Sexy White Dress',
        sale: 'none-product-sale',
        saleText: '',
        stockout: 'none-product-stockout',
        stockoutText: '',
        price: 119,
    },
    {
        id: 6,
        image: './public/image/product-7.jpg',
        title: 'Jacket and Dress',
        sale: 'none-product-sale',
        saleText: '',
        stockout: 'none-product-stockout',
        stockoutText: '',
        price: 79,
    },
    {
        id: 7,
        image: './public/image/product-8.jpg',
        title: 'Summer Dress',
        sale: 'product-sale',
        saleText: 'SALE!',
        stockout: 'none-product-stockout',
        stockoutText: '',
        price: 100,
    },
    {
        id: 8,
        image: './public/image/product-9.jpg',
        title: 'Elegent Pink Dress',
        sale: 'none-product-sale',
        saleText: '',
        stockout: 'none-product-stockout',
        stockoutText: '',
        price: 120,
    },
    {
        id: 9,
        image: './public/image/product-10.jpg',
        title: 'Long Black Dress',
        sale: 'none-product-sale',
        saleText: '',
        stockout: 'none-product-stockout',
        stockoutText: '',
        price: 99,
    },
    {
        id: 10,
        image: './public/image/product-11.jpg',
        title: 'Night Party Dress',
        sale: 'product-sale',
        saleText: 'SALE!',
        stockout: 'none-product-stockout',
        stockoutText: '',
        price: 150,
    },
    {
        id: 11,
        image: './public/image/product-12.jpg',
        title: 'Sexy Pink Dress',
        sale: 'none-product-sale',
        saleText: '',
        stockout: 'none-product-stockout',
        stockoutText: '',
        price: 110,
    },
  ];
  
  const categories = [...new Set(product.map((item) => { return item }))]
  let i = 0;
  document.getElementById('shop-layout').innerHTML = categories.map((item) => {
    var { image, title, sale, saleText, stockout, stockoutText, price } = item;
    return (
        ` 
        <div class="col-6 col-md-3">
            <div class="product-img">
                <a href="#" class="image-container">
                    <img src="${image}" alt="">
                    <div class="${sale}">${saleText}</div>
                    <div class="${stockout}">${stockoutText}</div>
                    <div class="overlay"></div>
                    <div class="product-quickview text-center">Quickview</div>
                </a>
            </div>
            <div class="product-detail text-center py-3">
                <div class="product-name">
                    <a href="#">${title}</a>
                </div>
                <div class="product-price">
                    <span>$${price}.00</span>
                </div>
            </div>
        </div>
        `
    )
  }).join('')
  
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