function f1(){
    var d1=document.getElementById('D1')
    if (d1.innerHTML=="آماده ای؟"){
        d1.innerHTML=' بزن بریم داش';}
    else{d1.innerHTML="آماده ای؟"};
}
function f2(){
    var d1=document.getElementById('D1')
    var alphabet='abcdefghijklmnopqrstuvwxyz'
    var index1=Math.floor(Math.random()*26)
    d1.innerHTML=alphabet[index1]
} 
document.addEventListener('keydown', (event) => {
    var name = event.key;
    var d1=document.getElementById('D1')
    if (d1.innerHTML== name){
        f2();
        d1.style.color="blue";
    }
    else{
        d1.style.color="red";
    }
  }, false);

  var start = Date.now();
  var seconds=0;
  function f4(){
    var delta = Date.now() - start;
    seconds = (Math.floor(delta / 1000));
    console.log(seconds);
    document.getElementById("time").innerHTML=seconds;
    // output(new Date().toUTCString());
  }


function st1(){
    f2();
    setInterval(f4,1000);
}

function f5(){
    seconds=0;
}
 