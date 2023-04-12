// console.log("hello here");
var threegrid = document.querySelector(".choosegrid1");

var fivegrid = document.querySelector(".choosegrid2");


function threefunction(){
    // if (confirm("Are you sure you want to move-out?")) {
    //     // User clicked "OK", proceed with deletion
    //     window.location.href = "index.html";
    //   } else {
    //     // User clicked "Cancel", do nothing
    //   }
    window.location.href = "grid1.html";
   

}

threegrid.addEventListener('click', threefunction);



function fivefunction(){
    // if (confirm("Are you sure you want to move-out?")) {
    //     // User clicked "OK", proceed with deletion
    //     window.location.href = "index.html";
    //   } else {
    //     // User clicked "Cancel", do nothing
    //   }
    window.location.href = "grid2.html";
   

}

fivegrid.addEventListener('click', fivefunction);
