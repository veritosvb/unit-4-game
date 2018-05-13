
var selectedCharacter;
var selectedDefender;
var damage;
var status;
var yourDefender = false;
var yourAttacker = true;
var arrayWhoishere = [{name:"darth-maul", hp:0,role:"enemy", damage:0},{name:"luke-skywalker",hp:0,role:"enemy", damage: 0},{name:"darth-sidious",hp:0,role:"enemy", damage:0},{name:"obi-wan",hp:0,role:"enemy", damage:0}];



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
            attack();
        }
    });

    $("#restart").on("click", function(){ 
        for(var i = 0; i < arrayWhoishere.length; i++){
                $("#" + arrayWhoishere[i].name).attr( "style", "border-color: white");
                $("#" + arrayWhoishere[i].name).appendTo("#availablePlayers");
        }
        yourAttacker = true;
        yourDefender = false;
        status = 0;
        $("#apt").show();
        $("#messagesFight").text("");
        $("#restart").hide();
        setDamageHP();

    });

});

function setDamageHP(){
    for(var i = 0; i < arrayWhoishere.length; i++){
        arrayWhoishere[i].damage = Math.ceil(Math.random()*11);
        arrayWhoishere[i].hp = Math.floor(Math.random()*150);
        $("#"+arrayWhoishere[i].name).find("#hp").text(arrayWhoishere[i].hp);
    }
}

setDamageHP();
function setAttacker(event){
    if(yourAttacker){
        yourAttacker =false;
        $("#apt").hide();
        style="display: visible"
        yourDefender=true;
        for(var i = 0; i < arrayWhoishere.length; i++){
            if(arrayWhoishere[i].name ==event.id){
                selectedCharacter = arrayWhoishere[i];
                damage=selectedCharacter.damage;
                $("#" + event.id).attr( "style", "border-color: green");
                $("#" + event.id).appendTo("#selectedPlayer");
            }else{
                $("#" + arrayWhoishere[i].name).attr( "style", "border-color: red");
                $("#" + arrayWhoishere[i].name).appendTo("#enemiesAvailable");
            }
        }
    }
}

function setDefender(event){
    if(!yourAttacker && yourDefender && selectedCharacter.name != event.id){
        yourDefender=false;
        for(var i = 0; i < arrayWhoishere.length; i++){
            if(arrayWhoishere[i].name ==event.id){
                selectedDefender = arrayWhoishere[i];
                arrayWhoishere[i].role = "defend";
                $("#" + event.id).attr( "style", "border-color: black;" );
                $("#" + event.id).appendTo("#Defender");
            }
         }
    }
}

function calculateNewHp(){
    //Vidas del defender
    selectedDefender.hp = selectedDefender.hp - selectedCharacter.damage;
    $("#"+selectedDefender.name).find("#hp").text(selectedDefender.hp);

    //Vidas del attacker
    selectedCharacter.hp = selectedCharacter.hp - selectedDefender.damage;
    $("#"+selectedCharacter.name).find("#hp").text(selectedCharacter.hp);

    //Solo actualizo el damage del atacante
    selectedCharacter.damage = selectedCharacter.damage + damage;
}

function attack(){
    calculateNewHp();
    result();
   
}

function result(){
    if(selectedCharacter.hp > 0 && selectedDefender.hp > 0 ){
        $("#messagesFight").text("You attacked " + selectedDefender.name + " for " + selectedCharacter.damage + " damage ");
        $("#messagesFight").append("<p>" + selectedDefender.name + " attacked you back for " + selectedDefender.damage + "</p>");
    }
    else if (selectedCharacter.hp <= 0){
        console.log("you lose!!");
        $("#messagesFight").html("<p> You been defeated...GAME OVER </p>");
        $("#restart").show();

    } else {
        status++;
        $("#" + selectedDefender.name).remove();
        $("#messagesFight").html("<p> YOU WON! </p>");
        if(status < 3){
             $("#messagesFight").append("<p> Select another defender </p>");
        }else{
            setDamageHP();
        }

        yourDefender=true;
      }
}


