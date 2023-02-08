//the javascript to be implemented on submit click button has been trigerred.
let movieName = document.getElementById("movieName").value;
let addMovie = document.getElementById("form");
let addMovieName = document.getElementById("items");
let filterMovie = document.getElementById("filter");


//form submit event
addMovie.addEventListener("submit",addList);

//Delete event
addMovieName.addEventListener('click',removeItem);
//filter Event
filterMovie.addEventListener('keyup',filter)

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
    // console.log(li);
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

//function that does filters the movie that you want.

function filter(e){
    //converts values to lowercase
    var text = e.target.value.toLowerCase();
    // console.log(text);
    //getting the list
    var items = addMovieName.getElementsByTagName('li');
    //convert the html collection to Array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        console.log(itemName);
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display = 'block';

        }else{
            item.style.display = 'none';

        }

    })
        
    

}