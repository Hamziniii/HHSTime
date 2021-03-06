javascript:(function(){
let num = 0;
let periods = {
    1: {
        start: new Date().setHours(7, 30, 0, 0),
        end: new Date().setHours(8, 17, 0, 0)
    },
    2: {
        start: new Date().setHours(8, 22, 0, 0),
        end: new Date().setHours(9, 09, 0, 0)
    },
    3: {
        start: new Date().setHours(9, 14, 0, 0),
        end: new Date().setHours(10, 06, 0, 0)
    },
    4: {
        start: new Date().setHours(10, 11, 0, 0),
        end: new Date().setHours(10, 58, 0, 0)
    },
    5: {
        start: new Date().setHours(11, 03, 0, 0),
        end: new Date().setHours(11, 50, 0, 0)
    },
    6: {
        start: new Date().setHours(11, 55, 0, 0),
        end: new Date().setHours(12, 42, 0, 0)
    },
    7: {
        start: new Date().setHours(12, 47, 0, 0),
        end: new Date().setHours(13, 34, 0, 0)
    },
    8: {
        start: new Date().setHours(13, 39, 0, 0),
        end: new Date().setHours(14, 26, 0, 0)
    }
};

let now = new Date();
let currentPeriod = 1;
let nextPeriod;
let timeLeft = 0;

try {
    while(!(period => (now >= periods[period].start && now < periods[period].end))(currentPeriod)){
        currentPeriod++;
    }   
} catch (error) {
    console.log('Your out of school!');
    return;
}

nextPeriod = currentPeriod != 8 ? currentPeriod + 1 : null;

timeLeft = Math.abs(now - periods[currentPeriod].end);
timeLeft = ((millis) => {  var minutes = Math.floor(millis / 60000);var seconds = ((millis % 60000) / 1000).toFixed(0);return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;})(timeLeft);

alert(`Period: ${currentPeriod}, \nTime Left: ${timeLeft}`);
})();
