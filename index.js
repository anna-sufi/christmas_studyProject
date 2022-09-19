function christmasCountdown() {
    const christmas = new Date('December 25, 2022 00:00');
    const now=new Date();
    const diff = christmas-now;

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDays = Math.floor(diff/msInDay);
    const displayHours = Math.floor((diff%msInDay)/msInHour);
    const displayMinutes = Math.floor((diff%msInHour)/msInMinute);
    const displaySeconds = Math.floor((diff%msInMinute)/msInSecond);

    console.log(displayDays);

    document.querySelector('.days').textContent = displayDays;
    document.querySelector('.hours').textContent = displayHours;
    document.querySelector('.minutes').textContent = displayMinutes;
    document.querySelector('.seconds').textContent = displaySeconds;
    
    if (diff<=0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timerID);
        merryChristmas();
    }

}


let timerID = setInterval(christmasCountdown, 1000);

function merryChristmas() {
    const heading = document.querySelector("h1");
    heading.textContent='MERRY CHRISTMAS!!! HO-HO-HO!';
    heading.classList.add('red');
}

const button = document.querySelector('#myButton');
const song = document.querySelector('#song');

button.addEventListener('click', function() {
    if (song.paused) {
        button.innerHTML=`<img class='img' src="https://img.icons8.com/dotty/344/pause.png" alt="play_button">`;
        song.play();
    } else {
        button.innerHTML=`<img class='img' src="https://img.icons8.com/wired/344/play.png" alt="play_button">`;
        song.pause();
    }

})
