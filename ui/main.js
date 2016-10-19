var button=document.getElementById('counter');
//var counter=0;
button.onclick=function(){
    
  //create request
var request = new XMLHttpRequest();
  // capture response and save it 
request.onreadystatechange = function(){
      if(request.readyState===XMLHttpRequest.DONE){
          if(request.status===200){
              var counter=request.responseText;
              var span=document.getElementById('count');
              span.innerHTML=counter.toString();
              
          }
         
      }
      
  } ;
  
  // render the varible in html
  request.open('GET','http://manish-utm.imad.hasura-app.io/counter',true);
  request.send(null);
};

// submit name 
var inputName=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit');
submit.onclick=function(){
// Make a request to the Server and send the names

// capture the list of names and render the name in HTML

};