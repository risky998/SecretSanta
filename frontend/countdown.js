function countdown() {
    var current = new Date();
    var eventDate = new Date(2019, 12, 10);

    var current_time = current.getTime();
    var event_time = eventDate.getTime();
    var remain_time = event_time - current_time;

    console.log(current_time)
    console.log(event_time)

    var sec = Math.floor(remain_time/1000);
    var min = Math.floor(sec/60);
    var hour = Math.floor(min/60);
    var day = Math.floor(hour/24);

    console.log(hour)

    sec %= 60;
    min %= 60;
    hour %= 24;

    console.log(sec)
    console.log(day)

    document.getElementById("day").textContent = day;
    document.getElementById("day").innerText = day;
    document.getElementById("hour").textContent = hour;
    document.getElementById("minute").textContent = min;
    document.getElementById("second").textContent = sec;

}

countdown();
