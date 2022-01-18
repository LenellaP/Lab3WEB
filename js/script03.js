window.onload = function () {
    if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }
     let TEXT = localStorage.getItem("TEXT");
    if (TEXT != null && TEXT.length > 0) {
        myFunction(TEXT);
    }
    
    swapFourthAndFifthParagraphChildren();
    calculate();
}
function swapFourthAndFifthParagraphChildren() {
    const four = document.getElementById("four");
    const five = document.getElementById("five");

    const fourClone = four.cloneNode(true);
    four.replaceChildren(...five.children);
    five.replaceChildren(...fourClone.childNodes);
}
function changeColor(){
var element = document.getElementById("glitch");
element.className = "content";
}