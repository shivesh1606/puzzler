const arr=[[11,12,13,14],[21,22,23,24],[31,32,33,34],[41,42,43,44]]
let cur_empty=15;
function play() {   
    let beepsound = new Audio(   
'sound1.wav');   
    beepsound.play();   
}   
function error()
{
    let beepsound = new Audio(   
        'sound2.wav');   
            beepsound.play();   
}
function error2()
{
    let beepsound = new Audio(   
        'error.wav');   
            beepsound.play();   
}
function switch_innerText(div1,div2)
{
    let tdiv=document.createElement('div');
    tdiv.classList.add('col');
    tdiv.innerText=div1.innerText;
    div1.innerText=div2.innerText;
    div2.innerText=tdiv.innerText;

}
function switch_empty(div1,div2) {
    let tdiv=document.createElement('div');
    tdiv.classList.add('col');
    tdiv.innerText=div1.innerText;
    div1.innerText=div2.innerText;
    div2.innerText=tdiv.innerText;
    div1.classList.remove('current_empty');
    div2.classList.add('current_empty');
}

const divs=document.querySelectorAll('.col');
const rows=document.querySelectorAll('.row');
const btn=document.getElementById("rand");
window.addEventListener("keydown",(el)=>
{   
    
    try{
    switch (el.code)
    {
        case "ArrowUp":
            if(cur_empty-4>=0){
                switch_empty(divs[cur_empty],divs[cur_empty-4]);
                cur_empty=cur_empty-4;
                play();
                }
            else
            {error();}

        break;
        case "ArrowDown":
            if(cur_empty+4<=15)
            {
            console.log("ArrowDown");
            switch_empty(divs[cur_empty],divs[cur_empty+4]);
            cur_empty=cur_empty+4;
            
            play();
            }
            else
            {error();}
        break;
        case "ArrowLeft":
            if(cur_empty%4!==0){
            console.log("ArrowDown");
            switch_empty(divs[cur_empty],divs[cur_empty-1]);
            cur_empty=cur_empty-1;
            play();}
            else
            {error();}
        break;
        case "ArrowRight":
            if(cur_empty%4!==3){
            console.log("ArrowDown");
            switch_empty(divs[cur_empty],divs[cur_empty+1]);
            cur_empty=cur_empty+1;
            play();
            }
            else
            {error();}
        break;
        default:
            console.log("Unknwon key",el.code);
        break;
    }

    }
    catch{
        error2();
    }
    
    console.log(` cur_empty=${cur_empty}`);
})


btn.addEventListener("click",()=>
{

    for(let i=0;i<15;i++)
    {

        let rand=generaateRand(15);
        switch_innerText(divs[i],divs[rand]);
    }
})
function generaateRand(n)
{
    return(Math.floor(Math.random()*n))
}

