
const btn= document.querySelector(".btn");
let msg =document.querySelector(".msg p");

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let weight= document.querySelector(".weight input");
    let weval=weight.value;
    let height= document.querySelector(".hight input");
    let heval=height.value;
    let BMIval= weval/((heval)**2);
    msg.innerHTML=`BMI = ${BMIval}`;

    console.log(msg.innerHTML);

   
});

   