var arr = [];
var l;

//to add a task to the list
function addItem()
{
    l = document.getElementById("added");
    let inp = document.getElementById("task").value; //to retriev ACTIVE value
    
    arr.push(inp);
    l.innerHTML += '<div id="ent"><li class="form-control border border-gray">' + inp + "</li> </div>";
}


//sorting the list
function sortList()
{
    arr.sort(); //alphabetically or the first digit of a number
    l.innerHTML = ""; //clearing content of the added id
    
    //displays new sorted order
    for( var i = 0; i < arr.length; i++)
    {
        l.innerHTML += '<div id="ent"><li class="list-group-item">' + arr[i] + "</li> </div>";
    }
}