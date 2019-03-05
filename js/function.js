var total_budget = 1000;
var bar = document.getElementById("year_bar");
var new_budget, status, status2;
new_budget = 1000;
var left_budget;
function budgetFunction() {
    var campaign_budget = document.getElementById("mitigation_option").value = 200;
    if(left_budget !== null){
        new_budget = left_budget - campaign_budget;
    } else{
        new_budget = new_budget - campaign_budget;
    }
    
    document.getElementById("budget_amount").innerHTML = new_budget;
    document.getElementById("budget_bar").style.width = new_budget / total_budget * 150 + 'px';

    sessionStorage.setItem("remaining_budget", new_budget); document.getElementById("environmental_campaign").style.display = "block";
    sessionStorage.setItem("strategy_campaign", "block");
    
    document.getElementById("budget2").style.display = "none";
}

status2 = sessionStorage.getItem("strategy_campaign");
document.getElementById("environmental_campaign").style.display = status2;


function budgetFunction_energy(){
    var energy_budget = document.getElementById("mitigation_option_b").value = 400;
    if(left_budget !== null){
        new_budget = left_budget - energy_budget;
    } else{
        new_budget = new_budget - energy_budget;
    }
    document.getElementById("budget_amount").innerHTML = new_budget;

    sessionStorage.setItem("remaining_budget", new_budget); 
    document.getElementById("budget_bar").style.width = new_budget / total_budget * 150 + 'px';
    document.getElementById("new_energy").style.display = "block";
    
    document.getElementById("budget2").style.display = "none";
}



function budgetFunction_migration() {
    var migration_budget = document.getElementById("adaptation_option").value = 400;
  if(migration_budget !== null){
        new_budget = left_budget - migration_budget;
    } else{
        new_budget = new_budget - migration_budget;
    }
    document.getElementById("budget_amount").innerHTML = new_budget;

    document.getElementById("budget_bar").style.width = "90px";
    document.getElementById("massive_migration").style.display = "block";
    
    document.getElementById("budget2").style.display = "none";

    sessionStorage.setItem("remaining_budget", new_budget); 
    sessionStorage.setItem("strategy_migration", "block");

}
status = sessionStorage.getItem("strategy_migration");
console.log(status);
document.getElementById("massive_migration").style.display = status;






/*function keepStrategy(){
        localStorage.setItem("strategy_migration", "block");
    }*/






function budgetFunction_disease(){
    var disease_budget = document.getElementById("adaptation_option_b").value = 300;
   if(left_budget !== null){
        new_budget = left_budget - disease_budget;
    } else{
        new_budget = new_budget - disease_budget;
    }
    document.getElementById("budget_amount").innerHTML = new_budget;
    document.getElementById("budget_bar").style.width = new_budget / total_budget * 150 + 'px';
    document.getElementById("massive_diseasse_outbreaks").style.display = "block";
    
    document.getElementById("budget2").style.display = "none";

    sessionStorage.setItem("remaining_budget", new_budget); 
}

function budgetFunction_emission(){
    var emission_budget = document.getElementById("mitigation_option_c").value = 1000;
    if(left_budget !== null){
        new_budget = left_budget - emission_budget;
    } else{
        new_budget = new_budget - emission_budget;
    }
    
    document.getElementById("budget_amount").innerHTML = new_budget;
    document.getElementById("budget_bar").style.width = new_budget / total_budget * 150 + 'px';
    
    document.getElementById("zero_emission").style.display = "block";
    
    document.getElementById("budget2").style.display = "none";
    
    sessionStorage.setItem("remaining_budget", new_budget);
    
    sessionStorage.setItem("strategy_emission", "block");
    
}

var status3 = sessionStorage.getItem("strategy_emission");
document.getElementById("zero_emission").style.display = status3;

function budgetFunction_electrification(){
    var electrification_budget = document.getElementById("mitigation_option_e").value = 700;
    
     if(left_budget !== null){
        new_budget = left_budget - electrification_budget;
    } else{
        new_budget = new_budget - electrification_budget;
    }
    
    document.getElementById("budget_amount").innerHTML = new_budget;
    document.getElementById("budget_bar").style.width = new_budget / total_budget * 150 + 'px';
    
    document.getElementById("transport").style.display = "block";
    
    document.getElementById("budget2").style.display = "none";
    
    sessionStorage.setItem("remaining_budget", new_budget);
    
    sessionStorage.setItem("strategy_electrification", "block");
}

var status4 = sessionStorage.getItem("strategy_electrification");
document.getElementById("transport").style.display = status4;




// session store budget
left_budget = sessionStorage.getItem("remaining_budget")
/*console.log(left_budget);*/
document.getElementById("budget_amount").innerHTML = left_budget;

if(left_budget !== null){
    document.getElementById("budget2").style.display = "none";
}

//set budget bar

if(left_budget !== null){
    document.getElementById("budget_bar").style.width = left_budget / total_budget * 150 + 'px';
} else {
     document.getElementById("budget_bar").style.width = "150px";
}

// get stored progress
var y = sessionStorage.getItem("progressbar");
console.log(y);


function move2(){
    var width = y;
    var id = setInterval(progress2, 200);
    function progress2(){
        if (width >= 100){
            clearInterval(id);
            if(!alert("Time's up")) document.location = "scenario.html"
        }else{
            width++;
            bar.style.width = width + '%';
            sessionStorage.setItem("progressbar2",width);

        }
    }
}

var z = sessionStorage.getItem("progressbar2");
console.log(z);

function move3(){
    var width;
   if(m == null){
       width = z;
       console.log("z");
   } else{
       width = m;
       console.log("m");
   }
    
    var id = setInterval(progress2, 200);
    
    function progress2(){
        if(width >=100){
            clearInterval(id);
            if(!alert("Time's up")) document.location = "scenario.html"
            
        }else{
            width++;
            bar.style.width = width + '%';
            var s = sessionStorage.setItem("progressbar3",width);
        }
    }
}

var m = sessionStorage.getItem("progressbar3");
console.log(m);

function move_judgement(){
    
    if(z== null){
        move2();
        console.log("move2");
    } else{
        move3();
        console.log("move3");
        
    }
}

function scenario(){
    if(status2 !== null){
       document.getElementById("news").style.display = "block";
       }else{
           document.getElementById("news").style.display = "none";
       }
    
    if(status3 !== null){
       document.getElementById("news4").style.display = "block";
       }else{
           document.getElementById("news4").style.display = "none";
       }
    
    if(status4 !== null){
       document.getElementById("news3").style.display = "block";
       }else{
           document.getElementById("news3").style.display = "none";
       }
}

