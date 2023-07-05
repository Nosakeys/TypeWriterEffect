let para = document.getElementById("para")

let quotes = "My love for you is undoubtely the only thing that will never end. You make me feel the best I've felt ever felt,and i'll forever treasure it. I will always love you dear muah!!!I love you Temidayo!"
let index = 0
let speed = 100


function ocl () {
    if (index < quotes.length) {
        para.textContent += quotes.charAt(index)
        index++
    }
    setTimeout(ocl,speed)
}

