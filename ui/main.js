console.log('Loaded!');
console.log('MY WORK IS ALMOST DONE');
//var element= document.getElementById('main-text');
//element.innerHTML='NEW VALUE';
var img=document.getElementById('madi');
img.onmouseover=function()
{
    img.style.marginLeft='100px';
};
function moveLeft()
{
    img.style.marginRight='100px';
}