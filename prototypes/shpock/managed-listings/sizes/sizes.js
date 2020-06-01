class SizeType {
    constructor(values, sizeType, sizeUnit) {
        this.values = values;
        this.sizeType = sizeType;
        this.sizeUnit = sizeUnit;
    }
}

var sizes = [

    // Women's Clothing
    new SizeType(["2","4","6","8","10","12","14","16","18","20","22","24","26","28","30"], "womenClothes", "UK"),
    new SizeType(["XS","S","M","L","XL","2XL","3XL","4XL"], "womenClothes", "S-XL"),
    new SizeType(["30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58"], "womenClothes", "EUR"),
    new SizeType(["This item is 'one size fits all'"], "womenClothes", "1 Size"),

    // Women's shoes
    new SizeType(["2","3","4","5","6","7","8","9"], "womenShoes", "UK"),
    new SizeType(["35","36","37","38","39","40","41","42"], "womenShoes", "EUR"),

    // Women's trousers
    new SizeType(["W:24 L:28","W:25 L:28","W:25 L:30","W:26 L:28","W:26 L:30","W:26 L:32","W:27 L:28","W:27 L:30","W:27 L:32","W:28 L:28","W:28 L:30","W:28 L:32","W:28 L:34","W:29 L:30","W:29 L:28","W:29 L:30","W:29 L:32","W:29 L:34","W:30 L:30","W:30 L:32","W:30 L:34","W:31 L:30","W:31 L:32","W:31 L:34","W:32 L:30","W:32 L:32","W:32 L:34","W:33 L:30","W:33 L:32","W:33 L:34","W:34 L:30","W:34 L:32","W:34 L:34","W:36 L:30","W:36 L:32","W:36 L:34"], "womenTrousers", "Waist Leg"),
    new SizeType(["6","8","10","12","14","16","18","6P","8P","10P","12P","14P","16P","18P"], "womenTrousers", "UK"),    

    // Men's Clothing
    new SizeType(["XS","S","M","L","XL","2XL","3XL","4XL"], "menClothes", "S-XL"),
    new SizeType(["30","32","34","36","38","40","42","44","46","48","50","52"], "menClothes", "EUR"),

    // Men's shoes
    new SizeType(["6","7","8","9","10","11","12"], "menShoes", "UK"),
    new SizeType(["40","41","42","43","44","45","46"], "menShoes", "EUR"),

    // Men's trousers
    new SizeType(["28","29","30","31","32","33","34","36","38","W:28 L:30","W:28 L:32","W:29 L:30","W:29 L:32","W:30 L:30","W:30 L:32","W:31 L:30","W:31 L:32","W:32 L:30","W:32 L:32","W:32 L:34","W:33 L:30","W:33 L:32","W:33 L:34","W:34 L:30","W:34 L:32","W:34 L:34","W:36 L:30","W:36 L:32","W:36 L:34","W:38 L:30","W:38 L:32","W:38 L:34","W:40 L:32","W:40 L:34","W:42 L:32","W:42 L:34"], "menTrousers", "Waist Leg")
    ]


var ul = document.getElementById("sizes");
var selectedSizeType = localStorage.getItem('selectedSizeType');
var numberOfTabs
var selectedTab = 0
var labelIDs = ["label-1", "label-2", "label-3", "label-4"]
var sizesToShow = sizes.filter(value => value.sizeType == selectedSizeType);

// Logic to configure the segmented control
if (selectedSizeType == "womenClothes") {
    numberOfTabs = 4;
} else if (selectedSizeType == "menTrousers") {
    numberOfTabs = 1;
    document.getElementById('tab-2').remove();
    document.getElementById('tab-3').remove();
    document.getElementById('tab-4').remove();
} else {
    numberOfTabs = 2;
    document.getElementById('tab-3').remove();
    document.getElementById('tab-4').remove();
}

// Populates the tabs with the right sizeUnits
for (i = 0; i < numberOfTabs; i++) {
    document.getElementById(labelIDs[i]).innerHTML = sizesToShow[i].sizeUnit;
}

console.log(sizesToShow);

function updateSizes(tab) {
    selectedTab = tab;

    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }

    for (i in sizesToShow[selectedTab].values){
        var li = document.createElement("li");    
        li.appendChild(document.createTextNode(sizesToShow[selectedTab].values[i]));
    
        li.onclick = function () {
            localStorage.setItem('selectedSize', this.textContent);
            window.location.href = '../index.html';
        };
    
        ul.appendChild(li);
    }
}

updateSizes(0)