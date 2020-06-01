function radioClick(element, uncheckId, checkedImageId, uncheckedImageId) {
    element.classList.add('checked');
    document.getElementById(checkedImageId).setAttribute('src', 'img/radio-checked.svg');
    document.getElementById(uncheckId).classList.remove('checked');
    document.getElementById(uncheckedImageId).setAttribute('src', 'img/radio-unchecked.svg');

    if (element.id === 'yesLabel1') {
        var mpan = document.getElementById('mpan');
        mpan.value = 'MP **********3495';
        mpan.classList.add('industry');
        document.getElementById('autofilled1').style.visibility = 'visible';
        var mpanTick = document.getElementById('tick2');
        mpanTick.style.visibility = 'visible';
        mpanTick.classList.add('industry-tick');

        var consumption = document.getElementById('consumption');
        consumption.value = '27500';
        consumption.classList.add('industry');
        document.getElementById('autofilled2').style.visibility = 'visible';
        var consumptionTick = document.getElementById('tick3');
        consumptionTick.style.visibility = 'visible';
        consumptionTick.classList.add('industry-tick');

        document.getElementById('provider').selectedIndex = 1;
        document.getElementById('autofilled3').style.visibility = 'visible';
    } else if (element.id === 'noLabel1') {
        var mpan = document.getElementById('mpan');
        mpan.value = '';
        mpan.classList.remove('industry');
        document.getElementById('autofilled1').style.visibility = 'hidden';
        var mpanTick = document.getElementById('tick2');
        mpanTick.style.visibility = 'hidden';
        mpanTick.classList.remove('industry-tick');

        var consumption = document.getElementById('consumption');
        consumption.value = '';
        consumption.classList.remove('industry');
        document.getElementById('autofilled2').style.visibility = 'hidden';
        var consumptionTick = document.getElementById('tick3');
        consumptionTick.style.visibility = 'hidden';
        consumptionTick.classList.remove('industry-tick');

        document.getElementById('provider').selectedIndex = 0;
        document.getElementById('autofilled3').style.visibility = 'hidden';
    };
};

function fillBusinessName (element, tickId) {
    var businessNameInput = document.getElementById('businessName');
    var tick = document.getElementById('tick5');
    var autofill = document.getElementById('autofilled4');
    if (element.value !== '') {
        businessNameInput.value = 'Acme Inc.';
        businessNameInput.classList.add('industry');
        tick.style.visibility = 'visible';
        tick.classList.add('industry-tick');
        autofill.style.visibility = 'visible';
        document.getElementById(tickId).style.visibility = 'visible';
    } else {
        document.getElementById(tickId).style.visibility = 'hidden';
        businessNameInput.classList.remove('industry');
        autofill.style.visibility = 'hidden';
        tick.classList.remove('industry-tick');
        if (businessNameInput.value === 'Acme Inc.') {
            businessNameInput.value = 'Acme Inc.';
            tick.style.visibility = 'hidden';
            tick.classList.remove('industry-tick');
        };
    };
};

function toggleTick(element, tickId) {
    if (element.value !== '') {
        document.getElementById(tickId).style.visibility = 'visible';
    } else {
        document.getElementById(tickId).style.visibility = 'hidden';
    };
};