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

var pokedec=[{"name":charizard,"power":1000,"atack":[{"name":"Garra\n Metal","power":50},{"name":"Puño\n Fuego","power":60},{"name":"Colmillo\n Ígneo","power":65},{"name":"Cuchillada","power":50}], "title":"Charizard"},{"name":fuecoco,"power":800, "title":"Fuecoco","atack":[{"name":"Mordisco","power":50},{"name":"Calcinación","power":55},{"name":"Lanzallamas","power":65},{"name":"Alarido","power":50}]},{"name":rowlet,"power":700, "title":"Rowlet","atack":[{"name":"Picotazo","power":50},{"name":"Hoja\n afilada","power":60},{"name":"Ataque\n Furía","power":65},{"name":"Hoja\n Aguda","power":70}]},{"name":bulbazur,"power":500, "title":"Bulbazur","atack":[{"name":"Latigo\n Cepa","power":50},{"name":"Polvo\n Veneno","power":60},{"name":"Bomba\n Germen","power":65},{"name":"Placaje","power":50}]}];

//funcion aleatoria
function random(){
    return Math.floor(Math.random(0,3)*3);
}
 function jugador2(){
    character_2.innerHTML=`<span class="person2 img" style="background-image: url(${countdown});"></span>`;
    
    var randomn=random();
    console.log(random);
    return new Promise(resolve=>{
       setTimeout(()=>{resolve(character_2.innerHTML=`<span class="person2 img" style="background-image: url(${pokedecr[randomn]});"><span class="beat-container two conttwo" ></span><</span>`,cpu.innerHTML=`<strong>CPU poder:</strong> ${pointcpu=pokedec[randomn].power}`);},510); 
    });
}
async function jugadortwo(){
    const result=await jugador2();
}
//jugador 1
function jugar(id){
    console.log("funcion iniciada");
    console.log(pokedec[id].title);
   character_1.innerHTML=`<span class="person1 img" style="background-image: url(${pokedec[id].name});"><span class="beat-container one contone" ></span></span>`;
   j1.innerHTML=`<strong>Tú poder:</strong> ${pointj1=pokedec[id].power}`;
   setTimeout(()=>{jugadortwo();},1000);
   change(id);
   
}
//cambio de controles
function change(id){
    title_choose.innerHTML=`Juega ya!`;
    let view=`${pokedec[id].atack.map(item=>`<input type="button"  value="${item.name}" onclick="atack(${item.power})" >`)}`;
    chooseplayer.innerHTML=view;
}
//funciones ataques
function atack(power){
    var beat_container=document.querySelector(".conttwo");
    beat_container.innerHTML=`<span class="beat2 beat img" style="background-image: url(https://ypok.netlify.app/src/img/fondos/ouch1.png);width:70px;height:60px; position:absolute;"></span>`;
    pointr(power);
    setTimeout(()=>{removeimg();console.log("funciona");},800);
}
function removeimg(){
       //area de golpes2
   let beat2=document.querySelector(".beat2");
    beat2.classList.remove("img");
}
//funcion puntaje restante
function pointr(power){
pointcpu-=power;
cpu.innerHTML=`<strong>Tú poder:</strong> ${pointcpu}`;
if(pointcpu<=0){
    cpu.innerHTML=`<strong>Tú poder:</strong> 0`;
    var contone=document.querySelector(".contone");
    contone.innerHTML=`<span class="beat1 beat img" style="background-image: url(https://cdn-icons-png.flaticon.com/512/477/477243.png);width:100px;height:100px; position:absolute;"></span>`;
}
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
var pointj1;
var pointcpu;
//area de poderes
var j1=document.querySelector(".yourpower");
var cpu=document.querySelector(".cpupower");
//array con los personajes del cpu
var pokedecr=[charizard1,fuecoco1,rowlet1,bulbazur1];
var character_1=document.querySelector(".character_1");
var character_2=document.querySelector(".character_2");