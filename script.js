let productForm = document.getElementById("productForm");

let productContainer = document.getElementById("productContainer");

let productCount = document.getElementById("productCount");

let products = [];


// ==================================
// FORM SUBMIT
// ==================================

productForm.addEventListener("submit", function (event) {

    // Stop page reload
    event.preventDefault();


    // ==================================
    // GET FORM VALUES
    // ==================================

    let productName =
        document.getElementById("productName").value;

    let price =
        document.getElementById("price").value;

    let description =
        document.getElementById("description").value;

    let image =
        document.getElementById("image").value;

    let category =
        document.getElementById("category").value;

    let rating =
        document.getElementById("rating").value;

    let warranty =
        document.getElementById("warranty").value;

    let company =
        document.getElementById("company").value;

    let returnPolicy =
        document.getElementById("returnPolicy").value;


    // ==================================
    // CREATE PRODUCT OBJECT
    // ==================================

    let product = {

        name: productName,

        price: price,

        description: description,

        image: image,

        category: category,

        rating: rating,

        warranty: warranty,

        company: company,

        returnPolicy: returnPolicy

    };


    // ==================================
    // ADD PRODUCT TO ARRAY
    // ==================================

    products.push(product);


    // ==================================
    // DISPLAY PRODUCTS
    // ==================================

    displayProducts();


    // ==================================
    // CLEAR FORM
    // ==================================

    productForm.reset();

});


// ==================================
// DISPLAY PRODUCTS FUNCTION
// ==================================

function displayProducts() {

    productContainer.innerHTML = "";


    // ==================================
    // PRODUCT COUNT
    // ==================================

    productCount.innerText =
        products.length +
        (products.length === 1 ? " Product" : " Products");


    // ==================================
    // CREATE PRODUCT CARDS
    // ==================================

    products.forEach(function (product) {

        let card = document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-image"
            >

            <div class="product-content">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <p class="product-company">
                    By ${product.company}
                </p>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-price">
                    ₹${product.price}
                </div>

                <div class="product-info">

                    <div class="info-item">
                        <strong>Rating</strong>
                        ⭐ ${product.rating}/5
                    </div>

                    <div class="info-item">
                        <strong>Warranty</strong>
                        ${product.warranty}
                    </div>

                    <div class="info-item">
                        <strong>Return</strong>
                        ${product.returnPolicy}
                    </div>

                    <div class="info-item">
                        <strong>Company</strong>
                        ${product.company}
                    </div>

                </div>

            </div>

        `;


        productContainer.appendChild(card);

    });

}