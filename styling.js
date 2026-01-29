let songdetails=[
   { title:"Zen",
    artist:"Jennie",
    duration:"3:30",
    imagesrc:"covers1/jennie.jpg",
    songsrc:"audio1/zen.mp3"

},
{
    title:"My Eyes",
    artist:"Travis Scott",
  imagesrc:"covers1/utopia.jpg",
    songsrc:"audio1/my eyes.mp3",
    duration:"4:12"
},

{
    title:"Humble ",
    artist:"Kendrick Lamar",
  imagesrc:"covers1/damn.jpg",
    songsrc:"audio1/humble.mp3",
    duration:"2:57"
},
{
    title:"We Can't Be Friends ",
    artist:"Ariana Grande",
    imagesrc:"covers1/sunshine.jpg",
    songsrc:"audio1/we cant be friend.mp3",
    duration:"3:23"
},
{
    title:"Blind Eyes red ",
    artist:"Minnie",
  imagesrc:"covers1/minnie.jpg",
    songsrc:"audio1/blind eyes red.mp3",
    duration:" 3:47"
},
{
    title:"Heavy ",
    artist:"The Marias",
    imagesrc:"covers1/marias.jpg",
    songsrc:"audio1/heavy.mp3",
    duration:"4:13"
},
{
    title:"Drama ",
    artist:"Aespa",
  imagesrc:"covers1/aespa.jpg",
    songsrc:"audio1/drama.mp3",
    duration:"3:47"
},
{
    title:"Best ",
    artist:"Gracie Abrams",
  imagesrc:"covers1/gracie.jpg",
    songsrc:"audio1/best.mp3",
    duration:"3:53"
},
{
    title:"Can You Play Ken ",
    artist:"Billie Eilish",
  imagesrc:"covers1/billie.jpg",
    songsrc:"audio1/ken.mp3",
    duration:"1:58"
},
{
    title:"To Say Hello ",
    artist:"The Marias",    
    imagesrc:"covers1/marias.jpg",
    songsrc:"audio1/to say hello.mp3",
    duration:"3:22"
}
,
{
    title:"MMA Performance By Jennie",
    artist:"Jennie",    
    imagesrc:"covers1/jennie mma.jpg",
    songsrc:"audio1/mma.mp3",
    duration:"8:40"
}


];
let player=document.querySelector(".player");
var albumcover=document.getElementById("album-art");
let songtitle=document.querySelector(".track-info h3");
let backwardbtn=document.getElementById("backward");
let playbtn=document.getElementById("play");
let forwardbtn=document.getElementById("forward");
let artist=document.querySelector(".track-info p");
let progress=document.getElementById("progressbar");
let audio=document.getElementById("audio-player");
let time=document.getElementById("timebar");
let timestart=document.getElementById("timestart");

albumcover.src=songdetails[0].imagesrc;
songtitle.innerHTML=songdetails[0].title;
artist.innerHTML=songdetails[0].artist;
audio.src=songdetails[0].songsrc;
time.innerHTML=songdetails[0].duration;


//time update system

function formatTime(seconds){

    let mins=Math.floor(seconds/60);
    let secs=Math.floor(seconds%60);
    return `${mins}:${secs<10?'0':''}${secs}`;}
    audio.addEventListener("timeupdate",()=>{


        let currentTime=formatTime(audio.currentTime);
        let duration=formatTime(audio.duration);
        timestart.innerHTML=`${currentTime}`;
    });





audio.addEventListener("timeupdate",()=>{

   progress.value=(audio.currentTime/audio.duration)*100;
});

progress.addEventListener("input",()=>{

audio.currentTime=(progress.value/100)*audio.duration;



});




//playing system 

let isplaying = false;

// when playing
player.classList.add("playing");

// when paused
player.classList.remove("playing");

playbtn.addEventListener("click", () => {
  if (!isplaying) {
    audio.play();
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
    isplaying = true;
  } else {
    audio.pause();
    playbtn.classList.remove("fa-pause");
    playbtn.classList.add("fa-play");
    isplaying = false;
  }
});

//forward system 

var position=0;
forwardbtn.addEventListener("click",()=>{
            position+=1;
 
albumcover.src=songdetails[position].imagesrc;
songtitle.innerHTML=songdetails[position].title;
artist.innerHTML=songdetails[position].artist;
audio.src=songdetails[position].songsrc;
time.innerHTML=songdetails[position].duration;

audio.currentTime = 0;
progress.value = 0;

audio.play();
playerCard.classList.add("playing");
  playbtn.classList.remove("fa-play");
  playbtn.classList.add("fa-pause");
  isplaying = true;

});


//backward system

backwardbtn.addEventListener("click",()=>{
    position-=1;

albumcover.src=songdetails[position].imagesrc;
songtitle.innerHTML=songdetails[position].title;
artist.innerHTML=songdetails[position].artist;
audio.src=songdetails[position].songsrc;
time.innerHTML=songdetails[position].duration;

audio.play();
  playbtn.classList.remove("fa-play");
  playbtn.classList.add("fa-pause");
  isplaying = true;
  progress.value = 0;


});


audio.addEventListener("loadedmetadata", () => {
  progress.value = 0;
  timestart.innerHTML = "0:00";
});