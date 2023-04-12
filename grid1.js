console.log("Hello here");

const gridbox = document.querySelectorAll(".grid")

var playermove  = document.querySelectorAll(".upcont1");

var resetbutton = document.querySelectorAll('.my-button');

var soundbutton = document.querySelectorAll(".upcont2");

var closebutton = document.querySelector(".upcont3");

var turn = "X";

//console.log(closebutton)

//writting function for click on close button

function closefunction(){
    if (confirm("Are you sure you want to move-out?")) {
        // User clicked "OK", proceed with deletion
        window.location.href = "index.html";
      } else {
        // User clicked "Cancel", do nothing
      }
   

}

closebutton.addEventListener('click', closefunction);


// console.log(soundbutton);

//wriiting function to play the audio

audiosound = true;

soundbutton[0].addEventListener('click', soundfunction);

function soundfunction(){
    var img = document.getElementById("soundimg");
    // console.log("it came here", img);
    // console.log("it came here", img.innerHTML);

    if (img.innerHTML == '<img src="image/sound2.webp" alt="sound">'){
        img.innerHTML = '<img src="image/mute1.png" alt="sound">';
        audiosound = false;

    }
    else{
        img.innerHTML = '<img src="image/sound2.webp" alt="sound">';
        audiosound = true;

    }


    
}


var audio = new Audio('audio/ting.mp3');

var endaudio = new Audio('audio/gameover.mp3');

var winaudio = new Audio("audio/2PBE8A4-huge-win.mp3");





//writting reset function 

function reset_fun(){
    for (let index = 0; index < 9; index++) {
        gridbox[index].innerHTML = '';
        gridbox[index].style.backgroundColor = '#ccc';
        
    }
    playermove[0].style.fontSize = 'max(20px, 4vh)'
    playermove[0].innerHTML = `Player ${turn} to move`;
    playermove[0].style.backgroundColor = '';

}


function checkwin(){
    var v1 = gridbox[0];
    var v2 = gridbox[1];
    var v3 = gridbox[2];
    var v4 = gridbox[3];
    var v5 = gridbox[4];
    var v6 = gridbox[5];
    var v7 = gridbox[6];
    var v8 = gridbox[7];
    var v9 = gridbox[8];

    winner = [
        [v1, v2, v3],
        [v4, v5, v6],
        [v7, v8, v9], 
        [v1, v4, v7],
        [v2, v5, v8],
        [v3, v6, v9],
        [v1, v5, v9],
        [v7, v5, v3]];

    console.log("it came here", v1, v2, v3, v4, v5, v6, v7, v8, v9);
    
    for (let index = 0; index < winner.length; index++) {
        var element = winner[index];
        // console.log(index, element,["X","X", "X"], element === ['X', 'X', 'X']);
        
        if (element[0].innerHTML == "X" & element[1].innerHTML == "X" & element[2].innerHTML == "X"){

            if (audiosound){
                winaudio.play();

            }
            
            
            element[0].style.backgroundColor = 'pink';
            element[1].style.backgroundColor = 'pink';
            element[2].style.backgroundColor = 'pink';

            playermove[0].style.fontSize = 'max(15px, 3vh)';

            playermove[0].innerHTML = `${element[0].innerHTML} Won The game, Please reset to pay again`;

            playermove[0].style.backgroundColor = 'blue';
            return true;
        }
        
    }

    for (let index = 0; index < winner.length; index++) {
        var element = winner[index];
        if (element[0].innerHTML == "0" & element[1].innerHTML == "0" & element[2].innerHTML == "0"){
            if (audiosound){
                winaudio.play();

            }
            
            element[0].style.backgroundColor = 'pink';
            element[1].style.backgroundColor = 'pink';
            element[2].style.backgroundColor = 'pink';

            playermove[0].style.fontSize = 'max(15px, 3vh)';
            playermove[0].innerHTML = `${element[0].innerHTML} Won The game, Please reset to pay again`;
            playermove[0].style.backgroundColor = 'blue';
            return true;
        }
        
    }

    return false;


}


// defing draw  fuction 

function draw(){
    var v1 = gridbox[0];
    var v2 = gridbox[1];
    var v3 = gridbox[2];
    var v4 = gridbox[3];
    var v5 = gridbox[4];
    var v6 = gridbox[5];
    var v7 = gridbox[6];
    var v8 = gridbox[7];
    var v9 = gridbox[8];

    var count = 0;

    for (let index = 0; index < 9; index++) {
        var element = gridbox[index].innerHTML;
        if (element ===''){
            count++
        }
        
    }

     if (count === 0){
        if (audiosound){
            endaudio.play();

        }
        playermove[0].style.fontSize = 'max(15px, 3vh)';
        playermove[0].innerHTML = "The Game is Drwa, Please reset to pay again";
        playermove[0].style.backgroundColor = 'blue';

     }


}



function change1(){
    if (gridbox[0].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[0].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}


function change2(){
    if (gridbox[1].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[1].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}

function change3(){
    if (gridbox[2].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[2].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}

function change4(){
    if (gridbox[3].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[3].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}

function change5(){
    if (gridbox[4].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[4].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}

function change6(){
    if (gridbox[5].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[5].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}

function change7(){
    if (gridbox[6].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[6].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}

function change8(){
    if (gridbox[7].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[7].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}

function change9(){
    if (gridbox[8].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[8].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}


gridbox[0].addEventListener('click', change1);
gridbox[1].addEventListener('click', change2);
gridbox[2].addEventListener('click', change3);
gridbox[3].addEventListener('click', change4);
gridbox[4].addEventListener('click', change5);
gridbox[5].addEventListener('click', change6);
gridbox[6].addEventListener('click', change7);
gridbox[7].addEventListener('click', change8);
gridbox[8].addEventListener('click', change9);
resetbutton[0].addEventListener('click', reset_fun);
