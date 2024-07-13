const images = [
    {
        image: 'img/01.webp',  
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


const items = document.querySelector(".items")
const item= document.querySelectorAll(".item")
const prev = document.querySelector(".btn-top")
const next = document.querySelector(".btn-bottom")


// varibile active //

let active = 0;


// USO IL METODO FOREACH PER CICLARE GLI OGGETTI//
images.forEach((el)=>{
    items.innerHTML += `             
        <div class="image item relative d-none">
            <img src="${el.image}" alt="image">
            <div class="text absolute">
                <h3 class="size-20 color-white">${el.title}</h3>
                <p class="size-20 color-white">${el.text}</p>
            </div> 
        <div> `
})

// recupero il primo elemento con la classe image che ha anche la classe d-none per toglierli quest'ultima//
document.querySelectorAll('.image')[active].classList.remove('d-none');