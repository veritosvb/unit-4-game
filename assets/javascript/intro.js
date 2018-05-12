
var selectedCharacter;
var selectedDefender;

var yourDefender = false;
var yourAttacker = true;
var arrayWhoishere = [{name:"darth-maul", hp:123,role:"enemy"},{name:"luke-skywalker",hp:89,role:"enemy"},{name:"darth-sidious",hp:30,role:"enemy"},{name:"obi-wan",hp:120,role:"enemy"}];



$(document).ready(function() {
    $("#darth-maul").on("click", function(){
    
    });   


$("#darth-maul").on("click", function(){
    setAttacker(this);
    setDefender(this);
});

$("#darth-sidious").on("click", function(){
    setAttacker(this);
    setDefender(this);
});

$("#luke-skywalker").on("click", function(){
    setAttacker(this);
    setDefender(this);
});

$("#obi-wan").on("click", function(){
    setAttacker(this);
    setDefender(this);
});

$("#attack").on("click", function(){
   if(!yourAttacker && !yourDefender){
        console.log("ready to attack");
        attack();
   }
});

});



function setAttacker(event){
    if(yourAttacker){
        yourAttacker =false;
        for(var i = 0; i < arrayWhoishere.length; i++){
            if(arrayWhoishere[i].name ==event.id){
                selectedCharacter = arrayWhoishere[i];
                arrayWhoishere[i].role = "attack";
                $("#" + event.id).attr( "style", "background-color: green");
                $("#" + event.id).appendTo("#selectedPlayer");
                $("#apt").remove();
            }else if(arrayWhoishere[i].role =="enemy"){
                $("#" + arrayWhoishere[i].name).attr( "style", "background-color: red");
                $("#" + arrayWhoishere[i].name).appendTo("#enemiesAvailable");
            }
        }
        yourDefender=true;
    }
}

function setDefender(event){
    if(!yourAttacker && yourDefender && selectedCharacter != event.id){
        yourDefender=false;
        for(var i = 0; i < arrayWhoishere.length; i++){
            if(arrayWhoishere[i].name ==event.id){
                selectedDefender = arrayWhoishere[i];
                arrayWhoishere[i].role = "defend";
                $("#" + event.id).attr( "style", "background-color: black; color:white" );
                $("#" + event.id).appendTo("#Defender");
            }
         }
    }
}

function randomToDefender(){
var damage = 0;
return damage;
}

function attack(){
var g = selectedDefender.hp;
selectedDefender.hp = selectedDefender.hp + randomToDefender();
$("#messagesFight").text("You attacked " + selectedDefender.name + " for " + randomToDefender() + " damage <br> ")
$("#messagesFight").text(selectedDefender.name + "attacked you back for " + randomToDefender())

}