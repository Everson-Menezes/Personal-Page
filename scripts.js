function Show(id){

    var objeto = document.getElementById(id).style.visibility;

    if(objeto == "visible"){
        document.getElementById(id).style.visibility = "hidden";
    }else {
        document.getElementById(id).style.visibility = "visible";
    }
}

function ChangeText (id){

    objeto = document.getElementById(id).innerText;

    if(objeto == "Skills"){
        document.getElementById(id).innerText = "Home";
    }else {
        document.getElementById(id).innerText = "Skills";
    }
    delete objeto;
}