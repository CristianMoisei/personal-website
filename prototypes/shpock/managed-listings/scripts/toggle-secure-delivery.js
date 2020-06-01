function toggleSecureDelivery(state) {

    if (state == 'true') {
        localStorage.setItem('deliveryEnabled', state);
    } else {
        localStorage.setItem('deliveryEnabled', state);
    }
    
    setSecureDeliverySheet(state);
}


function setSecureDeliverySheet(state) {

    if (state == 'true') {
        document.getElementById('usp-2').style.opacity = '1';
        document.getElementById('usp-3').style.opacity = '1';
        document.getElementById('usp-4').style.opacity = '1';
        
        document.getElementById('tick-2').src = "images/tick.png";
        document.getElementById('tick-3').src = "images/tick.png";
        document.getElementById('delivery-sheet-tags').style.opacity = '1';

        document.getElementById('collection-still-possible').style.display = 'flex';
    } else {    
        document.getElementById('usp-2').style.opacity = '0.5';
        document.getElementById('usp-3').style.opacity = '0.5';
        document.getElementById('usp-4').style.opacity = '0';

        document.getElementById('tick-2').src = "images/x.png";
        document.getElementById('tick-3').src = "images/x.png";
        document.getElementById('delivery-sheet-tags').style.opacity = '0';
    }
}


function showSecureDeliverySheet() {
    var deliveryEnabled = localStorage.getItem('deliveryEnabled')

    if (deliveryEnabled != null || deliveryEnabled != undefined) {
        document.getElementById('secure-delivery-sheet-container').style.display = 'flex';

        if (localStorage.getItem('deliveryEnabled') == 'false'){
            var controlWidth = $("#segmented-control").width() / 2;
            // $(".ios13-segmented-control .selection").css("transform","translateX(" + ($(this).outerWidth() * 0.5) + "px)");
            document.getElementById('selection').style.transform = `translateX(${controlWidth}px)`;    
            document.getElementById('second').checked = `true`;    
        }
    }
}