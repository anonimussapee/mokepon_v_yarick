var charizard="https://studio.code.org/v3/assets/g7fqgc6s41xEpkL7tyQXkl5C8DecaQVDnJbRIxbJeXE/Charizard.gif";
var fuecoco="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f9c5e0fe-eb02-4931-a508-afe7f09cf75a/df11rac-102b026e-3834-4aaf-9697-beb2d56c7d02.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y5YzVlMGZlLWViMDItNDkzMS1hNTA4LWFmZTdmMDljZjc1YVwvZGYxMXJhYy0xMDJiMDI2ZS0zODM0LTRhYWYtOTY5Ny1iZWIyZDU2YzdkMDIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.V7kxU7ha2omxYYosV-oI82vFybLFu3KLn8LkhEezfWA";
var rowlet="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/70e6cd59-1391-4f07-afb7-3620cd80c2c7/da24sqw-b7930b8e-5227-4a2d-a5b9-e71107a35dae.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwZTZjZDU5LTEzOTEtNGYwNy1hZmI3LTM2MjBjZDgwYzJjN1wvZGEyNHNxdy1iNzkzMGI4ZS01MjI3LTRhMmQtYTViOS1lNzExMDdhMzVkYWUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.M-WM_vNDOSyhaGDAxOozaP8D3T40_crHr2y-qkOHIS0";

var bulbazur="https://i.pinimg.com/originals/62/2d/83/622d8382aa83d3fd3ca25ea7a5ff3b6f.gif";
var warning="https://cdn.pixabay.com/animation/2022/08/01/22/45/22-45-00-157_512.gif";
var countdown="https://cdn.pixabay.com/animation/2022/09/24/02/37/02-37-04-457_512.gif";

var pokedec=[{"name":charizard,"power":1000,"atack":[{"name":"Garra\n Metal","power":50},{"name":"Puño\n Fuego","power":60},{"name":"Colmillo\n Ígneo","power":65},{"name":"Cuchillada","power":50}], "title":"Charizard"},{"name":fuecoco,"power":800, "title":"Fuecoco","atack":[{"name":"Mordisco","power":50},{"name":"Calcinación","power":55},{"name":"Lanzallamas","power":65},{"name":"Alarido","power":50}]},{"name":rowlet,"power":700, "title":"Rowlet","atack":[{"name":"Picotazo","power":50},{"name":"Hoja\n afilada","power":60},{"name":"Ataque\n Furía","power":65},{"name":"Hoja\n Aguda","power":70}]},{"name":bulbazur,"power":500, "title":"Bulbazur","atack":[{"name":"Latigo\n Cepa","power":50},{"name":"Polvo\n Veneno","power":60},{"name":"Bomba\n Germen","power":65},{"name":"Placaje","power":50}]}];

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