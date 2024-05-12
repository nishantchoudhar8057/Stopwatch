window.onload = function () {         // this function will be called on load
    let minutes = 0;                  // setting the minutes , seconds and tens to 0    
    let seconds = 0;
    let tens = 0;
    let appendMinutes = document.querySelector('#minutes');   // getting the elemets from DOM
    let appendTens = document.querySelector('#tens');
    let appendSeconds = document.querySelector('#seconds');
    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let Interval;

    const startTimer = () => {            // settimer function 
      tens++;                             // tens will start increasing as soon as the function is called 
      if (tens <= 9) {                    //  three conditions for different values of tens 
        appendTens.innerHTML = '0' + tens;
      }
      if (tens > 9) {                     // 
        appendTens.innerHTML = tens;
      }

      if (tens > 99) {                   //
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;
        tens = 0;
        appendTens.innerHTML = '0' + 0;
      }

      if (seconds > 9) {                   // two conditions for seconds 
        appendSeconds.innerHTML = seconds;
      }

      if (seconds > 59) {                  //    
        minutes++;
        appendMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        appendSeconds.innerHTML = '0' + 0;
      }
    };

    startBtn.addEventListener ('click',() => {                         //adding an event listner 
      clearInterval(Interval);                         // This line clears any existing interval that might be running
      Interval = setInterval(startTimer, 10);          // This line sets up a new interval
    });

    stopBtn.addEventListener ('click', () => {                          // event list
      clearInterval(Interval);                         // This line clears any existing interval that might be running
    });

    resetBtn.addEventListener('click', () => {                           //event list
      clearInterval(Interval);
      tens = '00';                                         // setting values to 0
      seconds = '00';
      minutes = '00';
      appendTens.innerHTML = tens;                         // adding to the html 
      appendSeconds.innerHTML = seconds;                   // adding to the html 
      appendMinutes.innerHMTL = minutes;                   // adding to the html
    });
  };