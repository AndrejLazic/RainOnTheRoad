function coloring_black(cell_id){
    const gamecells = document.querySelectorAll(".gamecell");
        for(let i = cell_id; i<gamecells.length; i+=8){
            gamecells[i].style.backgroundColor = "black";
        }
}
coloring_black(1);

function coloring_white(cell_id){
    const gamecells = document.querySelectorAll(".gamecell");
    //console.log(gamecells.length);
            for(let i = cell_id; i<40; i=i+8){
                gamecells[i].style.backgroundColor = "whitesmoke";
            }
            counting_white()
}

document.querySelectorAll(".gamecell").forEach(item => {
    item.addEventListener('click', function () {
        console.log(item);
        i = item.id;
        if(item.style.backgroundColor == "black"){
        coloring_white(i);
        }else{
        coloring_black(i);
        }
    })
})

function counting_white(){
    const gamecells = document.querySelectorAll(".gamecell");
    var white = 0;
    //console.log(gamecells[1]);
        for(let i = 0; i<gamecells.length; i++){
            if(gamecells[i].style.backgroundColor == "whitesmoke"){
                white++;
            }
        }
        console.log("belih", white);
}
/*
document.querySelectorAll(".gamecell").forEach(item => {
    item.addEventListener('mouseover', function () {
        console.log(item.id);
        coloring_black(item.id);
    })
})

document.querySelectorAll(".gamecell").forEach(item => {
    item.addEventListener('mouseout', function () {
        console.log(item.id);
        coloring_white(item.id);
    })
})
*/