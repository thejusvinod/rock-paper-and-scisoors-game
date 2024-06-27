

let user=0
let computer=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const users=document.querySelector("#user-score")
const comps=document.querySelector("#comp-score")

choices.forEach((choice)=>{ 
  
    choice.addEventListener('click',()=>
        {const userchoice=choice.getAttribute("id")
            ;console.log("choice was clicked",userchoice);
        playgame(userchoice)}
    )
})
const generatecompchoice = () =>{ 
    const options=["rock","paper","scissors"]
    ;const randomindex=Math.floor(Math.random()*3);
    return options[randomindex];

}
const playgame= (userchoice) =>
    { 
        console.log("user choice",userchoice);
        const compchoice=generatecompchoice();
        console.log("computer choice",compchoice);
        if(userchoice==compchoice)
            { 
              drawgame();
              msg.innerText="the game is draw"
                msg.style.backgroundColor="black"
            }
        else
        { 
            let userwin=true;
            if(userchoice==="rock")
                { 
                    userwin=compchoice==="paper"?false:true;

                }
            else if(userchoice==="paper")
                { 
                    userwin=compchoice==="scissors"?false:true;
                }
            else
            {
                userwin=compchoice==="rock"?false:true;
            } 
            showinner(userwin);   
        }


    }
const drawgame =() =>
    { 
        console.log("the game is draw");
    }
const showinner=(userwin)=>
    { 
        if(userwin)
        { 
            user++;
            users.innerText=user
            console.log('you win');
            msg.innerText="you win";
            msg.style.backgroundColor="green"
        }
        else
        { 
            computer++;
            comps.innerText=user
            console.log("you lose");
            msg.innerText="you lose";
              msg.style.backgroundColor="red"
        }

    }