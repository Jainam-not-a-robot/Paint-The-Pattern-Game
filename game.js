let elements=[]
let clicks=0;
for(let i=0;i<9;i++){
    elements.push(document.querySelector(`#b${i+1}`))
}
let green1=document.querySelector("#green1")
let red1=document.querySelector("#red1")
let blue1=document.querySelector("#blue1")
let green2=document.querySelector("#green2")
let red2=document.querySelector("#red2")
let blue2=document.querySelector("#blue2")
const clickChecker=()=>{
    if(clicks===6){
        setTimeout(()=>alert("ok"),2)
        
    }
}
const functionGenerated=()=>{
    green1.addEventListener("click",()=>{
        for(let i=2;i<9;i+=3){
            elements[i].className="green"
        }
        clicks++
        clickChecker()
    },{once:true})
    green2.addEventListener("click",()=>{
        for(let i=6;i<9;i++){
            elements[i].className="green"
        }
        clicks++
        clickChecker()
    },{once:true})
    blue1.addEventListener("click",()=>{
        for(let i=1;i<9;i+=3){
            elements[i].className="blue"
        }
        clicks++
        clickChecker()
    },{once:true})
    blue2.addEventListener("click",()=>{
        for(let i=3;i<6;i++){
            elements[i].className="blue"
        }
        clicks++
        clickChecker()
    },{once:true})
    red1.addEventListener("click",()=>{
        for(let i=0;i<9;i+=3){
            elements[i].className="red"
        }
        clicks++
        clickChecker()
    },{once:true})
    red2.addEventListener("click",()=>{
        for(let i=0;i<3;i++){
            elements[i].className="red"
        }
        clicks++
        clickChecker()
    },{once:true})
}
functionGenerated()

