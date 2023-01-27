const container=document.querySelector(".splide__list");

let apiData;

async function getData() {
    const response=await fetch("https://rickandmortyapi.com/api/character");
    apiData=await response.json();
    apiData.results.forEach((element) => {
        container.innerHTML +=`
        <li class="splide__slide">
        <img src="${element.image}" alt="" />
        <p class="name">${element.name}</p>
        <p class="status">${element.status}</p>
        </li>
        `;
    
});
console.log(apiData);
}

new Splide("#splide", {
    type:"loop",
    perPage:3,
    width:"65%",
    height:"450px",
    gap:20,
}).mount();
 
document.addEventListener("DOMContentLoaded",getData);