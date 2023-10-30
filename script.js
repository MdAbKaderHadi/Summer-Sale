let totalPrice = 0;

function clickToAdd(target){
    const productName = target.childNodes[3].childNodes[3].innerText;
    const productNameContainer = document.getElementById("product-list-container");
    const createElementOnDocument = document.createElement("li");
    createElementOnDocument.innerText = productName;
    productNameContainer.appendChild(createElementOnDocument)

    const productPrice = parseFloat(target.childNodes[3].childNodes[5].childNodes[0].innerText);
    totalPrice = parseFloat(totalPrice) + productPrice;

    const getTotalPriceContainer = document.getElementById("total-price");
    getTotalPriceContainer.innerText = totalPrice.toFixed(2);

    const getTotalContainer = document.getElementById("grand-total");
    getTotalContainer.innerText = totalPrice.toFixed(2);

    if(totalPrice >= 200){
        const applyButton = document.getElementById("apply-button").removeAttribute("disabled");
    }
    if(totalPrice > 0){
        const makePurchaseButton = document.getElementById("make-purchase-button").removeAttribute("disabled");
    }
}

document.getElementById("apply-button").addEventListener("click", function(){
    const inputValue = document.getElementById("input-coupon");

    if(inputValue.value === "SELL200"){
        const discountAmount = totalPrice * (20 / 100);
        const discount = document.getElementById("discount");
        discount.innerText = discountAmount.toFixed(2);

        const getTotalContainer = document.getElementById("grand-total");
        const totalAmount = totalPrice.toFixed(2) - discountAmount.toFixed(2);
        getTotalContainer.innerText = totalAmount.toFixed(2);
    }
    
    inputValue.value = "";
})

document.getElementById("go-home-button").addEventListener("click", function(){
    window.location.reload()
})