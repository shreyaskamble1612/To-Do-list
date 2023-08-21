const inputbox = document.getElementById("input-box")
const listcontainer = document.getElementById("list-container")

function addtask(){
    if(inputbox.value === ''){
        alert("Do some work !!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);      
    }
    inputbox.value= ' '
    savedata();
}


listcontainer.addEventListener("click",function(f){
    if(f.target.tagName === "LI"){
        f.target.classList.toggle("checked");
        savedata();
    }
    else if(f.target.tagName === "SPAN"){
        f.target.parentElement.remove();
        savedata();  

    }
},false);

function savedata(){
    localStorage.setItem("Data",listcontainer.innerHTML);

}


function showTask(){
    listcontainer.innerHTML = localStorage.getItem("Data");
}
showTask();