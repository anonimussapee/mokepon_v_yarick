//funcion audio
const sonido=document.querySelector("#pokeaudio");
const btnplay=document.querySelector(".play");
const btnpause=document.querySelector(".pause");
btnplay.addEventListener("click",()=>{
    sonido.play();
    btnplay.classList.add("off");
    btnpause.classList.add("on");
    pop1.style.visibility="hidden";
});
btnpause.addEventListener("click",()=>{
    sonido.pause();
    btnplay.classList.remove("off");
    btnpause.classList.remove("on");
});
//firstpopupsound
var pop1=document.querySelector(".popupsound");
document.querySelector(".closepop1").addEventListener("click",()=>{

    pop1.style.visibility="hidden";
});
//imagenes y el array del pokedex
var countdown="https://ypok.netlify.app/src/img/fondos/countdown.webp";

var pokedec=[{"img":{"width":120,"height":120,"img":"https://ypok.netlify.app/src/img/fondos/charizard.gif"},"power":1000,"atack":[{"name":"Ataque\n Ala","power":60,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/golpe.webp"},{"name":"Pirotecnia","power":60,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/explosion.webp"},{"name":"Colmillo\n Ígneo","power":70,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/fuego.gif"},{"name":"Cuchillada","power":65,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/stars.webp"}], "title":"Charizard","tipo":[{"tipo":"fuego"},{"tipo":"volador"}],"debilidad":[{"tipo":"agua"},{"tipo":"electrico"},{"tipo":"roca"}]}/*sig
*/ ,{"img":{"width":120,"height":120,"img":"https://ypok.netlify.app/src/img/fondos/fuecoco.gif"},"power":600, "title":"Fuecoco","atack":[{"name":"Mordisco","power":50,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/normal.gif"},{"name":"Calcinación","power":55,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/fuego.gif"},{"name":"Lanzallamas","power":65,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/fuego.gif"},{"name":"Ascuas","power":55,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/explosion.webp"}],"tipo":[{"tipo":"fuego"}],"debilidad":[{"tipo":"agua"},{"tipo":"tierra"},{"tipo":"roca"}]}/*sig
*/,{"img":{"width":85,"height":100,"img":"https://ypok.netlify.app/src/img/fondos/rowlet.gif"},"power":700, "title":"Rowlet","atack":[{"name":"Picotazo","power":50,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/stars.webp"},{"name":"Hoja\n afilada","power":60,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/hojas.gif"},{"name":"Ataque\n Furía","power":65,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/normal.gif"},{"name":"Hoja\n Aguda","power":70,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/hojas.gif"}],"tipo":[{"tipo":"planta"},{"tipo":"volador"}],"debilidad":[{"tipo":"fuego"},{"tipo":"volador"},{"tipo":"hielo"},{"tipo":"veneno"},{"tipo":"roca"}]}/*sig
*/ ,{"img":{"width":120,"height":120,"img":"https://ypok.netlify.app/src/img/fondos/bulbasaur.gif"},"power":500, "title":"Bulbazur","atack":[{"name":"Latigo\n Cepa","power":50,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/hojas.gif"},{"name":"Polvo\n Veneno","power":60,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/golpe2.webp"},{"name":"Bomba\n Germen","power":65,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/gas1.webp"},{"name":"somnifero","power":55,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/gas1.webp"}],"tipo":[{"tipo":"veneno"},{"tipo":"planta"}],"debilidad":[{"tipo":"fuego"},{"tipo":"volador"},{"tipo":"hielo"},{"tipo":"psiquico"}]}/*sig
*/ ,{"img":{"width":94,"height":100,"img":"https://ypok.netlify.app/src/img/fondos/squirtle.gif"},"title":"Squirtle","power":600,"atack":[{"name":"Burbuja","power":50,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/agua.gif"},{"name":"Agua\n Cola","power":60,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/stars.webp"},{"name":"hidro\n pulso","power":65,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/mar.gif"},{"name":"cabezazo","power":50,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/stars.webp"}],"tipo":[{"tipo":"agua"}],"debilidad":[{"tipo":"planta"},{"tipo":"electrico"}]}/*sig
*/ ,{"img":{"width":120,"height":120,"img":"https://ypok.netlify.app/src/img/fondos/pikachu.gif"},"power":800, "title":"pikachu","atack":[{"name":"Impac\n trueno","power":65,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/rayo2.webp"},{"name":"Látigo","power":50,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/stars.webp"},{"name":"Bola\n Voltio","power":65,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/golpe.webp"},{"name":"Chispazo","power":60,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/rayo2.webp"}],"tipo":[{"tipo":"electrico"}],"debilidad":[{"tipo":"tierra"}],"evolucion":[{"name":"raychu","img":{"img":"https://ypok.netlify.app/src/img/fondos/raichu.gif"},"power":1000,"atack":[],"tipo":"agua"},{"tipo":"volador"}],"evolucion":[{"name":"","title":"Megagyarados","power":1500,"atack":""}]}/*sig
*/ ,{
 "img":{"width":89,"height":120,"img":"https://ypok.netlify.app/src/img/fondos/dodrio.gif"},"title":"Dodrio","power":900,"atack":[{"name":"Ataque\n Furia","power":60,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/normal.gif"},{"name":"Doble\n Golpe","power":65,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/golpe2.webp"},{"name":"Pico\n Taladro","power":65,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/stars.webp"},{"name":"Picoteo","power":55,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/stars.webp"}],"tipo":[{"tipo":"normal"},{"tipo":"volador"}],"debilidad":[{"tipo":"hielo"},{"tipo":"electrico"},{"tipo":"roca"}]
}/*sig
*/ ,{"img":{"width":97,"height":120,"img":"https://ypok.netlify.app/src/img/fondos/onix.gif"},"power":799, "title":"Onix","atack":[{"name":"Lanza\n Rocas","power":60,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/golpe2.webp"},{"name":"avalancha","power":65,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/golpe2.webp"},{"name":"Tumba\n Rocas","power":65,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/stars.webp"},{"name":"Furia","power":60,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/normal.gif"}],"tipo":[{"tipo":"roca"},{"tipo":"tierra"}],"debilidad":[{"tipo":"acero"},{"tipo":"lucha"},{"tipo":"hielo"},{"tipo":"planta"},{"tipo":"tierra"}]}/*sig
*/ ,{"img":{"width":162,"height":120,"img":"https://ypok.netlify.app/src/img/fondos/magikarp.gif"},"power":450, "title":"Magikarp","atack":[{"name":"Salpicadura","power":40,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/agua.gif"},{"name":"Azote","power":50,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/golpe2.webp"},{"name":"Salto \n Cola","power":35,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/stars.webp"},{"name":"Placaje","power":50,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/agua.golpe2.webp"}],"tipo":[{"tipo":"agua"}],"debilidad":[{"tipo":"planta"},{"tipo":"electrico"}],"evolucion":[{"name":"gyarados","power":1000,"atack":[],"tipo":"agua"},{"tipo":"volador"}],"evolucion":[{"name":"","title":"Megagyarados","power":1500,"atack":""}]}/*sig
*/ ,{"img":{"width":120,"height":120,"img":"https://ypok.netlify.app/src/img/fondos/snorlax.gif"},"power":1000, "title":"Snorlax","atack":[{"name":"Golpe \n Cuerpo","power":70,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/golpe2.webp"},{"name":"Ronquido","power":65,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/stars.webp"},{"name":"Giga\n Impacto","power":70,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/golpe.webp"},{"name":"Tambor","power":60,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/normal.gif"}],"tipo":[{"tipo":"normal"}],"debilidad":[{"tipo":"lucha"}],"evolucion":[{"name":"Snorlax Gigamax","power":1000,"atack":[],"tipo":"agua"},{"tipo":"volador"}],"evolucion":[{"name":"","title":"Megagyarados","power":1500,"atack":""}]}/*sig
*/,{"img":{"width":130,"height":100,"img":"https://ypok.netlify.app/src/img/fondos/zapdos.gif"},"power":800, "title":"Zapdos","atack":[{"name":"Impac\n Trueno","power":65,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/rayo2.webp"},{"name":"Agilidad","power":60,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/stars.webp"},{"name":"Pico\n Taladro","power":65,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/golpe2.webp"},{"name":"Trueno","power":70,"gif":"https://ypok.netlify.app/src/img/fondos/efectos/rayo2.webp"}],"tipo":[{"tipo":"electrico"},{"tipo":"volador"}],"debilidad":[{"tipo":"hielo"},{"tipo":"roca"}],"evolucion":[{"name":"gyarados","power":1000,"atack":[],"tipo":"agua"},{"tipo":"volador"}],"evolucion":[{"name":"","title":"Megagyarados","power":1500,"atack":""}]},];

//funcion aleatoria
function random(){
    return Math.floor(Math.random(0,pokedec.length)*pokedec.length);
}
//function aleatoriatransform: scaleX(-1); para ataques
function randompower(){
    return Math.floor(Math.random(0,3)*3);
}
 function jugador2(){

    character_2.innerHTML=`<span class="person2 img" style="background-image: url(${countdown});"></span>`;
    cpuatacks=[];
    var randomn=random();
    pokedec[randomn].atack.map(item=>
        cpuatacks.push({"name":item.name,"power":item.power,"gif":item.gif})
        );
    return new Promise(resolve=>{
       setTimeout(()=>{resolve(character_2.innerHTML=`<span class="person2 img" style="background-image: url(${pokedec[randomn].img.img});width:${pokedec[randomn].img.width}px;height:${pokedec[randomn].img.height}px;display: block;margin: 0 auto;"><span class="beat-container two conttwo" ></span></span><span class="pointatack2" style="display:block;position:absolute;font-family:'Nabla', cursive;font-size:1.6rem;top:90px;"></span>`,cpu.innerHTML=`<strong>CPU poder:</strong> ${pointcpu=pokedec[randomn].power}`);b1.disabled=false;
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
   character_1.innerHTML=`<span class="person1 img" style="background-image: url(${pokedec[id].img.img});width:${pokedec[id].img.width}px;height:${pokedec[id].img.height}px;display: block;margin: 0 auto;"><span class="beat-container one contone" ></span></span><span class="pointatack1" style="display:block;position:absolute;font-family:'Nabla', cursive;font-size:1.6rem;top:90px;"></span>`;
   j1.innerHTML=`<strong>Tú poder:</strong> ${pointj1=pokedec[id].power}`;
   setTimeout(()=>{jugadortwo();},1000);
    change(id);
   
}
//cambio de controles
function change(id){
    title_choose.innerHTML=`Juega ya!`;
    var j=1;
    let view=`${pokedec[id].atack.map(item=>`<input type="button"  class="buttonsj1${j++}" value="${item.name}" onclick="atack(${item.power},'${item.gif}')" >`)}`;
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
function atack(power,gif){
    b1.disabled=true;
    b2.disabled=true;
    b3.disabled=true;
    b4.disabled=true;
    var sustraccion2=document.querySelector(".pointatack2");
    var beat_container=document.querySelector(".conttwo");
    beat_container.innerHTML=`<span class="beat2 beat img" style="background-image: url(${gif});width:165px;height:160px; position:absolute; bottom:-40px;right:-55px;"></span>`;
    pointr(2,power);
    setTimeout(()=>{removeimg(2);sustraccion2.innerHTML="-"+power},1400);
    setTimeout(()=>{sustraccion2.innerHTML=""},2200);
    if(pointj1>0 && pointcpu>0){
        setTimeout(()=>{contraataque();},1850);
    }else if(pointj1>0 && pointcpu<=0){
        var contone=document.querySelector(".contone");
        setTimeout(()=>{contone.innerHTML=`<span class="beat1 beat img" style="background-image: url(https://cdn-icons-png.flaticon.com/512/477/477243.png);width:100px;height:100px; top: -120px;
        right: 40px;position:absolute;"></span>`;title_choose.innerHTML=`Ganaste!`;},800);
        console.log("aqui esta la copa para ti");
        setTimeout(()=>{var win=document.querySelector(".beat1");
        
        player1win+=1;
        if(player1win===1){
            win.className="win1 img"
            win.style.width='20px';
            win.style.height='20px';
            win.style.top='-180px';
            win.style.right='12px';
            console.log(win);
        }
        },1000);
        
    }
}
//funcion contraataque
function contraataque(){
    var sustraccion1=document.querySelector(".pointatack1");
    let randomn=randompower();
    let powercpu=cpuatacks[randomn].power;
    let gif=cpuatacks[randomn].gif;
    let beat_container1=document.querySelector(".contone");
    beat_container1.innerHTML=`<span class="beat1 beat img" style="background-image: url(${gif});width:160px;height:165px;position:absolute;bottom:90px; right:15px;"></span>`;
    
    
    setTimeout(()=>{removeimg(1);sustraccion1.innerHTML="-"+powercpu},1400);
    setTimeout(()=>{sustraccion1.innerHTML=""},2200);
    pointr(1,powercpu);
    if(pointj1<=0 && pointj1<pointcpu){var conttwo=document.querySelector(".conttwo");
    setTimeout(()=>{conttwo.innerHTML=`<span class="beat2 beat img" style="background-image: url(https://cdn-icons-png.flaticon.com/512/477/477243.png);width:100px;height:100px; bottom: -14px;position:absolute;"></span>`;title_choose.innerHTML=`Perdiste!`;},800);
    console.log("esta aqui en gano el cpu");
    }else if(pointcpu>0 && pointj1>0){
        b1.disabled=false;
            b2.disabled=false;
            b3.disabled=false;
            b4.disabled=false;
    }
    
}
//remove img del ouch
function removeimg(op){
       //area debottom: -14px; golpes2
       if(op==2){
        let beat2=document.querySelector(".conttwo");
    beat2.innerHTML='';
       }else if(op==1){
        let beat1=document.querySelector(".contone");
    beat1.innerHTML='';
       }
   
}
//funcion puntaje restante
function pointr(player,power){
if(player==2){pointcpu-=power;
cpu.innerHTML=`<strong>Cpu poder:</strong> ${pointcpu}`;
if(pointcpu<=0){
    cpu.innerHTML=`<strong>Cpu poder:</;console.log("funciona");strong> 0`;
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
chooseplayer.innerHTML+=viewchoose;
//title chooser
var title_choose=document.querySelector(".title");
var pointj1;
var pointcpu;
//partidas ganadas
var cpuwin=0;
var player1win=0;
//area de poderes
var j1=document.querySelector(".yourpower");
var cpu=document.querySelector(".cpupower");
//array con los personajes del cpu
var character_1=document.querySelector(".character_1");
var character_2=document.querySelector(".character_2");
//puntajes menos
var sustraccion1;
var sustraccion2;