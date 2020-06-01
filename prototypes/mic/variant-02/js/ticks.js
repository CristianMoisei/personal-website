function tickClick(element, iconId) {
    var icon = document.getElementById(iconId);
    if (element.classList.contains('checked')) {
        element.classList.remove('checked');
        icon.setAttribute('src', 'img/tick-unchecked.svg');
    } else {
        element.classList.add('checked');
        icon.setAttribute('src', 'img/tick-checked.svg');
    }
};