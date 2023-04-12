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
    for (let index = 0; index < 25; index++) {
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

    var v10  = gridbox[9]

    var v11 = gridbox[10];
    var v12 = gridbox[11];
    var v13 = gridbox[12];
    var v14 = gridbox[13];
    var v15 = gridbox[14];
    var v16 = gridbox[15];
    var v17 = gridbox[16];
    var v18 = gridbox[17];
    var v19 = gridbox[18];
    var v20 = gridbox[19];

    var v21 = gridbox[20];
    var v22 = gridbox[21];
    var v23 = gridbox[22];
    var v24 = gridbox[23];
    var v25 = gridbox[24];
    winner = [
        [v1, v2, v3, v4],
        [v2, v3, v4, v5,],
        [v6, v7, v8, v9], 
        [v7, v8, v9, v10],
        [v11, v12, v13, v14],
        [v12, v13, v14, v15],
        [v16, v17, v18, v19],
        [v17, v18, v19, v20],
        [v21, v22, v23, v24],
        [v22, v23, v24, v25],
        [v1, v6, v11, v16],
        [v6, v11, v16, v21],
        [v2, v7, v12, v17],
        [v7, v12, v17, v22],
        [v3, v8, v13, v18],
        [v8, v13, v18, v23],
        [v4, v9, v14, v19],
        [v9, v14, v19, v24],
        [v5, v10, v15, v20],
        [v10, v15, v20, v25],
        [v1, v7, v13, v19],
        [v6, v12, v18, v24],
        [v21, v17, v13, v9],
        [v16, v12, v8, v4],
        [v2, v8, v14, v20],
        [v7, v13, v19, v25],
        [v22, v18, v14, v10],
        [v17, v13, v9, v5]

    ];

    // console.log("it came here", v1, v2, v3, v4, v5, v6, v7, v8, v9);
    
    for (let index = 0; index < winner.length; index++) {
        var element = winner[index];
        // console.log(index, element,["X","X", "X"], element === ['X', 'X', 'X']);
        
        if (element[0].innerHTML == "X" & element[1].innerHTML == "X" & element[2].innerHTML == "X" & element[3].innerHTML == "X"){

            if (audiosound){
                winaudio.play();

            }
            
            
            element[0].style.backgroundColor = 'pink';
            element[1].style.backgroundColor = 'pink';
            element[2].style.backgroundColor = 'pink';
            element[3].style.backgroundColor = 'pink';

            playermove[0].style.fontSize = 'max(15px, 3vh)';

            playermove[0].innerHTML = `${element[0].innerHTML} Won The game, Please reset to pay again`;

            playermove[0].style.backgroundColor = 'blue';
            return true;
        }
        
    }

    for (let index = 0; index < winner.length; index++) {
        var element = winner[index];
        if (element[0].innerHTML == "0" & element[1].innerHTML == "0" & element[2].innerHTML == "0" & element[3].innerHTML == "0" ){
            if (audiosound){
                winaudio.play();

            }
            
            element[0].style.backgroundColor = 'pink';
            element[1].style.backgroundColor = 'pink';
            element[2].style.backgroundColor = 'pink';
            element[3].style.backgroundColor = 'pink';

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
    var v10  = gridbox[9];
    var v11 = gridbox[10];
    var v12 = gridbox[11];
    var v13 = gridbox[12];
    var v14 = gridbox[13];
    var v15 = gridbox[14];
    var v16 = gridbox[15];
    var v17 = gridbox[16];
    var v18 = gridbox[17];
    var v19 = gridbox[18];
    var v20  = gridbox[19];

    var v21 = gridbox[20];
    var v22 = gridbox[21];
    var v23 = gridbox[22];
    var v24 = gridbox[23];
    var v25 = gridbox[24];
    
    var count = 0;

    for (let index = 0; index < 25; index++) {
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


function change10(){
    if (gridbox[9].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[9].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}

function change11(){
    if (gridbox[10].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[10].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}
function change12(){
    if (gridbox[11].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[11].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}
function change13(){
    if (gridbox[12].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[12].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}
function change14(){
    if (gridbox[13].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[13].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}
function change15(){
    if (gridbox[14].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[14].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}
function change16(){
    if (gridbox[15].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[15].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}
function change17(){
    if (gridbox[16].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[16].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}
function change18(){
    if (gridbox[17].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[17].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}
function change19(){
    if (gridbox[18].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[18].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}
function change20(){
    if (gridbox[19].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[19].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}
function change21(){
    if (gridbox[20].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[20].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}
function change22(){
    if (gridbox[21].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[21].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}
function change23(){
    if (gridbox[22].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[22].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}
function change24(){
    if (gridbox[23].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[23].innerHTML = turn;
        if (turn=='X'){turn='0';}
        else{turn='X'}
        playermove[0].innerHTML = `Player ${turn} to move`;
        var check = checkwin();
        if (!check){
            draw();
        }
}}
function change25(){
    if (gridbox[24].innerHTML == "")
    {
        if (audiosound){audio.play();}
        gridbox[24].innerHTML = turn;
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
gridbox[9].addEventListener('click', change10);


gridbox[10].addEventListener('click', change11);
gridbox[11].addEventListener('click', change12);
gridbox[12].addEventListener('click', change13);
gridbox[13].addEventListener('click', change14);
gridbox[14].addEventListener('click', change15);
gridbox[15].addEventListener('click', change16);
gridbox[16].addEventListener('click', change17);
gridbox[17].addEventListener('click', change18);
gridbox[18].addEventListener('click', change19);
gridbox[19].addEventListener('click', change20);


gridbox[20].addEventListener('click', change21);
gridbox[21].addEventListener('click', change22);
gridbox[22].addEventListener('click', change23);
gridbox[23].addEventListener('click', change24);
gridbox[24].addEventListener('click', change25);



resetbutton[0].addEventListener('click', reset_fun);
