// hamburgermeny
const burger = document.getElementById('burger')
const linkList = document.getElementById('link_list')

function toggleMenu() {
    linkList.classList.toggle('links_visible')
    burger.classList.toggle('burger_in_x_form')
}

burger.addEventListener('click', toggleMenu)


// bildspel
const imageGallerySources = ["img/bildspel/bildspel_1.jpg","img/bildspel/bildspel_2.jpg", "img/bildspel/bildspel_3.jpg", "img/bildspel/bildspel_4.jpg", "img/bildspel/bildspel_5.jpg", "img/bildspel/bildspel_6.jpg"]

var imageIndex = 0

function newImageRight() {
    if (imageIndex == 5) {
        imageIndex = 0
    }
    else {
        imageIndex = imageIndex + 1
    }
    document.getElementById("gallery_img").src = imageGallerySources[imageIndex]
}

function newImageLeft() {
    if (imageIndex == 0) {
        imageIndex = 5
    }
    else {
        imageIndex = imageIndex - 1
    }
    document.getElementById("gallery_img").src = imageGallerySources[imageIndex]
}

document.getElementById('arrow_left').addEventListener('click', newImageLeft)

document.getElementById('arrow_right').addEventListener('click', newImageRight)

//bildspel för mobil

var touchstartX = 0;
var touchendX = 0;
var touchableElement = document.getElementById('gallery_img');

touchableElement.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

touchableElement.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false);


function handleGesture() {
    if (touchendX < touchstartX) {
        newImageRight()
    }

    if (touchendX > touchstartX) {
        newImageLeft()
    }
}