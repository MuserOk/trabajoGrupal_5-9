let datos = [{
        image: {
            thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
            mobile: "./assets/images/image-waffle-mobile.jpg",
            tablet: "./assets/images/image-waffle-tablet.jpg",
            desktop: "./assets/images/image-waffle-desktop.jpg"
        },
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.50
    },
    {
        image: {
            thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
            mobile: "./assets/images/image-creme-brulee-mobile.jpg",
            tablet: "./assets/images/image-creme-brulee-tablet.jpg",
            desktop: "./assets/images/image-creme-brulee-desktop.jpg"
        },
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.00
    },
    {
        image: {
            thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
            mobile: "./assets/images/image-macaron-mobile.jpg",
            tablet: "./assets/images/image-macaron-tablet.jpg",
            desktop: "./assets/images/image-macaron-desktop.jpg"
        },
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.00
    },
    {
        image: {
            thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
            mobile: "./assets/images/image-tiramisu-mobile.jpg",
            tablet: "./assets/images/image-tiramisu-tablet.jpg",
            desktop: "./assets/images/image-tiramisu-desktop.jpg"
        },
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.50
    },
    {
        image: {
            thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
            mobile: "./assets/images/image-baklava-mobile.jpg",
            tablet: "./assets/images/image-baklava-tablet.jpg",
            desktop: "./assets/images/image-baklava-desktop.jpg"
        },
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.00
    },
    {
        image: {
            thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
            mobile: "./assets/images/image-meringue-mobile.jpg",
            tablet: "./assets/images/image-meringue-tablet.jpg",
            desktop: "./assets/images/image-meringue-desktop.jpg"
        },
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.00
    },
    {
        image: {
            thumbnail: "./assets/images/image-cake-thumbnail.jpg",
            mobile: "./assets/images/image-cake-mobile.jpg",
            tablet: "./assets/images/image-cake-tablet.jpg",
            desktop: "./assets/images/image-cake-desktop.jpg"
        },
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.50
    },
    {
        image: {
            thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
            mobile: "./assets/images/image-brownie-mobile.jpg",
            tablet: "./assets/images/image-brownie-tablet.jpg",
            desktop: "./assets/images/image-brownie-desktop.jpg"
        },
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.50
    },
    {
        image: {
            thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
            mobile: "./assets/images/image-panna-cotta-mobile.jpg",
            tablet: "./assets/images/image-panna-cotta-tablet.jpg",
            desktop: "./assets/images/image-panna-cotta-desktop.jpg"
        },
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.50
    }
];


let cards = document.querySelector("#contenedor")

for (let index = 0; index < datos.length; index++) {
    const dato = datos[index];
    cards.innerHTML += `
    <div class="card flex flex-col gap-2 py-2 px-4 border-2">
        <div class="relative flex ">
            <img id="img" class="rounded-sm bg-[url(${dato.image.mobile})] sm:bg-[url(${dato.image.tablet})] md:bg-[url(${dato.image.desktop})] lg:bg-[url(${dato.image.thumbnail})] bg-cover bg-center" src="" alt="${dato.name}">
            <button id="btnAñadir" class="absolute top-110 flex gap-2 items-center justify-center border-2 rounded-2xl p-2">
                <img src="../assets/images/icon-add-to-cart.svg">
                <p class="font-bold">Add to Cart</p>
            </button>
            <button id="btnAñadiendo" class="hidden bg-orange-900  absolute top-110 flex gap-2 items-center justify-between border-2 rounded-2xl p-2">
                <img src="../assets/images/icon-decrement-quantity.svg">
                <p class ="text-white"></p>
                <img src="../assets/images/icon-increment-quantity.svg">
            </button>
        </div>
        <h2 id="tituloProd" class="text-gray-500">${dato.category}</h2>
        <h3 id="nombreProd" class="text-xl font-bold">${dato.name}</h3>
        <p id="precio" class="text-orange-700">$${dato.price.toFixed(2)}</p>
    </div>
    `
}