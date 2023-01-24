

//detecting weapon clicked

// IMPORTANT NOTES
// function that got nested inside of the function have access to its 
// outer variable (so dont need global variable)
// this is the best way to transfer variable inside a function to another function.



for (let i = 0; i < 3; i++) {
    document.querySelectorAll(".weapon")[i].addEventListener("click", playerSelection);
    
    function playerSelection() {
       var userWeapon = this.id;
        

        function computerSelection() {
            const gameChoice = ["rock", "paper", "scissor"];
            var computerChoice = gameChoice[Math.floor(Math.random() * gameChoice.length)];
            ComputerWeapon(computerChoice);
           
           
            playRoundAnswer(userWeapon,computerChoice);
        }
        
        flash(userWeapon);
        shadow(userWeapon);
        playerWeapon(userWeapon);
        computerSelection();
        answerChecker();
        
    
    };

};


function playerWeapon(weaponSelectedPlayer) {
    switch (weaponSelectedPlayer) {
        case "paper":
            document.querySelector(".playerBox").style.backgroundImage = "url('image/paper.png')";
            break;
        case "rock":
            document.querySelector(".playerBox").style.backgroundImage = "url('image/rock.png')";
            break;
        case "scissor":
            document.querySelector(".playerBox").style.backgroundImage = "url('image/scissor.png')";
            break;

    }
}
function ComputerWeapon(weaponSelectedComputer) {
    switch (weaponSelectedComputer) {
        case "paper":
            document.querySelector(".computerBox").style.backgroundImage = "url('image/paper.png')";
            break;
        case "rock":
            document.querySelector(".computerBox").style.backgroundImage = "url('image/rock.png')";
            break;
        case "scissor":
            document.querySelector(".computerBox").style.backgroundImage = "url('image/scissor.png')";
            break;

    }
}


var playerScore = [];
var computerScore = [];

function playRoundAnswer(user, computer) {

    if (user === computer) {
        document.querySelector("h1").innerHTML = "Its a Tie!!";
        tie();

    }
    else if (user == "rock") {
        if (computer == "scissor") {
            document.querySelector("h1").innerHTML = "Congratulation You Win🎉 " + user + " beat " + computer + "!!!";
            win();
            playerScore++;
        } else {
            document.querySelector("h1").innerHTML = "You Lose😕  " + user + " lost to " + computer + "!!!";
            lost();
            computerScore++;
        }
    }
    else if (user == "scissor") {
        if (computer == "paper") {
            document.querySelector("h1").innerHTML = "Congratulation You Win🎉 " + user + " beat " + computer + "!!!";
            win();
            playerScore++;
        } else {
            document.querySelector("h1").innerHTML = "You Lose😕  " + user + " lost to " + computer + "!!!";
            lost();
            computerScore++;
        }
    }
    else if (user == "paper") {
        if (computer == "rock") {
            document.querySelector("h1").innerHTML = "Congratulation You Win🎉 " + user + " beat " + computer + "!!!";
            win();
            playerScore++;
        } else {
            document.querySelector("h1").innerHTML = "You Lose😕  " + user + " lost to " + computer + "!!!";
            lost();
            computerScore++;
        }
    }

    $(".playerScore").html(playerScore);
    $(".computerScore").html(computerScore);
}

function answerChecker() {
    if (playerScore === 5) {
        document.querySelector("h1").innerHTML ="WINNER WINNER CHICKEN DINNER🍗!";
        startOver();
    }

    if (computerScore === 5) {
        document.querySelector("h1").innerHTML = "GAME OVER⚠️!";
        startOver();

        

    }
    
}




//flash for weapon that got click
function flash(myWeapon) {
    myActiveWeapon = $("#" + myWeapon);
    myActiveWeapon.fadeOut(100).fadeIn(100);
}


//shadow fot button that got click

function shadow(colorClick) {
    var selectedBox = $("#" + colorClick);
    selectedBox.addClass("pressed");
    setTimeout(function () {
        selectedBox.removeClass("pressed");
    }, 100);
};


function win() {
    var selectedBox =  $(".playerBox");
    selectedBox.addClass("win");
    setTimeout(function() {
        selectedBox.removeClass("win");
    }, 200);
};

function lost() {
    var selectedBox =  $(".computerBox");
    selectedBox.addClass("win");
    setTimeout(function() {
        selectedBox.removeClass("win");
    }, 200);
};

function tie() {
    var selectedBox =  $(".computerBox, .playerBox");
    selectedBox.addClass("tie");
    setTimeout(function() {
        selectedBox.removeClass("tie");
    }, 200);
};

function startOver() {
    computerScore = [];
    playerScore = [];
}