function showContactDetails(){
        document.body.classList.add('scroll-disabled');
        document.getElementById('contact-modal').classList.add('modal-open');
}

function hideContactDetails(){
        document.body.classList.remove('scroll-disabled');
        document.getElementById('contact-modal').classList.remove('modal-open');
}

window.onclick = function(event) {
    if (event.target == document.getElementById('contact-modal')) {
        hideContactDetails()
    }
}