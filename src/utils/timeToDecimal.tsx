//by the time i made this func, i forgot why i started making it
//UPDATE: i member now :skull:

export function timeToDecimal(time:string) {
    let hoursMinutes = time.split(/[.:]/);
    let hours = parseInt(hoursMinutes[0], 10);
    let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours + minutes / 60;
  }