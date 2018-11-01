function getSundays(year) {
    const offdays = [];
    let i = -1;
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 90);
    for ( let month = new Date().getMonth(); month < currentDate.getMonth(); month += 1) {
        const tdays = new Date(year, month, 0).getDate();
        for (let date = 1; date <= tdays; date += 1) {
        const smonth = (month < 9) ? `0${month + 1}` : month + 1;
        const sdate = (date < 10) ? `0${date}` : date;
        const dd = `${year}-${smonth}-${sdate}`;
        const day = new Date();
        day.setDate(date);
        day.setMonth(month);
        day.setFullYear(year);
        if (day.getDay()  ===  0 ) {
            offdays[i += 1] = dd;
        }
        }
    }
    return offdays;
}

// get sundays for the next three months
// based on weeks: ~4 weeks per month
function revisedGetSundays() {

    const date = new Date();
    const sundays = [];
    
    // zoom up to first Sunday
    date.setDate(date.getDate() + 7 - date.getDay());
    
    sundays.push(new Date(date.getTime()));

    // get remaining 8 upcoming sundays
    for (let i = 0; i < 11; i++) {
        date.setDate(date.getDate() + 7);
        sundays.push(new Date(date.getTime()));
    }

    return sundays;
}

// get sundays for the next three months
// based on months: 3 months (inclusive)
function revisedGetSundays2() {

    const date = new Date();

    const sundays = [];
    
    // zoom up to first Sunday
    date.setDate(date.getDate() + 7 - date.getDay());
    
    sundays.push(new Date(date.getTime()));

    // get remaining 8 upcoming sundays
    for (let i = 0; i < 11; i++) {
        date.setDate(date.getDate() + 7);
        sundays.push(new Date(date.getTime()));
    }

    return sundays;
}

console.log(revisedGetSundays());