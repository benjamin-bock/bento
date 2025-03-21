// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date

window.onload = displayClock();
function displayClock() {
    const monthNames = ['jan.', 'fev.', 'Mars', 'Avr', 'Mai', 'Juin', 'Juill', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    var d = new Date();
    var yy = d.getYear();
    var mm = monthNames[d.getMonth()];
    var dd = d.getDate();
    var min = (mins = ('0' + d.getMinutes()).slice(-2));
    var hh = d.getHours();
    var ampm = '';

    if (CONFIG.twelveHourFormat) {
        ampm = hh >= 12 ? ' pm' : ' am';
        hh = hh % 12;
        hh = hh ? hh : 12;
    }

    document.getElementById('hour').innerText = hh;
    document.getElementById('separator').innerHTML = ' : ';
    document.getElementById('minutes').innerText = min + ampm;

    document.getElementById('year').innerText = yy;
    document.getElementById('month').innerText = mm;
    document.getElementById('day').innerText = dd;

    setTimeout(displayClock, 1000);
}
