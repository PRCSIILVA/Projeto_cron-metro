const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const millisecondsEl = document.querySelector("#milliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = true;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);



            // funçao da contagem

    function startTimer(){
    
        interval = setInterval(()=>{

            if(isPaused) {
            milliseconds += 10;

                if(milliseconds === 1000){
                seconds++;
                milliseconds = 0;
                }

                if(seconds === 60){
                minutes++;
                seconds = 0;
           }

                minutesEl.textContent = formatTime(minutes);
                secondsEl.textContent = formatTime(seconds);
                millisecondsEl.textContent = formatMilliseconds(milliseconds);
        }
    }, 10 );

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}
        // funcao de pausar

        function pauseTimer(){
            isPaused = false;
            pauseBtn.style.display = "none";
            resumeBtn.style.display = "block";
        }

        // funcao de continuar

        function resumeTimer(){
            isPaused = true;
            pauseBtn.style.display = "block";
            resetBtn.style.display = "none";
        }

        // funcao de resetar

        function resetTimer(){
            clearInterval(interval);
            minutes = 0;
            seconds = 0;
            milliseconds = 0;

            minutesEl.textContent = "00"
            secondsEl.textContent = "00"
            millisecondsEl.textContent = "000"

            startBtn.style.display = "block";
            pauseBtn.style.display = "none";
            resumeBtn.style.display = "none";
        }


        // funcao de mater o 0 a esquerda

   function formatTime(time) {
    return time < 10 ? `0${time}` : time;
   }

         // funcao de mater o 0 a esquerda milliseconds

    function formatMilliseconds(time) {
        return time < 100 ? `${time}`.padStart(3,"0") : time;
    }
