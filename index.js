let turn="X";
let gameover=false;

const changeturn=()=>{
    return turn==="X"?"O":"X";
}

const checkwin=()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== '')){
            document.querySelector(".turn").innerText=boxtexts[e[0]].innerText + " Won";
            gameover=true;
        }
    })
}

let boxs=document.querySelectorAll(".boxtext1");
boxs.forEach(box =>{
    let boxtext=box.querySelector(".boxtext");
    box.addEventListener('click',()=>{
        if(boxtext.innerText==='' && !gameover){
            boxtext.innerText=turn;
            turn=changeturn();
            checkwin();
            if(!gameover){
                document.querySelector(".turn").innerText="Turn For "+turn;
            }
        }
    })
})

document.querySelector("button").addEventListener('click',()=>{
    let boxtext=document.querySelectorAll(".boxtext");
    turn=changeturn();
    boxtext.forEach(element =>{
        element.innerText=''
    })
    gameover=false;
    document.querySelector(".turn").innerText="Turn For "+turn;
})