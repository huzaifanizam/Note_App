const notesContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".button");
let notes = document.querySelector(".input-box")

function showNotes() {
        notesContainer.innerHTML = localStorage.getItem("notes"); 
    }
    showNotes();

function updateStorage() {
        localStorage.setItem("notes", notesContainer.innerHTML);
}

createButton.addEventListener("click",()=>{
   let inputBox = document.createElement("p");
   let img = document.createElement("img");
   inputBox.className = "input-box";
   inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click",function(e){
        if (e.target.tagName === "IMG"){
            e.target.parentElement.remove()
            updateStorage()
        } 
        else if(e.target.tagName === "P") {
                    notes = document.querySelectorAll(".input-box");
                    notes.forEach(nt =>{
                        nt.onkeyup =function(){
                            updateStorage()
                        }
                    })
                }
    });

   
        function showTask() {
            listContainer.innerHTML = localStorage.getItem("data"); 
        }

document.addEventListener("keydown", event=>{
    if (event,key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});











// function addTask() {
//     if (notesContainer.value === '') {
//         alert("You Must Write Something!");
//     } else {
//         let li = document.createElement("li");
//         li.innerHTML = notesContainer.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     notesContainer.value = "";
//     saveData();
// }
// listContainer.addEventListener("click",function(e){
//     if (e.target.tagName === "LI"){
//         e.target.classList.toggle("checked")
//         saveData();
//     } 
//     else if(e.target.tagName === "SPAN") {
//         e.target.parentElement.remove()
//         saveData()
//     }
// } , false);

// function saveData() {
//     localStorage.setItem("data", listContainer.innerHTML);
// }
// function showTask() {
//     listContainer.innerHTML = localStorage.getItem("data"); 
// }