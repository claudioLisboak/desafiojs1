let precio = 400000;
const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio
const cantidad = document.querySelector(".cantidad")
let n = parseInt(cantidad.innerHTML)
let f = document.querySelector(".valor-total")
let total = f.innerHTML
f.innerHTML = precio * n


function sumar(){
n ++
cantidad.innerHTML = n
f.innerHTML = n* precio


}
function restar(){

    if(n==0){
    /* cantidad no puede ser menor a 0 */
    }else{
        n --
        cantidad.innerHTML = n
        f.innerHTML = n* precio
    }
}

function cambiarColor1(){
    let fondo = document.querySelector(".img-card")
    fondo.style.backgroundImage = "url('https://www.amd.com/content/dam/amd/en/images/products/laptops/2333002-asus-zenbook.png')";
}
function cambiarColor2(){
    let fondo = document.querySelector(".img-card")
    fondo.style.backgroundImage = "url('https://www.amd.com/system/files/2020-05/461767_MSI_Bravo_17_AMD_laptop_1260x709_0.png')";
}







