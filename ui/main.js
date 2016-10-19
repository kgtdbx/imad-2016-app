var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    
  //create request
 // var request = new XMLHttprequest();
  // casture response and save it 
  
  // render the varible in html
     counter=counter+1;
  var span=document.getElementById('count');
  span.innerHTML=counter.toString();
};