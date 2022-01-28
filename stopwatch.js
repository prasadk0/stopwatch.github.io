
 var x=00;
 var y=00;
 var z=00;
 var key=0;
 var tap = document.querySelector('#tap');
 var start = document.querySelector('#start');
 var stop = document.querySelector('#stop');
 tap.addEventListener('click',()=>{
    x=0;
     y=0;
     z=0;
     key=0;
 });

 start.addEventListener('click',()=>{
  z=key;
 });

 stop.addEventListener('click',()=>{
   z=-1;
 });
setInterval(()=>{
    if(z==-1){
        return key;
    }else{
        z+=1;
    }
  document.getElementById('hour').innerHTML=x;
//    const hour=document.getElementById('hour').innerHTML;
 
//    console.log(hour);
// console.log(hours);
   document.getElementById('minute').innerHTML=y;
//    console.log(min);
   document.getElementById('second').innerHTML=z;

//    console.log(seconds);
  key=z;

  if(z==60){
      y+=1;
      z=0;
  }
   if(y==60){
    x +=1;
  }
  

},100);