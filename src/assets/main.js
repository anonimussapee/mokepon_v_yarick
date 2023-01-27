var charizard="https://ypok.netlify.app/src/img/fondos/charizard2.png";
var fuecoco="https://ypok.netlify.app/src/img/fondos/fuecoco2.png";
var rowlet="https://ypok.netlify.app/src/img/fondos/rowlet2.png";

var bulbazur="https://ypok.netlify.app/src/img/fondos/Bulbasaur2.png";
var charizard1="https://ypok.netlify.app/src/img/fondos/charizard.png";
var fuecoco1="https://ypok.netlify.app/src/img/fondos/fuecoco.png";
var rowlet1="https://ypok.netlify.app/src/img/fondos/rowlet.png";

var bulbazur1="https://ypok.netlify.app/src/img/fondos/Bulbasaur.png";
var warning="https://cdn.pixabay.com/animation/2022/08/01/22/45/22-45-00-157_512.gif";
var countdown="https://cdn.pixabay.com/animation/2022/09/24/02/37/02-37-04-457_512.gif";

var pokedec=[{"name":charizard,"power":1000, "title":"Charizard"},{"name":fuecoco,"power":800, "title":"Fuecoco"},{"name":rowlet,"power":700, "title":"Rowlet"},{"name":bulbazur,"power":500, "title":"Bulbazur"}];

//funcion aleatoria
function random(){
    return Math.floor(Math.random(0,3)*3);
}
 function jugador2(){
    character_2.innerHTML=`<span class="person2 img" style="background-image: url(${countdown});"></span>`;
    
    var randomn=random();
    console.log(random);
    return new Promise(resolve=>{
       setTimeout(()=>{resolve(character_2.innerHTML=`<span class="person2 img" style="background-image: url(${pokedecr[randomn]});"></span>`,cpu.innerHTML=`<strong>CPU power:</strong>${pokedec[randomn].power}`);},510); 
    });
}
async function jugadortwo(){
    const result=await jugador2();
}
//jugador 1
function jugar(id){
    console.log("funcion iniciada");
    console.log(pokedec[id].title);
   character_1.innerHTML=`<span class="person1 img" style="background-image: url(${pokedec[id].name});"></span>`;
   j1.innerHTML=`<strong>Tú poder:</strong>${pokedec[id].power}`;
   setTimeout(()=>{jugadortwo();},1000);
   change();
   
}
//cambio de controles
function change(){
    title_choose.innerHTML=`Juega`;
    let view=`<input type="button" class="charizard" value="Ataque\n de fuego" onclick="atack()" >
    <input type="button" class="bulbazur" onclick="atack()" value="Super\n golpe ">
    <input type="button" class="fuecoco" value="Embestida" onclick="atack()" >
    <input type="button" class="rowlet" value="Patada\n voladora" onclick="atack()">`;
    chooseplayer.innerHTML=view;
}
//funciones ataques
function atack(){
    character_2.innerHTML+=`<span class="beat2 beat img" style="background-image: url(https://ypok.netlify.app/src/img/fondos/ouch1.png);"></span>`;
  
    setTimeout(()=>{removeimg();console.log("funciona");},800);
}
function removeimg(){
       //area de golpes2
   let beat2=document.querySelector(".beat2");
    beat2.classList.remove("img");
}
//area de ecoger jugador
var chooseplayer=document.querySelector(".choose--buttons-container");
//vista de botonos escoger player
var viewchoose=`${pokedec.map(item=>
    `<input type="button"  value="${item.title}" onclick="jugar(${pokedec.indexOf(item)})">`
)}`;
console.log("vista"+viewchoose);
chooseplayer.innerHTML+=viewchoose;
//title chooser
var title_choose=document.querySelector(".title");

//area de poderes
var j1=document.querySelector(".yourpower");
var cpu=document.querySelector(".cpupower");
//array con los personajes del cpu
var pokedecr=[charizard1,fuecoco1,rowlet1,bulbazur1];
var character_1=document.querySelector(".character_1");
var character_2=document.querySelector(".character_2");