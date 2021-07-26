const arr=[[11,12,13,14],[21,22,23,24],[31,32,33,34],[41,42,43,44]]
let cur_empty=15;
var once=true;
var start=true;
const divs=document.querySelectorAll('.col');
const rows=document.querySelectorAll('.row');
const btn=document.getElementById("rand");

function play(str) {   
    let beepsound = new Audio(   
`${str}.wav`);   
    beepsound.play();   
}   


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function switch_innerHTML(div1,div2)
{
    let tdiv=document.createElement('div');
    tdiv.classList.add('col');
    tdiv.innerHTML=div1.innerHTML;
    div1.innerHTML=div2.innerHTML;
    div2.innerHTML=tdiv.innerHTML;
    // For changing the no.
    let str=div1.classList[1];
    let str2=div2.classList[1];

    div1.classList.replace(str,str2);
    div2.classList.replace(str2,str);
    //

}
function switch_empty(div1,div2) {
    let tdiv=document.createElement('div');
    tdiv.classList.add('col');
    tdiv.innerHTML=div1.innerHTML;
    div1.innerHTML=div2.innerHTML;
    div2.innerHTML=tdiv.innerHTML;
    // For changing the no.
    let str=div1.classList[1];
    let str2=div2.classList[1];

    div1.classList.replace(str,str2);
    div2.classList.replace(str2,str);
    //


    div1.classList.remove('current_empty');
    div2.classList.add('current_empty');
    
    
}


window.addEventListener("keydown",(el)=>
{   
    
    try{
    switch (el.code)
    {
        case "ArrowDown":
        case  "KeyS":
            if(cur_empty-4>=0){
                switch_empty(divs[cur_empty],divs[cur_empty-4]);
                cur_empty=cur_empty-4;
                play("sound1");
                }
            else
            {
                play("sound2");
                
            }

        break;
        case "ArrowUp" :
        case "KeyW":
            if(cur_empty+4<=15)
            {
            console.log("ArrowDown");
            switch_empty(divs[cur_empty],divs[cur_empty+4]);
            cur_empty=cur_empty+4;
            
            play("sound1");
            }
            else
            {play("sound2");}
        break;
        case "ArrowRight":
        case "KeyD":
            if(cur_empty%4!==0){
            console.log("ArrowDown");
            switch_empty(divs[cur_empty],divs[cur_empty-1]);
            cur_empty=cur_empty-1;
            play("sound1");}
            else
            {play("sound2");}
        break;
        case "ArrowLeft":
        case "KeyA":
            if(cur_empty%4!==3){
            console.log("ArrowDown");
            switch_empty(divs[cur_empty],divs[cur_empty+1]);
            cur_empty=cur_empty+1;
            play("sound1");
            }
            else
            {play("sound2");}
        break;
        default:
            console.log("Unknwon key",el.code);
        break;
    }

    }
    catch{
        play("error");
    }
    
    console.log(` cur_empty=${cur_empty}`);
    let flag=1;
    for(let d=0;d<16;d++)
    {   
        if(divs[d].classList[1]!==`${d+1}`)
            flag=0;
    }
    if(flag===1)
        {
            play("Win");
            console.log("Ypu win~~");
        }
    
})


btn.addEventListener("click",()=>
{
    start=true;
    if(once)
    {  
        for(let i=0;i<15;i++)
        {
            let rand=generaateRand(15);
            switch_innerHTML(divs[i],divs[rand]);
        }
        once=false;
    }
    else
    {
        for(let i=0;i<15;i++)
        {
            let rand=generaateRand(15);
            switch_innerHTML(divs[i],divs[rand]);
        }
        for(let f of divs)
        {
            
            if(f.innerHTML==="\n            ")
            {
                switch_empty(f,divs[15]);
            }
            else
            {
                f.classList.contains('current_empty')? f.classList.remove('current_empty') :{};
            }
        }
        cur_empty=15;
    }
},once)
function generaateRand(n)
{
    return(Math.floor(Math.random()*n))
}
