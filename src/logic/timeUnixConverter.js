const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export default function timeConverter(UNIX_timestamp){
    const d = new Date(UNIX_timestamp * 1000); //milliseconds
    const day = days[d.getDay()];
    let hour = d.getHours();
    let ampm = 'am';
    if (hour>12) {
        hour = hour-12;
        ampm = 'pm';
    }
    return day + ', ' + hour + ampm ;
}