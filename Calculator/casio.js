var keys=document.querySelectorAll("#keyboard>div");
var bag="";
keys.forEach((ele)=>{
ele.addEventListener("click",getNum);
})
function getNum(){
    var targetNum=event.target.innerText;
    if(targetNum == "AC"){
    document.querySelector("#display").innerText="";
    bag="";   
}
else if (targetNum === "DEL") {
    var currentNum = document.querySelector("#display").innerText;
    if (currentNum.length > 0) {
        document.querySelector("#display").innerText = currentNum.substring(0, currentNum.length - 1);
        bag = bag.substring(0, bag.length - 1);
    }
}
else if(targetNum == "="){
    document.querySelector("#display").innerText=eval(bag);
    bag="";
}
else{
    bag=bag+targetNum;
    document.querySelector("#display").innerText=bag;
}
 }
 