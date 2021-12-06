console.log("this is mynotes js");
show();

//adding to the local storage

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function(e){
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");      
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value= "";
    console.log(notesObj);
    show();
});

//showing elements
function show(){
    
    let notes = localStorage.getItem("notes");  
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }   
    let html ="";
    notesObj.forEach(function(element ,index) {
        html+= `
        <div class="  my-2 mx-2 card" style="width: 18rem; padding: 10px; background-color: darkgrey;">
                <div class="NoteCard">
                    <h5 class="card-title">Note${index + 1} </h5> 
                    <p class="card-text"> ${element} </p>
                    <button id = "${index}" onclick = "deleteElem(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>
        `
        
    });
    let noteselm = document.getElementById('notes');
    if(notesObj.length != 0){
        noteselm.innerHTML= html;
    }
    else{
        noteselm.innerHTML = `nothing to show! use add a note section`
    }

}

//deleting elements

function deleteElem(index){
    console.log("I am deleting");
    let notes = localStorage.getItem("notes");  
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    } 
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    show();
}

let search = document.getElementById("searchtxt");
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    console.log("hello this is search", inputVal);

    let noteCard = document.getElementsByClassName('NoteCard');
    Array.from(noteCard).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputVal)){
            element.style.display = "block";
            
        }
        else{
            element.style.display = "none";
        }
        //console.log(cardtxt);

    })
});