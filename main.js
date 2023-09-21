console.log("script entered ");

var up = [ 1 , 2 , 3];
var mid = [ 4 , 5 , 6];
var dwn = [ 7 , 8 ,9];
var point = "X";
var player1 = "player1";
var player2 = "player2";
var played = 0;
var plx = 0;
var plo = 0;
var win = "Y";
var dc = 0;



function start(){
     document.getElementById("btncontainer").style="display:none;"
     document.getElementById("GMcontainer").style="display:flex;"
}
function sett(){
     document.getElementById("settings").style="display: block;"
     document.getElementById("btncontainer").style="display:none;"
}
function changevalue(){
     if ( point == "X" ){
          point = "O";
     }
     else if ( point == "O"){
          point = "X";
     }
     played = played+ 1;
     
     if ( played == 9 ){
          drawcheck();
     }
}
//button clicks
//top buttons
function U1(){
     document.getElementById("U1").innerHTML= point;
     up[0] = point;
     changevalue();
     checkwin()
}
function U2(){
     document.getElementById("U2").innerHTML= point;
     up[1] = point;
     changevalue();
     checkwin()
}
function U3(){
     document.getElementById("U3").innerHTML= point;
     up[2] = point;
     changevalue();
     checkwin()
}

//middle buttons


function M1(){
     document.getElementById("M1").innerHTML= point;
     mid[0] = point;
     changevalue();
     checkwin()
}
function M2(){
     document.getElementById("M2").innerHTML= point;
     mid[1] = point;
     changevalue();
     checkwin()
}
function M3(){
     document.getElementById("M3").innerHTML= point;
     mid[2] = point;
     changevalue();
     checkwin()
}



//down buttons



function D1(){
     document.getElementById("D1").innerHTML= point;
     dwn[0] = point;
     changevalue();
     checkwin()
}
function D2(){
     document.getElementById("D2").innerHTML= point;
     dwn[1] = point;
     changevalue();
     checkwin()
}
function D3(){
     document.getElementById("D3").innerHTML= point;
     dwn[2] = point;
     changevalue();
     checkwin()
}


function checkwin(){
  //checking horizontal line
     if ( up[0] == up[2] && up[0] == up[1]){
           won(up[0]);
}
     if ( mid[0] == mid[1] && mid[0] == mid[2]){
          won(mid[0])
     }
     if ( dwn[0] == dwn[2] && dwn[0] == dwn[1]){
           won(dwn[0]);
}
  //checking vertical line
    
     if ( up[0] == mid[0] && up[0] == dwn[0]){
          won(mid[0])
     }
     
     if ( up[1] == mid[1] && up[1] == dwn[1]){
           won(up[1]);
}
     if ( mid[2] == up[2] && up[2] == dwn[2]){
          won(mid[2])
     }
 
 //following 2 are for diagonal checking 
 
     if ( up[0] == mid[1] && dwn[2] == up[0]){
           won(dwn[2]);
}
    
    
     if ( mid[1] == up[2] && up[2] == dwn[0]){
          won(mid[1])
     }
     
}
//the following function runs after any of the win checking returns true
function won(winner){
     win = winner;
     document.getElementById("head").innerHTML= "won" ;
     if ( winner == "O" ){
          plo = plo + 1;
          document.getElementById("sp2").innerHTML= plo;
     }
     else if ( winner == "X" ){
          plx = plx + 1;
          document.getElementById("sp1").innerHTML= plx;
     }
     fixbackvalue();
     fixHardwareV();
}
//fixing data of 3game variable to default 
function fixbackvalue(){
     up = [1 , 2 ,3];    
     mid = [ 4 , 5 , 6];
     dwn = [ 7 , 8 , 9];
}
//fixing values of html buttons to ""
function fixHardwareV(){
 //top   
     document.getElementById("U1").innerHTML= "";
     document.getElementById("U2").innerHTML= "";
     document.getElementById("U3").innerHTML= "";
     
 //middle    
     
     document.getElementById("M1").innerHTML= "";
     document.getElementById("M2").innerHTML= "";
     document.getElementById("M3").innerHTML= "";
     
 //bottom    
     
     document.getElementById("D1").innerHTML= "";
     document.getElementById("D2").innerHTML= "";
     document.getElementById("D3").innerHTML= "";


     played = 0;
     win = "Y";     
     point = "X";
     
}
//checking draw if tplayed = 9 , if win=y return true

function drawcheck(){
     if ( win == "Y") {
          draw();
     }
}
//confirm draw after true on draw check
function draw(){
     fixbackvalue();
     fixHardwareV();
     dc = dc + 1;
     played = 0;
     document.getElementById("sp3").innerHTML= dc;
}
function winrate(){
     var sum = plo + plx + dc;
}
//button save in settings 
function save(){
     player1 = document.getElementById("inp1").value;
     player2 = document.getElementById("inp2").value;
     document.getElementById("sp11").innerHTML= player1;
     document.getElementById("sp22").innerHTML= player2;
     document.getElementById("btncontainer").style="display:block;"
     document.getElementById("settings").style="display:none;"
}
//no use emergency button
function exit(){
     document.getElementById("btncontainer").style="display:block;"
     document.getElementById("settings").style="display:none;"
}


//score c c changer

const interval = setInterval( scorechange , 1);
function scorechange(){
     if ( plo == 2 ){
          
     }
  }
       
