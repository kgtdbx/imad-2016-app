var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var profiles={
    'd_profile2' : {
      title :'D2',
      heading :'Developer2',
      date : 'oct 17',
      content : ` <p>THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.</p>
            <p>THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.</p>
            <p>THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BA.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.</p>`
                     },
 'd_profile3':{
     title :'D3',
      heading :'Developer3',
      date : 'oct 17',
      content : ` <p>THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.THIS IS A VERY BAD BOY.</p>`
                     
     
 }                     
};
function createtemp(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmltemp =`
            <html>
            <head>
                    <title>${title}</title>
                    <meta name="viewpoint" content="width=device-width initial-scale=1" />
                    <link href="/ui/style.css" rel="stylesheet"/>
            </head>
            <body>
                    <a href="/"><b>HOME</b></a>
                    <hr/>
                    <h1><u>${heading}</u></h1>
                    
                    <div class="deco">
                    ${content}
                    </div>
                    <div>${date}</div>
            </body>
            
        </html>
    
     `;
     return htmltemp;
 }
app.get('/:pName', function(req, res) {
    var pName=req.params.pName;
res.send(createtemp(profiles[pName]));
});

var counter=0;
app.get('counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});






app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/developer-profile', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'developer-profile.html'));
    
});
//  app.get('/developer-profile2', function(req, res) {
//  res.sendFile(path.join(__dirname, 'ui', 'developer-profile2.html'));
//  });
 
//  app.get('/developer-profile3', function(req, res) {
 // res.sendFile(path.join(__dirname, 'ui', 'developer-profile3.html'));
    
//  });
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
