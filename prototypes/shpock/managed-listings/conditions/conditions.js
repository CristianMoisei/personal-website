class Condition {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

var conditions = [
    new Condition("New", "Original packaging or with tags"),
    new Condition("Like New", "Used a couple of times or removed from original packaging"),
    new Condition("Good", "Used, with minimal signs of wear and tear"),
    new Condition("Fair", "Functions with flaws or defects"),
    new Condition("Poor", "Heavily used, damaged or missing parts"),
]


var ul = document.getElementById("conditions");
var selectedCondition;

for (i in conditions) {
    var li = document.createElement("li");
    var h3 = document.createElement("h3");
    var p = document.createElement("p");

    h3.appendChild(document.createTextNode(conditions[i].name));
    p.appendChild(document.createTextNode(conditions[i].description));

    li.appendChild(h3);
    li.appendChild(p);

    li.onclick = function () {
        selectedCondition = this.childNodes[0].textContent;
        localStorage.setItem('selectedCondition', selectedCondition);
        window.location.href = '../index.html';
    };

    ul.appendChild(li);
}