let indexSong = 0;
let audioElement = new Audio('1.mp3');
let playbutton = document.getElementById("playbutton");
let progress = document.getElementById("myprogressbar");
let songName1 = Array.from(document.getElementsByClassName("songlist"));
let songlist = [
    { songName: "Let Me Love You", filePath: "1.mp3", coverPath: "cover1.jpg" },
    { songName: "Tera Fitoor", filePath: "2.mp3", coverPath: "cover2.jpg" },
    { songName: "Tera Hone Laga Hoon", filePath: "3.mp3", coverPath: "cover3.jpg" },
    { songName: "Heeriyan", filePath: "4.mp3", coverPath: "cover4.jpg" },
    { songName: "Naino ne bandhi", filePath: "5.mp3", coverPath: "cover5.jpg" },
    { songName: "Kuch To Hai", filePath: "6.mp3", coverPath: "cover6.jpg" },
    { songName: "Rabba Janda", filePath: "7.mp3", coverPath: "cover7.jpg" },
    { songName: "Haule Haule", filePath: "8.mp3", coverPath: "cover8.jpg" },
    { songName: "Chammak Challo", filePath: "9.mp3", coverPath: "cover9.jpg" },
    { songName: "Pyar", filePath: "10.mp3", coverPath: "cover10.jpg" },
]
songName1.forEach((Element, i) => {
    // console.log(Element,i);
    Element.getElementsByTagName('img')[0].src = songlist[i].coverPath;
    Element.getElementsByClassName('songnaming')[0].innerText = songlist[i].songName;
})
// audioElement.play();
playbutton.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime == 0) {
        audioElement.play();
        playbutton.classList.remove('fa-play');
        playbutton.classList.add('fa-pause');
        gifimg.style.opacity = 1;
    }
    else {
        audioElement.pause();
        playbutton.classList.remove('fa-pause');
        playbutton.classList.add('fa-play');
        gifimg.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    progressofbar = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progressofbar);
    progress.value = progressofbar;
})
progress.addEventListener('change', () => {
    audioElement.currentTime = progress.value * audioElement.duration / 100;
})
const makeallplay = () => {
    Array.from(document.getElementsByClassName('playsong')).forEach((Element) => {
        Element.classList.remove('fa-pause');
        Element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('playsong')).forEach((Element) => {
    Element.addEventListener('click', (e) => {
        makeallplay();
        indexSong=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src=`${indexSong+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        playbutton.classList.remove('fa-play');
        playbutton.classList.add('fa-pause');

    })
})
