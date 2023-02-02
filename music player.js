//INITIALISING

let songIndex = 0;
let audioElement = new Audio("main.mp3");
let playit = document.querySelector('.finalPlay');
let myProgressBar = document.querySelector('#myProgressBar');
let songItems = Array.from(document.getElementsByClassName('song-box'));
let finalSongName = document.querySelector('.final-name');
let finalArtistName = document.querySelector('.cur-song-artist');
let finalSongImg = document.querySelector('.main-song-img');

let songs = [
    {songName: "Creepin'" , artistName: "Metro Boomin'" , songPath: "music/1.mp3" , coverPath:"covers/1.jpg" },
    {songName: "Clown" , artistName: "Blackbear, Trevor Daniel" , songPath: "music/2.mp3" , coverPath:"covers/2.jpg" },
    {songName: "Hi, hyd" , artistName: "Glaive" , songPath: "music/3.mp3" , coverPath:"covers/3.jpg" },
    {songName: "Almost Famous" , artistName: "G-Eazy" , songPath: "music/4.mp3" , coverPath:"covers/4.jpg" },
    {songName: "If you are serious" , artistName: "The Chainsmokers" , songPath: "music/5.mp3" , coverPath:"covers/5.jpg" },
    {songName: "Reverie" , artistName: "Illenium, Dana Salah" , songPath: "music/6.mp3" , coverPath:"covers/6.jpg" },
    {songName: "Ordinary Life" , artistName: "The Weeknd" , songPath: "music/7.mp3" , coverPath:"covers/7.jpg" },
    {songName: "Talk is overated" , artistName: "Jeremy Zucker" , songPath: "music/8.mp3" , coverPath:"covers/8.jpg" },
    {songName: "Stay" , artistName: "The Kid Laroi, Justin Beiber" , songPath: "music/9.mp3" , coverPath:"covers/9.jpg" },
    {songName: "Molly" , artistName: "Lil Dicky, Brendon Urie" , songPath: "music/10.mp3" , coverPath:"covers/10.jpg" },
    {songName: "Me & your ghost" , artistName: "Blackbear" , songPath: "music/11.mp3" , coverPath:"covers/11.jpg" },
    {songName: "1984" , artistName: "Glaive" , songPath: "music/12.mp3" , coverPath:"covers/12.jpg" },
    {songName: "Been on" , artistName: "G-Eazy" , songPath: "music/13.mp3" , coverPath:"covers/13.jpg" },
    {songName: "High" , artistName: "The Chainsmokers" , songPath: "music/14.mp3" , coverPath:"covers/14.jpg" },
    {songName: "Crawl outta love" , artistName: "Illenium" , songPath: "music/15.mp3" , coverPath:"covers/15.jpg" },
    {songName: "Reminder" , artistName: "The Weeknd" , songPath: "music/16.mp3" , coverPath:"covers/16.jpg" },
    {songName: "Desire" , artistName: "Jeremy Zucker" , songPath: "music/17.mp3" , coverPath:"covers/17.jpg" },
    {songName: "Slow it down" , artistName: "Charlie Puth" , songPath: "music/18.mp3" , coverPath:"covers/18.jpg" },
    {songName: "Good things fall apart" , artistName: "Illenium, Jon Bellion" , songPath: "music/19.mp3" , coverPath:"covers/19.jpg" },
    {songName: "Treat you better" , artistName: "Shawn Mendes" , songPath: "music/20.mp3" , coverPath:"covers/20.jpg" },
];

songItems.forEach((element, i)=>{
     
});

playit.addEventListener('click',function(){
   if (audioElement.paused || audioElement.currentTime<=0)
   {
    audioElement.play();
    playit.classList.remove('fa-circle-play');
    playit.classList.add('fa-circle-pause');
   }
   else{
    audioElement.pause();
    playit.classList.remove('fa-circle-pause');
    playit.classList.add('fa-circle-play');
   }
});

audioElement.addEventListener('timeupdate', function(){
     progress = parseFloat((audioElement.currentTime/audioElement.duration)*100);
    //  console.log(progress);
     myProgressBar.value = progress;
});

myProgressBar.addEventListener('change' , function(){
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
});
let greenPlay = document.getElementsByClassName('green-play');
const makeAllPlays = ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
         
             element.classList.remove('fa-pause-circle');
             element.classList.add('fa-play-circle');
      });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.addEventListener('click' , (e)=>{
           makeAllPlays();
           songIndex = parseInt(e.target.id);
           e.target.classList.remove('fa-play-circle');
           e.target.classList.add('fa-pause-circle');
           audioElement.src = `music/${songIndex+1}.mp3`;
           console.log(songs[songIndex].songName);
           finalSongName.innerHTML = songs[songIndex].songName;
           finalArtistName.innerHTML = songs[songIndex].artistName;
           finalSongImg.src = songs[songIndex].coverPath;
           audioElement.currentTime = 0;
           audioElement.play();
           playit.classList.remove('fa-circle-play');
           playit.classList.add('fa-circle-pause');
      });
    });

    document.getElementById('next').addEventListener('click' , ()=>{
        if(songIndex>=19){
            songIndex=0;
        }
        else{
            songIndex+=1;
        }
        audioElement.src = `music/${songIndex+1}.mp3`;
        finalSongName.innerHTML = songs[songIndex].songName;
        finalArtistName.innerHTML = songs[songIndex].artistName;
        finalSongImg.src = songs[songIndex].coverPath;
        audioElement.currentTime = 0;
        audioElement.play();
        playit.classList.remove('fa-circle-play');
        playit.classList.add('fa-circle-pause');
    });
    document.getElementById('previous').addEventListener('click' , ()=>{
        if(songIndex<=0){
            songIndex=19;
        }
        else{
            songIndex-=1;
        }
        audioElement.src = `music/${songIndex+1}.mp3`;
        finalSongName.innerHTML = songs[songIndex].songName;
        finalArtistName.innerHTML = songs[songIndex].artistName;
        finalSongImg.src = songs[songIndex].coverPath;
        audioElement.currentTime = 0;
        audioElement.play();
        playit.classList.remove('fa-circle-play');
        playit.classList.add('fa-circle-pause');
    });