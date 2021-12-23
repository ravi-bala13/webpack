import {add} from "./calc";
import "./index.css"



var h1 = document.createElement("h1");
    h1.innerText = "Welcome";
    h1.classList.add("redcolor");

var container = document.getElementById("container");
    container.append(h1);

if(localStorage.getItem("notes") === null){
    localStorage.setItem("notes", JSON.stringify([]));
}

dislay();

var button = document.getElementById("btn");
    button.addEventListener("click", () => {

        let title = document.getElementById("title").value;

        let input = document.getElementById("input").value;

        let obj = {
            title,
            input
        };
        

        var local = JSON.parse(localStorage.getItem("notes"));
        
            local.push(obj);
        
        localStorage.setItem("notes", JSON.stringify(local))
       
        dislay();
    })

function dislay(){

    var content = document.getElementById("notes-content");
        content.innerHTML = null;

    var notes_list = JSON.parse(localStorage.getItem("notes"));
        
    notes_list.forEach(element => {
        
        let div = document.createElement("div");

        let h1 = document.createElement("h3");
            h1.innerText = element.title;

        let p = document.createElement("p");
            p.innerText = element.input;

        
        div.classList.add("each_note")
        div.append(h1, p)
        content.append(div)
    });

}
    
    



console.log(add(5, 8));

console.log(add(4, 5));