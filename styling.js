let songdetails=[
   { title:"Zen",
    artist:"Jennie",
    duration:"3:12",
    imagesrc:"covers1/jennie.jpg",
    songsrc:"audio1/zen.mp3"

},
{
    title:"MY Eyes",
    artist:"travis Scott",
  imagesrc:"covers1/utopia.jpg",
    songsrc:"audio1/my eyes.mp3",
    duration:"3:20"
},

{
    title:"Humble ",
    artist:"Kendrick Lamar",
  imagesrc:"covers1/damn.jpg",
    songsrc:"audio1/humble.mp3",
    duration:"2:46"
},
{
    title:"we can't be friends ",
    artist:"ariana grande",
    imagesrc:"covers1/sunshine.jpg",
    songsrc:"audio1/we cant be friend.mp3",
    duration:"4:16"
},
{
    title:"Blind Eyes red ",
    artist:"Minnie",
  imagesrc:"covers1/minnie.jpg",
    songsrc:"audio1/blind eyes red.mp3",
    duration:" 3:26"
},
{
    title:"heavy ",
    artist:"the marias",
    imagesrc:"covers1/marias.jpg",
    songsrc:"audio1/heavy.mp3",
    duration:"3:20"
},
{
    title:"drama ",
    artist:"aespa",
  imagesrc:"covers1/aespa.jpg",
    songsrc:"audio1/drama.mp3",
    duration:"3:20"
},
{
    title:"best ",
    artist:"gracie abrams",
  imagesrc:"covers1/gracie.jpg",
    songsrc:"audio1/best.mp3",
    duration:"3:20"
},
{
    title:"bye ",
    artist:"ariana grande",
  imagesrc:"covers1/sunshine.jpg",
    songsrc:"audio1/bye.mp3",
    duration:"3:20"
},
{
    title:"to say hello ",
    artist:"the marias",    
    imagesrc:"covers1/marias.jpg",
    songsrc:"audio1/to say hello.mp3",
    duration:"3:20"
}


];

var albumcover=document.getElementById("album-art");
let songtitle=document.querySelector(".track-info h3");
let backwardbtn=document.getElementById("backward");
 let playbtn=document.getElementById("play");
let forwardbtn=document.getElementById("forward");
let artist=document.querySelector(".track-info p");





albumcover.src=songdetails[0].imagesrc;
songtitle.innerHTML=songdetails[0].title;
artist.innerHTML=songdetails[0].artist;


