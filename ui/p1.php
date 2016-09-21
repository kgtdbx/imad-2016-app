<!Doctype html>
<head></head>
<title>WELCOME DEBUGGERS</title>
<body>
<h1>THIS IS AN INTERACTIVE PAGE</h1>
<?php
print  "THIS IS A PHP SCRIPT OUTPUT<br>";
$b="THIS IS A DEMO";
echo "THE LENGTH OF THE STRING: ",strlen($b),"<br>";
echo "NUMBER OF WORDS: ",str_word_count($b);
define("abc","<br>THE VALUE OF ABC");
echo abc,"<br>";
$str="2";
echo var_dump($str),"<br>";// here var_dump for string will give the----> datatype(lenght of the string) "value" 
$int =20;
$bool=TRUE;// Here for boolean we need to keep the capital letters of TRUE in mind ---> datatype(value);
echo var_dump($bool);
echo var_dump($int),"<br>";// Here var_dump for integer will give--->datatype(value);
echo $str+$int ,"    ",var_dump($str+$int),"<br>";
function getname()
{
  global $str;// here we made the $str global so that we can use it within the function
  $str="32";// Here i have rewirte the value of $str and its done  
  echo "THIS IS THE CHANGED VALUE OF $STR", $str , "<br>";
  echo "Author:MANISH CHAUHAN";
  echo abc; // ANY CONSTANT S BY DEFAULT GLOBAL
}
getname();
$arr=array("ramu", "shayam", "mohan");
foreach ($arr as $a=>$a_value)                // foreach loop used to print the indexed array
  {
    echo "<br>".$a." ".$a_value."<br>"; // $a_value to acces the value of the arrray much helpful in case //of associative array
  }
$arrq=array("a"=>"1","b"=>"2","c"=>"3");
foreach($arrq as $b=>$b_value)
  {
    echo "key:. ".$b." value: ".$b_value."<br>";
  }
function passarr($xy)
{
  $xy[a]=$xy[b]+$xy[c];
  return $xy[a];
}
echo "The value for function: ".passarr($arrq)."<br>";
/*rsort($arrq);                                         // Reverse sorting on the basis of the value
foreach($arrq as $c=>$c_value)
  {
  echo "key: ".$c." value: ".$c_value."<br>";         // HERE  AFTER SORTING THE ARRAY WE GOT IS THE INDEXED ARRAY NOT THE ASSOCIATIVE ARRA                                                            Y i.e the key will be normal 0,1,3 not the mannually specified one 
    }*/
krsort($arrq);                  
foreach($arrq as $c=>$c_value)
  {
    echo "key: ".$c." value: ".$c_value."<br>";
  }
?>
// forms
<form action="WELCOME" methot="post">
  NAME:<input type="text" name="name"><br>
  Email:<input type="text" name="name"><br>
  <input type="submit">
  </form>
</body>
</html>
