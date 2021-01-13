


var randomNumber1 =Math.floor(Math.random()*6)+1;

var randomDiceImage ="img-" +randomNumber1 +"-dice.png";

var randomImageSource ="images/" +randomDiceImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource);


var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2="img-" + randomNumber2+ "-dice.png";

var randomImageSource2="images/"+ randomDiceImage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomImageSource2);


if ( randomNumber1 > randomNumber2 ) {
  document.querySelector("h1").innerHTML="competitor 1 is a winner🏆";
}
else if( randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML= "competitor 2 is a winner🏆";
}
else {
  document.querySelector("h1").innerHTML ="Draw!😏";
}
