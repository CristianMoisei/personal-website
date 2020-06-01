var titlePlaceholder = "What are you selling"
var descriptionPlaceholder = "Describe your item in as much detail as you can..."
var pricePlaceholder = "How much do you want for it?"
var deliveryPlaceholder = "How much do you want for delivery?"


document.getElementById('title-input').placeholder = titlePlaceholder
document.getElementById('description-input').placeholder = descriptionPlaceholder
document.getElementById('price-input').placeholder = pricePlaceholder
document.getElementById('delivery-input').placeholder = deliveryPlaceholder


function hidePlaceholder(element) {
    element.placeholder = ""
}

function showPlaceholder(element, placeholder) {
    element.placeholder = placeholder
}