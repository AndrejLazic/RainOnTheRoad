function coloring_black(){
    const color = document.querySelectorAll(".gamecell");
    console.log(color);
}
coloring_black();

const nodeList = document.querySelectorAll(".gamecell");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "red";