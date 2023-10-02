var arr = [];
var l;

function makeList()
{
    
    l = document.getElementById("added");
    let inp = document.getElementById("task").value;
    
    arr.push(inp);
    l.innerHTML += '<div id="ent"><li class="list-group-item">' + inp + "</li> </div>";
    
}

function sortList()
{
    
    arr.sort();
    l.innerHTML = "";
    
    for( var i = 0; i < arr.length; i++)
    {
        l.innerHTML += '<div id="ent"><li class="list-group-item">' + arr[i] + "</li> </div>";
    }
}