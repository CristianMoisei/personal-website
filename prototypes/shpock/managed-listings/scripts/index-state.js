var selectedCategory = localStorage.getItem('selectedCategory');
var selectedCondition = localStorage.getItem('selectedCondition');
var selectedSize = localStorage.getItem('selectedSize');

var deliveryEnabled = localStorage.getItem('deliveryEnabled');

var showSize = localStorage.getItem('showSize');
var showCondition = localStorage.getItem('showCondition');

var storedImages = localStorage.getItem('imagesAdded');
var storedTitle = localStorage.getItem('storedTitle');
var storedDescription = localStorage.getItem('storedDescription');
var storedPrice = localStorage.getItem('storedPrice');


// Set category text
if (selectedCategory != null && selectedCategory != 'undefined'){ document.getElementById('select-category-text').innerHTML = selectedCategory;
} else { document.getElementById('select-category-text').innerHTML = 'Select Category'; }


if (storedTitle != null && storedTitle != undefined) {
    document.getElementById(`title-input`).value = storedTitle;
}

if (storedDescription != null && storedDescription != undefined) {
    document.getElementById(`description-input`).value = storedDescription;
}

if (storedPrice != null && storedPrice != undefined) {
    document.getElementById(`price-input`).value = storedPrice;
}


// Show Product details
if (storedImages == 2) {
    document.getElementById(`image-1`).style.display = 'inline';
}

if (storedImages == 3) {
    document.getElementById(`image-1`).style.display = 'inline';
    document.getElementById(`image-2`).style.display = 'inline';
}

if (storedImages == 4) {
    document.getElementById(`image-1`).style.display = 'inline';
    document.getElementById(`image-2`).style.display = 'inline';
    document.getElementById(`image-3`).style.display = 'inline';
    document.getElementById(`image-4`).style.display = 'none';
}



if (showSize == 'true' || showCondition == 'true') { 
    document.getElementById('product-details').style.display = 'inherit'; 
} else { 
    document.getElementById('product-details').style.display = 'none'; 
}

if (showSize == 'true') { 
    document.getElementById('size').style.display = 'flex'; 
} else { 
    document.getElementById('size').style.display = 'none'; 
}

if (showCondition == 'true') { 
    document.getElementById('condition').style.display = 'flex'; 
} else { 
    document.getElementById('condition').style.display = 'none'; 
}


// Show Product details
if (showSize == 'true' || showCondition == 'true') { 
    document.getElementById('product-details').style.display = 'inherit'; 
} else { 
    document.getElementById('product-details').style.display = 'none'; 
}

if (showSize == 'true') { 
    document.getElementById('size').style.display = 'flex'; 
} else { 
    document.getElementById('size').style.display = 'none'; 
}

if (showCondition == 'true') { 
    document.getElementById('condition').style.display = 'flex'; 
} else { 
    document.getElementById('condition').style.display = 'none'; 
}


// Selected condition
if (selectedSize != null && selectedSize != 'undefined'){ 
    document.getElementById('size-p').innerHTML = `Size: <span id="bold">${selectedSize}</span>`;
} else {
    document.getElementById('condition-p').innerHTML = 'Size';
}


// Selected size
if (selectedCondition != null && selectedCondition != 'undefined'){ 
    document.getElementById('condition-p').innerHTML = `Condition: <span id="bold">${selectedCondition}</span>`;
} else {
    document.getElementById('condition-p').innerHTML = 'Condition';
}


// Show secure deliver component & price component
if (deliveryEnabled == 'true') {
    document.getElementById('delivery-second-state').style.display = 'inline';
    document.getElementById('delivery-first-state').style.display = 'none';
    document.getElementById('price-second-state').style.display = 'inherit';
    document.getElementById('delivery-state-tag').src = 'images/enabled.jpg';
    document.getElementById('delivery-protection-tag').src = 'images/seller-protection.jpg';
    setSecureDeliverySheet('true');
} else if (deliveryEnabled == 'false') {
    document.getElementById('delivery-second-state').style.display = 'inline';
    document.getElementById('delivery-first-state').style.display = 'none';
    document.getElementById('price-second-state').style.display = 'none';
    document.getElementById('delivery-state-tag').src = 'images/disabled.png';
    document.getElementById('delivery-protection-tag').src = 'images/seller-protection-disabled.png';
    setSecureDeliverySheet('');
} else if (deliveryEnabled == null || deliveryEnabled == undefined) {
    document.getElementById('delivery-first-state').innerHTML = 'Please select a category first';
    document.getElementById('collection-still-possible').style.display = 'none';
} else {
    document.getElementById('delivery-first-state').innerHTML = 'Not available for this category';
}


document.getElementById('price-second-state-paragraph').innerHTML =  `You can ship via any delivery service you want. The average cost for delivering ${selectedCategory} is &pound;5.00 `;