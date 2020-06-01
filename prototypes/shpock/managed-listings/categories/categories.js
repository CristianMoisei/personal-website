class Category {
    constructor(name, parent, sizeType) {
        this.name = name;
        this.parent = parent;
        this.sizeType = sizeType;
    }
}

var categories = [
    new Category("Electronics", null, null),
    new Category("Fashion & Accessories", null, null),
    new Category("Home & Garden", null, null),
    new Category("Baby & Child", null, null),
    new Category("Sport & Leisure", null, null),
    new Category("Movies, Books & Music", null, null),
    new Category("Pets & Accessories", null, null),
    new Category("Motors", null, null),
    new Category("Property", null, null),
    new Category("Services", null, null),
    new Category("Other", null, null),

        // Electronics
        new Category("Phones & Accessories", "Electronics", null),
        new Category("Gaming", "Electronics", null),
        new Category("Cameras & Photography", "Electronics", null),
        new Category("Car Technology", "Electronics", null),
        new Category("Computers, PCs & Laptops", "Electronics", null),
        new Category("Drones", "Electronics", null),
        new Category("Home Appliances", "Electronics", null),
        new Category("Smart Home & Security", "Electronics", null),
        new Category("Sound & Audio", "Electronics", null),
        new Category("Tablets & eReaders", "Electronics", null),
        new Category("TV & Video", "Electronics", null),
        new Category("Wearables", "Electronics", null),
        new Category("Virtual Reality", "Electronics", null),

            // Phones & Accessories
            new Category("Mobile & Smart Phones", "Phones & Accessories", null),
            new Category("Cases, Covers & Skins", "Phones & Accessories", null),
            new Category("Phone Earphones & Headphones", "Phones & Accessories", null),
            new Category("Phone Chargers, Adaptors & Cables", "Phones & Accessories", null),
            new Category("Mobile Phone Parts & Tools", "Phones & Accessories", null),
            new Category("Mobile Phone Acccessories", "Phones & Accessories", null),
            new Category("Vintage Mobile Phones", "Phones & Accessories", null),
            new Category("Home Phones & Accessories", "Phones & Accessories", null),
            new Category("Vintage Home Phones", "Phones & Accessories", null),
            new Category("Other", "Phones & Accessories", null),

            // Gaming
            new Category("Games Consoles", "Gaming", null),
            new Category("Handheld Consoles", "Gaming", null),
            new Category("Video Games", "Gaming", null),
            new Category("Replacement Gaming Parts & Tools", "Gaming", null),
            new Category("Video Gaming Merchandise", "Gaming", null),
            new Category("Video Game Strategy Guides & Cheats", "Gaming", null),
            new Category("PC Gaming", "Gaming", null),
            new Category("Video Gaming Accessories", "Gaming", null),
            new Category("Other", "Gaming", null),
                    
            // Cameras & Photography
            new Category("Digital Cameras", "Cameras & Photography", null),
            new Category("Video Cameras & Camcorders", "Cameras & Photography", null),
            new Category("Vintage Cameras", "Cameras & Photography", null),
            new Category("Lenses & Filters", "Cameras & Photography", null),
            new Category("Tripods & Supports", "Cameras & Photography", null),
            new Category("Flashes & Flash Accessories", "Cameras & Photography", null),
            new Category("Binoculars & Telescopes", "Cameras & Photography", null),
            new Category("Sport & Waterproof Cameras", "Cameras & Photography", null),
            new Category("Lighting & Photo Studio", "Cameras & Photography", null),
            new Category("Digital Photo Frames", "Cameras & Photography", null),
            new Category("Other", "Cameras & Photography", null),

            // Car Technology
            new Category("Car Stereos & Bluetooth", "Car Technology", null),
            new Category("Sat Nav & GPS", "Car Technology", null),
            new Category("In Car DVD Players", "Car Technology", null),
            new Category("Car Speakers, Amps & Subs", "Car Technology", null),
            new Category("Phone holders, Cables & Sockets", "Car Technology", null),
            new Category("Dash Cams", "Car Technology", null),
            new Category("Speed Camera Detectors", "Car Technology", null),
            new Category("Car Security", "Car Technology", null),
            new Category("Parking Sensors", "Car Technology", null),
            new Category("Car Tech Accessories", "Car Technology", null),
            new Category("Other", "Car Technology", null),

            // Computers, PCs & Laptops
            new Category("Desktops", "Computers, PCs & Laptops", null),
            new Category("Laptops, Netbooks & 2-in-1", "Computers, PCs & Laptops", null),
            new Category("Monitors & Screens", "Computers, PCs & Laptops", null),
            new Category("Printers & Scanners", "Computers, PCs & Laptops", null),
            new Category("Computer Software", "Computers, PCs & Laptops", null),
            new Category("Computer Cables & Connectors", "Computers, PCs & Laptops", null),
            new Category("Computer Components & Parts", "Computers, PCs & Laptops", null),
            new Category("Vintage Computers", "Computers, PCs & Laptops", null),
            new Category("3D Printers", "Computers, PCs & Laptops", null),
            new Category("Computer Accessories", "Computers, PCs & Laptops", null),
            new Category("Other", "Computers, PCs & Laptops", null),

            // Drones
            new Category("Drones", "Drones", null),
            new Category("Drone Cameras ", "Drones", null),
            new Category("Drone Parts & Accessories", "Drones", null),
            new Category("Other", "Drones", null),
        
            // Home Appliances
            new Category("Cookers, Ovens & Hobs", "Home Appliances", null),
            new Category("Dishwashers", "Home Appliances", null),
            new Category("Ironing", "Home Appliances", null),
            new Category("Vacuuming", "Home Appliances", null),
            new Category("Small Kitchen Appliances", "Home Appliances", null),
            new Category("Home Appliance Parts & Accessories", "Home Appliances", null),
            new Category("Other", "Home Appliances", null),

            // Smart Home & Security

            // Sound & Audio

            // Tablets & eReaders

            // TV & Video

            // Wearables

            // Virtual Reality


        // Fashion & Accessories
        new Category("Women", "Fashion & Accessories", null),
        new Category("Men", "Fashion & Accessories", null),
        new Category("Girls", "Fashion & Accessories", null),
        new Category("Boys", "Fashion & Accessories", null),

            // Women
            new Category("Shoes & Boots", "Women", "womenShoes"),
            new Category("Activewear & Sportswear", "Women", "womenClothes"),
            new Category("Dresses", "Women", "womenClothes"),
            new Category("Hoodies & Sweatshirts", "Women", "womenClothes"),
            new Category("Tops", "Women", "womenClothes"),
            new Category("Coats & Jackets", "Women", "womenClothes"),
            new Category("Jumpers & Cardigans", "Women", "womenClothes"),
            new Category("Bags & Accessories", "Women", "womenClothes"),
            new Category("Trousers & Leggings", "Women", "womenTrousers"),
            new Category("Jumpsuits & Playsuits", "Women", "womenClothes"),
            new Category("Lingerie & Nightwear", "Women", "womenClothes"),
            new Category("Jeans", "Women", "womenTrousers"),
            new Category("Swimwear & Beachwear", "Women", "womenClothes"),
            new Category("Shorts", "Women", "womenClothes"),
            new Category("Skirts", "Women", "womenClothes"),
            new Category("Suits & Blazers", "Women", "womenClothes"),
            new Category("Other", "Women", "womenClothes"),
        
            
            // Men
            new Category("Shoes & Boots", "Men", "menShoes"),
            new Category("Activewear & Sportswear", "Men", "menClothes"),
            new Category("Hoodies & Sweatshirts", "Men", "menClothes"),
            new Category("Coats & Jackets", "Men", "menClothes"),
            new Category("Jumpers & Cardigans", "Men", "menClothes"),
            new Category("Bags & Accessories", "Men", "menClothes"),
            new Category("Trousers & Chinos", "Men", "menTrousers"),
            new Category("Socks & Underwear", "Men", "menClothes"),
            new Category("Loungewear & Nightwear", "Men", "menClothes"),
            new Category("Jeans", "Men", "menTrousers"),
            new Category("Swimwear & Beachwear", "Men", "menClothes"),
            new Category("Shorts", "Men", "menClothes"),
            new Category("Suits & Blazers", "Men", "menClothes"),
            new Category("Polo shirts", "Men", "menClothes"),
            new Category("Shirts", "Men", "menClothes"),
            new Category("Tshirts & Vests", "Men", "menClothes"),
            new Category("Other", "Men", "menClothes")
    ]


var ul = document.getElementById("categories");
var selectedCategory;
var isFashionCategory;
var filteredCategories = [];



function renderCategories(categoryArray){
    for (i in categoryArray) {
        var li = document.createElement("li");
        
        li.appendChild(document.createTextNode(categoryArray[i].name));

        li.onclick = function () {
            selectedCategory = this.textContent;
            localStorage.setItem('selectedCategory', selectedCategory);

            // This will find the Category object with the name of the selectedCategory in the filteredCategories array
            var thisCategoryObject = filteredCategories.filter(value => value.name == selectedCategory)[0];

            if (thisCategoryObject != undefined) {
                localStorage.setItem('selectedSizeType', thisCategoryObject.sizeType)
            }
            
            this.parentElement.innerHTML = '';
            filteredCategories = categories.filter(value => value.parent == selectedCategory)

            if (filteredCategories.length != 0) {
                renderCategories(filteredCategories);
            } else {
                window.location.href = '../index.html';
            }
        };

        ul.appendChild(li);
    }

    // setSizeType()

    if (selectedCategory == "Fashion & Accessories") {
        isFashionCategory = true;
    }

    if (isFashionCategory) {
        localStorage.setItem('showSize', true);
        localStorage.setItem('showCondition', true);
    } else {
        localStorage.setItem('showSize', false);
        localStorage.setItem('showCondition', true);
    }

    if (selectedCategory == "Motors" || selectedCategory == "Property" || selectedCategory == "Services") {
        localStorage.setItem('deliveryEnabled', false);
    } else {
        localStorage.setItem('deliveryEnabled', true);
    }

    

}

function setSizeType() {

    // else if parent == "Men" { selectedSizeType = menClothes }
}

var startCategories = categories.filter(value => value.parent == null)
renderCategories(startCategories);