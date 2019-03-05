var bar = document.getElementById("year_bar");
//bar.style.width = '1%';
var initial_width = 1;
function move(){
    var id = setInterval(progress, 200);
    function progress(){
        if (initial_width >=100){
            clearInterval(id);
            if(!alert("Time's up")) document.location = "scenario.html"
        } else{
            initial_width++;
            bar.style.width = initial_width + '%';
            sessionStorage.setItem("progressbar", initial_width);
            var x = sessionStorage.getItem("progressbar");
            console.log(x);
        }
    }
  
}

function move_judgement2(){
    if (y !== null){
        move3();
        console.log("yes");
}else{console.log("no");}
}



/*var option_migration = sessionStorage.getItem("strategy_migration");
document.getElementById("massive_migration").style.display = "option_migration";
console.log(option_migration);*/