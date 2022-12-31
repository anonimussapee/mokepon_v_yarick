var charizard="https://ypok.netlify.app/src/img/fondos/charizard.png";
var fuecoco="https://ypok.netlify.app/src/img/fondos/fuecoco.png";
var rowlet="https://ypok.netlify.app/src/img/fondos/rowlet.png";

var bulbazur="https://ypok.netlify.app/src/img/fondos/Bulbasaur.png";
var warning="https://cdn.pixabay.com/animation/2022/12/05/15/23/15-23-06-837_512.gif";
var pokedec=[charizard,fuecoco,rowlet,bulbazur];
console.log(pokedec);
var character_1=document.querySelector(".character_1");
var character_2=document.querySelector(".character_2");
console.log(character_1);
console.log(character_2);
//btn bulbazur
document.querySelector(".bulbazur").addEventListener('click',function(){
    console.log("funcion iniciada");
    console.log(bulbazur);
character_1.innerHTML=`<span class="person1 img" style="background-image: url(${bulbazur});"></span>`;
character_2.innerHTML=`<span class="person2 img" style="background-image: url(${warning});"></span>`;
});
//bottoncharizard
document.querySelector(".charizard").addEventListener('click',function(){
    console.log("funcion iniciada");
    console.log(charizard);
character_1.innerHTML=`<span class="person1 img" style="background-image: url(${charizard});"></span>`;
character_2.innerHTML=`<span class="person2 img" style="background-image: url(${warning});"></span>`;
});
//bottonfuecoco
document.querySelector(".fuecoco").addEventListener('click',function(){
    console.log("funcion iniciada");
    console.log(fuecoco);
character_1.innerHTML=`<span class="person1 img" style="background-image: url(${fuecoco});"></span>`;
character_2.innerHTML=`<span class="person2 img" style="background-image: url(${warning});"></span>`;
});
//bottonrowlet
document.querySelector(".rowlet").addEventListener('click',function(){
    console.log("funcion iniciada");
    console.log(rowlet);
character_1.innerHTML=`<span class="person1 img" style="background-image: url(${rowlet});"></span>`;
character_2.innerHTML=`<span class="person2 img" style="background-image: url(${warning});"></span>`;
});