function coloring_black(cell_id){
    const gamecells = document.querySelectorAll(".gamecell");
        for(let i = cell_id; i < gamecells.length; i = i + 8){
            gamecells[i].style.backgroundColor = "black";
        }
}

function coloring_white(cell_id){
    const gamecells = document.querySelectorAll(".gamecell");
        for(let i = cell_id; i >= 0; i = i - 8){
            gamecells[i].style.backgroundColor = "whitesmoke";
        }
}

function coloring_all_white(){
    const gamecells = document.querySelectorAll(".gamecell");
        for(let i = 0; i < gamecells.length; i++){
            gamecells[i].style.backgroundColor = "whitesmoke";
        }
}

function coloring_blue(){
    const gamecells = document.querySelectorAll(".gamecell");
        for(let i = 0; i < gamecells.length; i++){
            if(gamecells[i].style.backgroundColor == "whitesmoke"){
                var forward = i - 1;
                var backward = i + 1;
                do{
                    forward++;
                    var moduo_forward = forward % 8;
                }
                while(gamecells[forward].style.backgroundColor !== "black" && moduo_forward < 7);

                do{
                    backward--;
                    var moduo_backward = backward % 8;
                }
                while(gamecells[backward].style.backgroundColor !== "black" && moduo_backward > 0);

                if(gamecells[backward].style.backgroundColor == "black" && gamecells[forward].style.backgroundColor == "black"){
                    gamecells[i].style.backgroundColor = "#0074BA";
                }
            }
        }
}

document.querySelectorAll(".gamecell").forEach(item => {
    item.addEventListener('click', function () {
        i = parseInt(item.id);
        if(item.style.backgroundColor == "black"){
        coloring_white(i);
        }else{
        coloring_black(i);
        }
    })
})

document.getElementById("button").addEventListener("click", function() {
    coloring_blue();
    document.getElementById("button").disabled = true;
    counting_white();
  });

function counting_white(){
    const gamecells = document.querySelectorAll(".gamecell");
    var white = 0;
        for(let i = 0; i < gamecells.length; i++){
            if(gamecells[i].style.backgroundColor == "whitesmoke"){
                white++;
            }
        }
    document.getElementById("button").innerHTML = "Ima  "+ white + "  praznih polja" ;
        
}