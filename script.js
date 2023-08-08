function check(cell_id){
    const gamecells = document.querySelectorAll(".gamecell");
    alert(gamecells[cell_id].style.backgroundColor + "HELLOW FROM CELL ID (" + cell_id + ")");
}

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

function counting_white(){
    const gamecells = document.querySelectorAll(".gamecell");
    var white = 0;
        for(let i = 0; i < gamecells.length; i++){
            if(gamecells[i].style.backgroundColor == "whitesmoke"){
                white++;
            }
        }
    document.getElementById("finish").innerHTML = white + " empty fields" ;
        
}

coloring_all_white();

function cellClickHandler(event) {
    const item = event.currentTarget;
    const i = parseInt(item.id);
  
    if (item.style.backgroundColor === "black") {
      coloring_white(i);
    } else {
      coloring_black(i);
    }
  }
  
  document.querySelectorAll(".gamecell").forEach(item => {
    item.addEventListener('click', cellClickHandler);
  });

  function finishButtonClickHandler() {
    coloring_blue();
    document.getElementById("finish").disabled = true;
  
    document.querySelectorAll(".gamecell").forEach(item => {
      item.removeEventListener('click', cellClickHandler);
    });
  
    counting_white();
  }

  document.getElementById("finish").addEventListener("click", finishButtonClickHandler);


  function repeatButtonClickHandler(){
    coloring_all_white();
    document.getElementById("finish").disabled = false;
    document.getElementById("finish").innerHTML = "FINISH";

    document.querySelectorAll(".gamecell").forEach(item => {
        item.addEventListener('click', cellClickHandler);
      });
  }

  document.getElementById("repeat").addEventListener("click", repeatButtonClickHandler);


