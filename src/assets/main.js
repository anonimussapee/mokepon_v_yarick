var bulbazur="https://ypok.netlify.app/src/img/fondos/Bulbasaur.png";
var where=document.querySelector(".ring--characters-container");
console.log(where);
document.querySelector(".bulbazur").addEventListener('click',function(){
    console.log("funcion iniciada");
    console.log(bulbazur);
where.innerHTML=`<div class="character_1 img" style="background-image: url(${bulbazur});"></div><div class="character_2 img"></div>`;
});