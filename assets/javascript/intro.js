
var selectedCharacter;
var selectedDefender;
var yourDefender = false;
var yourAttacker = true;
var arrayWhoishere = [{name:"darth-maul", hp:123,role:"enemy", damage:7},{name:"luke-skywalker",hp:89,role:"enemy", damage: 4},{name:"darth-sidious",hp:30,role:"enemy", damage:6},{name:"obi-wan",hp:120,role:"enemy", damage:1}];

$(document).ready(function() {
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
        console.log(event.id);
        for(var i = 0; i < arrayWhoishere.length; i++){
            if(arrayWhoishere[i].name ==event.id){
                selectedCharacter = arrayWhoishere[i];
                arrayWhoishere[i].role = "attack";
                $("#" + event.id).attr( "style", "background-color: green");
                $("#" + event.id).appendTo("#selectedPlayer");
                $("#apt").remove();
            }else{
                $("#" + arrayWhoishere[i].name).attr( "style", "background-color: red");
                $("#" + arrayWhoishere[i].name).appendTo("#enemiesAvailable");
            }
        }
        yourDefender=true;
    }
}

function setDefender(event){
    if(!yourAttacker && yourDefender && selectedCharacter.name != event.id){
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
$("#messagesFight").text("You attacked " + selectedDefender.name + " for " + randomToDefender() + " damage ");
$("#messagesFight").append("<p>" + selectedDefender.name + " attacked you back for " + randomToDefender() + "</p>");
}