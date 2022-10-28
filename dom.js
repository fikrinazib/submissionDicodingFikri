const slider =document.querySelector("#slider")
const awal =document.querySelector(".awal")
const akhir =document.querySelector(".akhir")

awal.innerHTML = slider.min;
akhir.innerHTML = slider.value;
slider.addEventListener('input', function(){
    akhir.innerHTML = slider.value;
})