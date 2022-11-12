let menuBtn = document.querySelector(".menu-btn")
let navigation = document.querySelector(".navigation")
let main = document.querySelector("main")
let listItems = document.querySelectorAll(".navigation ul li")
menuBtn.addEventListener("click" , function () {
    navigation.classList.toggle("active")
    main.classList.toggle("active")
})

function activeLink () {
    listItems.forEach(items => {
        items.classList.remove("hovered")
        this.classList.add("hovered")
    })
}

listItems.forEach(items => items.addEventListener("mouseover" , activeLink))