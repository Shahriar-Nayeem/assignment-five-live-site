function updateMemoryPrice(sixteengb) {
    const memoryCost = document.getElementById('memory-cost');
    if (sixteengb) {
        memoryCost.innerText = 180;
    } else {
        memoryCost.innerText = 0;
    }
}
function updateStoragePrice(storage) {
    const storageCost = document.getElementById('storage-cost');
    if (storage == 1) {
        storageCost.innerText = 180;
    }
    else if (storage == 512) {
        storageCost.innerText = 100;
    }
    else if (storage == 256) {
        storageCost.innerText = 0;
    }
}
function updateDelivery(freedelv) {
    const deliveryCost = document.getElementById('delivery-cost');
    if (freedelv) {
        deliveryCost.innerText = 0;
    } else {
        deliveryCost.innerText = 20;
    }
}

function updateTotalPrice() {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById("memory-cost").innerText;
    const storagePrice = document.getElementById("storage-cost").innerText;
    const deliveryPrice = document.getElementById("delivery-cost").innerText;
    const totalCost = parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice) + parseInt(bestPrice);
    document.getElementById('total-cost').innerText = totalCost;
    document.getElementById('total-discount').innerText = totalCost;
}
//updating memory
document.getElementById('eightGb').addEventListener('click', function () {
    updateMemoryPrice(false);
    updateTotalPrice();
})
document.getElementById('sixteenGb').addEventListener('click', function () {
    updateMemoryPrice(true);
    updateTotalPrice();
})
//updating storage
document.getElementById("storage-twoFiFtySixGb").addEventListener("click", function () {
    updateStoragePrice(256);
    updateTotalPrice();
});
document.getElementById("storage-fiveOneTwoGb").addEventListener("click", function () {
    updateStoragePrice(512);
    updateTotalPrice();
});
document.getElementById("storage-oneTb").addEventListener("click", function () {
    updateStoragePrice(1);
    updateTotalPrice();
});
//updating delivery
document.getElementById("delivery-charge").addEventListener("click", function () {
    updateDelivery(false);
    updateTotalPrice();
});
document.getElementById("delivery-free").addEventListener("click", function () {
    updateDelivery(true);
    updateTotalPrice();
});
//promo code
document.getElementById("apply").addEventListener("click", function () {
    const promoInputField = document.getElementById('promo-input');
    const totalDiscount = document.getElementById('total-discount');
    const totalCost = document.getElementById('total-cost').innerText;
    const totalPrice = parseInt(totalCost);
    if (promoInputField.value == 'stevekaku') {
        totalDiscount.innerText = totalPrice * (0.8);
    } else {
        totalDiscount.innerText = totalPrice;
    }
    promoInputField.value = "";
});