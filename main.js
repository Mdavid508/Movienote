//the javascript to be implemented on submit click button has been trigerred.
let movieName = document.getElementById("movieName").value;

let addMovie = document.getElementById("form");
let addMovieName = document.getElementById("items");

//form submit event
addMovie.addEventListener("submit",addList);

//Delete event
addMovieName.addEventListener('click',removeItem);

function addList(e){
    e.preventDefault();
    // console.log(e.target);
    
    let movieName = document.getElementById("movieName").value;
    console.log(movieName);

    
    //create li Element 
    let li = document.createElement("li");
    //Add class
    li.className = 'list-group-item';
    //Add text node with input value
    console.log(li);
    li.appendChild(document.createTextNode(movieName));
    
    //create delete button
    var deleteBtn = document.createElement('button'); 
    //add classes to delete btn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    //Append the btn to the li element
    li.appendChild(deleteBtn);
    //Append li to list
    addMovieName.appendChild(li);
}

//function that does the actual deletion
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure you want to delete')){
            var li = e.target.parentElement;
            addMovieName.removeChild(li);
        }

    }

}