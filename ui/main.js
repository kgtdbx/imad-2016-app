console.log('Loaded!');
console.log('MY WORK IS ALMOST DONE');
//var element= document.getElementById('main-text');
//element.innerHTML='NEW VALUE';
var marginLeft=0;
var img=document.getElementById('madi');
function moveRight () {
 marginLeft=marginLeft+10;
 
 img.style.marginLeft= marginLeft + 'px';
 
}

img.onclickr=function()
{
    var interval=setInterval(moveRight,100);
};
