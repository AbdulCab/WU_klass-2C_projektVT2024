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


