var countdown="https://ypok.netlify.app/src/img/fondos/countdown.webp";

var pokedec=[{"name":"https://ypok.netlify.app/src/img/fondos/charizard.gif","power":1000,"atack":[{"name":"Garra\n Metal","power":50},{"name":"Puño\n Fuego","power":60},{"name":"Colmillo\n Ígneo","power":65},{"name":"Cuchillada","power":50}], "title":"Charizard"}/*sig
*/ ,{"name":"https://ypok.netlify.app/src/img/fondos/fuecoco.gif","power":800, "title":"Fuecoco","atack":[{"name":"Mordisco","power":50},{"name":"Calcinación","power":55},{"name":"Lanzallamas","power":65},{"name":"Alarido","power":50}]}/*sig
*/,{"name":"https://ypok.netlify.app/src/img/fondos/rowlet.gif","power":700, "title":"Rowlet","atack":[{"name":"Picotazo","power":50},{"name":"Hoja\n afilada","power":60},{"name":"Ataque\n Furía","power":65},{"name":"Hoja\n Aguda","power":70}]}/*sig
*/ ,{"name":"https://ypok.netlify.app/src/img/fondos/bulbasaur.gif","power":500, "title":"Bulbazur","atack":[{"name":"Latigo\n Cepa","power":50},{"name":"Polvo\n Veneno","power":60},{"name":"Bomba\n Germen","power":65},{"name":"Placaje","power":50}],"tipo":[{"tipo":"veneno"},{"tipo":"planta"}]}/*sig
*/ ,{"name":"https://ypok.netlify.app/src/img/fondos/squirtle.gif","title":"Squirtle","power":"500","atack":[{"name":"Latigo\n Cepa","power":50},{"name":"Polvo\n Veneno","power":60},{"name":"Bomba\n Germen","power":65},{"name":"Placaje","power":50}],"tipo":[{"tipo":"agua"}]}/*sig
*/ ,{"name":"https://ypok.netlify.app/src/img/fondos/pikachu.gif","power":500, "title":"pikachu","atack":[{"name":"Latigo\n Cepa","power":50},{"name":"Polvo\n Veneno","power":60},{"name":"Bomba\n Germen","power":65},{"name":"Placaje","power":50}],"tipo":[{"tipo":"electrico"}],"evolucion":[{"name":"raychu","img":{"img":"https://ypok.netlify.app/src/img/fondos/raichu.gif"},"power":1000,"atack":[],"tipo":"agua"},{"tipo":"volador"}],"evolucion":[{"name":"","title":"Megagyarados","power":1500,"atack":""}]}/*sig
*/ ,{
    "name":"https://ypok.netlify.app/src/img/fondos/dodrio.gif","title":"Dodrio","power":"500","atack":[{"name":"Latigo\n Cepa","power":50},{"name":"Polvo\n Veneno","power":60},{"name":"Bomba\n Germen","power":65},{"name":"Placaje","power":50}],"tipo":[{"tipo":"normal"},{"tipo":"volador"}]
}/*sig
*/ ,{"name":"https://ypok.netlify.app/src/img/fondos/onix.gif","power":"500", "title":"Onix","atack":[{"name":"Latigo\n Cepa","power":50},{"name":"Polvo\n Veneno","power":60},{"name":"Bomba\n Germen","power":65},{"name":"Placaje","power":50}],"tipo":[{"tipo":"roca"},{"tipo":"tierra"}]}/*sig
*/ ,{"name":"https://ypok.netlify.app/src/img/fondos/magikarp.gif","power":500, "title":"Magikarp","atack":[{"name":"Latigo\n Cepa","power":50},{"name":"Polvo\n Veneno","power":60},{"name":"Bomba\n Germen","power":65},{"name":"Placaje","power":50}],"tipo":[{"tipo":"agua"}],"evolucion":[{"name":"gyarados","power":1000,"atack":[],"tipo":"agua"},{"tipo":"volador"}],"evolucion":[{"name":"","title":"Megagyarados","power":1500,"atack":""}]}/*sig
*/ ,{"name":"https://ypok.netlify.app/src/img/fondos/snorlax.gif","power":500, "title":"Snorlax","atack":[{"name":"Latigo\n Cepa","power":50},{"name":"Polvo\n Veneno","power":60},{"name":"Bomba\n Germen","power":65},{"name":"Placaje","power":50}],"tipo":[{"tipo":"normal"}],"evolucion":[{"name":"Snorlax Gigamax","power":1000,"atack":[],"tipo":"agua"},{"tipo":"volador"}],"evolucion":[{"name":"","title":"Megagyarados","power":1500,"atack":""}]}/*sig
*/,{"name":"https://ypok.netlify.app/src/img/fondos/zapdos.gif","power":500, "title":"Zapdos","atack":[{"name":"Latigo\n Cepa","power":50},{"name":"Polvo\n Veneno","power":60},{"name":"Bomba\n Germen","power":65},{"name":"Placaje","power":50}],"tipo":[{"tipo":"electrico"},{"tipo":"volador"},{"tipo":"lucha"}],"evolucion":[{"name":"gyarados","power":1000,"atack":[],"tipo":"agua"},{"tipo":"volador"}],"evolucion":[{"name":"","title":"Megagyarados","power":1500,"atack":""}]},];

//funcion aleatoria
function random(){
    return Math.floor(Math.random(0,3)*3);
}
 function jugador2(){

    character_2.innerHTML=`<span class="person2 img" style="background-image: url(${countdown});"></span>`;
    cpuatacks=[];
    var randomn=random();
    console.log(random);
    pokedec[randomn].atack.map(item=>
        cpuatacks.push({"name":item.name,"power":item.power})
        );

    console.log(cpuatacks);
    return new Promise(resolve=>{
       setTimeout(()=>{resolve(character_2.innerHTML=`<span class="person2 img" style="background-image: url(${pokedec[randomn].name});"><span class="beat-container two conttwo" ></span><</span>`,cpu.innerHTML=`<strong>CPU poder:</strong> ${pointcpu=pokedec[randomn].power}`);b1.disabled=false;
       b2.disabled=false;
       b3.disabled=false;
       b4.disabled=false;},510); 
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
    var j=1;
    let view=`${pokedec[id].atack.map(item=>`<input type="button"  class="buttonsj1${j++}" value="${item.name}" onclick="atack(${item.power})" >`)}`;
    chooseplayer.innerHTML=view;
    b1=document.querySelector(".buttonsj11");
    b2=document.querySelector(".buttonsj12");
    b3=document.querySelector(".buttonsj13");
    b4=document.querySelector(".buttonsj14");
    b1.disabled=true;
    b2.disabled=true;
    b3.disabled=true;
    b4.disabled=true;
}
//funciones ataques
function atack(power){
    b1.disabled=true;
    b2.disabled=true;
    b3.disabled=true;
    b4.disabled=true;
    var beat_container=document.querySelector(".conttwo");
    beat_container.innerHTML=`<span class="beat2 beat img" style="background-image: url(https://ypok.netlify.app/src/img/fondos/ouch1.png);width:100px;height:100px; position:absolute; bottom:-5px;right:0;"></span>`;
    pointr(2,power);
    setTimeout(()=>{removeimg(2);console.log("funciona el removeimg");},800);
    console.log("power j1"+pointj1);
    if(pointj1>0 && pointcpu>0){
        setTimeout(()=>{contraataque();},1850);
     console.log("botones habilitados");
    }
}
//funcion contraataque
function contraataque(){
    let powercpu=cpuatacks[random()].power;
    let beat_container1=document.querySelector(".contone");
    beat_container1.innerHTML=`<span class="beat1 beat img" style="background-image: url(https://ypok.netlify.app/src/img/fondos/ouch1.png);width:100px;height:100px;transform: scaleX(-1);position:absolute;bottom:125px; right:50px;"></span>`;
    pointr(1,powercpu);
    console.log(pointj1);
    if(pointj1<=0 && pointj1<pointcpu){var conttwo=document.querySelector(".conttwo");
    setTimeout(()=>{conttwo.innerHTML=`<span class="beat1 beat img" style="background-image: url(https://cdn-icons-png.flaticon.com/512/477/477243.png);width:100px;height:100px; position:absolute;"></span>`;},800);
    console.log("esta aqui");
    }else if(pointcpu<=0){
        var contone=document.querySelector(".contone");
        setTimeout(()=>{contone.innerHTML=`<span class="beat1 beat img" style="background-image: url(https://cdn-icons-png.flaticon.com/512/477/477243.png);width:100px;height:100px; position:absolute;"></span>`;},800);
    
    }else{
        b1.disabled=false;
            b2.disabled=false;
            b3.disabled=false;
            b4.disabled=false;
    }
    console.log(powercpu);
    setTimeout(()=>{removeimg(1);console.log("funciona");},800);
}
//remove img del ouch
function removeimg(op){
       //area de golpes2
       if(op==2){
        let beat2=document.querySelector(".beat2");
    beat2.classList.remove("img");
       }else if(op==1){
        let beat1=document.querySelector(".beat1");
    beat1.classList.remove("img");
       }
   
}
//funcion puntaje restante
function pointr(player,power){
if(player==2){pointcpu-=power;
cpu.innerHTML=`<strong>Cpu poder:</strong> ${pointcpu}`;
if(pointcpu<=0){
    cpu.innerHTML=`<strong>Cpu poder:</strong> 0`;
 }
}else if(player==1){
    pointj1-=power;
    j1.innerHTML=`<strong>Tú poder:</strong> ${pointj1}`;
    if(pointj1<=0){
        j1.innerHTML=`<strong>Tú poder:</strong> 0`;
        b1.disabled=true;
        b2.disabled=true;
        b3.disabled=true;
        b4.disabled=true;
        }
    }
}//reset funcion
function reset(){
    window.location.reload();
}
//botones ataque
    var b1;
    var b2;
    var b3;
    var b4;
//ataques del cpu
 var cpuatacks=[];
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
var character_1=document.querySelector(".character_1");
var character_2=document.querySelector(".character_2");