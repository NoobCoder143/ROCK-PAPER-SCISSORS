let userscr=0;
let compscr=0;
const options =document.querySelectorAll(".option");
const msg=document.getElementById("msg");
let userscrpara=document.querySelector("#userscore");
let compscrpara=document.querySelector("#compscore");
//generating computer choice
gencompchoice=()=>{
  opts=["Rock","Scissor","Paper"];
  let indx=Math.floor(Math.random()*3);
  return opts[indx];
};
//FOR DRAW
const draw=()=>{
  msg.innerText="IT WAS A DRAW";
    msg.style.backgroundColor="grey";
    msg.style.color="white";
};

//SHOWING WINNER
const showwinner=(userwin,useroption,compoption)=>{
  if(userwin){
    msg.innerText=`YOU Won ${useroption} Beats ${compoption}`;
    msg.style.backgroundColor="green";
    msg.style.color="white";
    userscr++;
    userscrpara.innerText=userscr;
  }
  else{
  msg.innerText=`YOU LOST ${compoption} Beats ${useroption}`;
   msg.style.backgroundColor="red";
    msg.style.color="white";
    compscr++;
    compscrpara.innerText=compscr;
  };
};

//Creating game
const playgame=(useroption)=>{

const compoption=gencompchoice();


if(useroption==compoption){
  //DRAW
draw();
}
else{
  let userwin=true;
  if (useroption=="Rock"){
    userwin=compoption=="Paper"?false:true;
    
  }
  else if (useroption=="Paper"){
    userwin=compoption=="Scissor"?false:true;
    
  }
  else if (useroption=="Scissor"){
    userwin=compoption=="Rock"?false:true;
    
  }
 showwinner(userwin,useroption,compoption);
};
};
//accessing id of each option
options.forEach((option)=>{
option.addEventListener("click",()=>{
    const useroption=option.getAttribute("id");
  playgame(useroption);
});
});