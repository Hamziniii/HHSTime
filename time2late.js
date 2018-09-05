javascript:(function(){
a = 'PLTW, AP Physics 1, Algebra 2 Honors, French 1, Lunch, Health, English 1 Honors, AP Human Geography';
b = 'W1317, W1016, W2009, C1020, W1203, W1307, W1200, W1208'; 
let classes = a.split(", ");
let rooms = b.split(", ");

if(classes.length != 8){
    alert("Beep Boop, you do not have eight classes, please fix it");
    return;
}
if(rooms.length != 8){
    alert("Beep Boop, you do not have eight rooms, please fix it");
    return;
}

let num = 0;
let periods = {1:{room:rooms[num],name: classes[num++], start: new Date().setHours(8, 00, 0, 0), end: new Date().setHours(8, 43, 0, 0) },2:{room:rooms[num],name: classes[num++], start: new Date().setHours(8, 48, 0, 0), end: new Date().setHours(9, 31, 0, 0) },3:{room:rooms[num],name: classes[num++], start: new Date().setHours(9, 36, 0, 0), end: new Date().setHours(10, 24, 0, 0) },4:{room:rooms[num],name: classes[num++], start: new Date().setHours(10, 29, 0, 0), end: new Date().setHours(11, 12, 0, 0) },5:{room:rooms[num],name: classes[num++], start: new Date().setHours(11, 17, 0, 0), end: new Date().setHours(12, 00, 0, 0) },6:{room:rooms[num],name: classes[num++], start: new Date().setHours(12, 05, 0, 0), end: new Date().setHours(12, 48, 0, 0) },7:{room:rooms[num],name: classes[num++], start: new Date().setHours(12, 53, 0, 0), end: new Date().setHours(13, 36, 0, 0) },8:{room:rooms[num],name: classes[num++], start: new Date().setHours(13, 41, 0, 0), end: new Date().setHours(14, 26, 0, 0) }};

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

alert(nextPeriod ? `Period: ${currentPeriod}, \nClass: ${periods[currentPeriod].name} ${periods[currentPeriod].room}, \nTime Left: ${timeLeft}, \nNext Class: ${periods[nextPeriod].name} ${periods[nextPeriod].room}` : `Period: ${currentPeriod}, \nClass: ${periods[currentPeriod].name}, \nTime Left: ${timeLeft}`);
})();
