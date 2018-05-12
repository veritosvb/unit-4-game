
var selectedCharacter;
var yourCharacter = true;;



$(document).ready(function() {
    


$("#darth-maul").on("click", function(){
    setAttacker(this);

});

$("#darth-sidious").on("click", function(){
    setAttacker(this);
});

$("#luke-skywalker").on("click", function(){
    setAttacker(this);
});

$("#obi-wan").on("click", function(){
    setAttacker(this);
});

$("#attack").on("click", function(){
    console.log("clicked");
});

});


function setAttacker(event){
    if(yourCharacter){
        yourCharacter =false;
        selectedCharacter = event.id;
        $("#" + selectedCharacter).appendTo("#selectedPlayer")
    }
}

function randomPower(){

}

function myCharacter(){

}