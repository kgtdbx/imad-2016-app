console.log('Loaded!');
console.log('MY WORK IS ALMOST DONE');
//var element= document.getElementById('main-text');
//element.innerHTML='NEW VALUE';
var img=document.getElementById('madi');
function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
}

function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
}
img.onmouseover= bigImg(img);
img.onmouseout= normalImg(img);
                        
