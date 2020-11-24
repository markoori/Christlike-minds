function songs(){
  document.querySelector('.content').style.backgroundColor = "rgba(255,0,0,0.3)";


  document.querySelector('.songsb').style.backgroundColor = "red";
  document.querySelector('.albumb').style.backgroundColor = "transparent" ;
  document.querySelector('.artistb').style.backgroundColor = "transparent";
  document.querySelector('.tracksb').style.backgroundColor = "transparent";




  document.querySelector('.songs').style.display = "block";
  document.querySelector('.album').style.display = "none";
  document.querySelector('.artist').style.display = "none";
  document.querySelector('.tracks').style.display = "none";

}
function album(){
  document.querySelector('.content').style.backgroundColor = "rgba(57, 247, 203,0.3)";

  document.querySelector('.albumb').style.backgroundColor = "rgba(57, 247, 203,1)" ;
  document.querySelector('.songsb').style.backgroundColor = "transparent";
  document.querySelector('.artistb').style.backgroundColor = "transparent";
  document.querySelector('.tracksb').style.backgroundColor = "transparent";

  document.querySelector('.album').style.display = "block";
  document.querySelector('.songs').style.display = "none";
  document.querySelector('.artist').style.display = "none";
  document.querySelector('.tracks').style.display = "none";

}

 function artist(){
    document.querySelector('.content').style.backgroundColor = "rgba(238, 247, 57,0.3)";

    document.querySelector('.artistb').style.backgroundColor = "rgba(238, 247, 57,1)" ;
    document.querySelector('.songsb').style.backgroundColor = "transparent";
    document.querySelector('.albumb').style.backgroundColor = "transparent";
    document.querySelector('.tracksb').style.backgroundColor = "transparent";

    document.querySelector('.artist').style.display = "block";
    document.querySelector('.songs').style.display = "none";
    document.querySelector('.album').style.display = "none";
    document.querySelector('.tracks').style.display = "none";


  }
  function tracks(){
    document.querySelector('.tracksb').style.backgroundColor = "rgba(0,255,0,1)";
    document.querySelector('.songsb').style.backgroundColor = "transparent";
    document.querySelector('.albumb').style.backgroundColor = "transparent";
    document.querySelector('.artistb').style.backgroundColor = "transparent";


    document.querySelector('.content').style.backgroundColor = "rgba(0,255,0,0.3)" ;
    document.querySelector('.tracks').style.display = "block";
    document.querySelector('.songs').style.display = "none";
    document.querySelector('.album').style.display = "none";
    document.querySelector('.artist').style.display = "none";
  }

  //hamburger javascript
  function myFunction(x) {
    x.classList.toggle("change");
  }

// musicplaying backgroundColor
var audio = document.getElementsByTagName("audio");
var video = document.getElementById("video");

audio.onplaying = ()=>{
  video.style.display = "block";
}
function music(){
  video.play();
}
function pmusic(){
  video.pause();
}
