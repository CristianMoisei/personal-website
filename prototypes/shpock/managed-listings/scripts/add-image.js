var imagesAdded = localStorage.getItem('imagesAdded') || 1;

function addImage() {

    if (imagesAdded == 1) {
        document.getElementById(`image-1`).style.display = 'inline';
        localStorage.setItem('imagesAdded', 2)
    }

    if (imagesAdded == 2) {
        document.getElementById(`image-2`).style.display = 'inline';
        localStorage.setItem('imagesAdded', 3)
    }

    if (imagesAdded == 3) {
        document.getElementById(`image-3`).style.display = 'inline';
        document.getElementById(`image-4`).style.display = 'none';
        localStorage.setItem('imagesAdded', 4)
    }

    imagesAdded = localStorage.getItem('imagesAdded');
}