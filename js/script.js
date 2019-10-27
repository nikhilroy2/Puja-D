//todayDate id apply
function myFirstDate() {
    {
        let t = new Date();
        let d = t.getDay();
        switch(d) {
            case 0: day = 'Sunday';
            break;
            case 1: day = 'Monday';
            break;
            case 2: day = 'Tuesday';
            break;
            case 3: day = 'Wednesday';
            break;
            case 4: day = 'Thusday';
            break;
            case 5: day = 'Friday';
            break;
            case 6: day = 'Saturday';
            break;
            default: day = 'The day doen not match at switch ';
    
        }
        document.getElementById('todayDate').innerHTML = day;
    }
};
setInterval(myFirstDate, 1000);
//Site Update.
{
    const t = new Date();
    const y = t.getFullYear();
    function lastDate() {
        document.getElementById('site_reg').innerHTML =
          '   &copy; SiteName <sup> <small> TM </small>  </sup> // '  + y;
    }
    setInterval(lastDate, 1000);
}
