const clcok = document.querySelector("#clock");

function getDate() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    clock.innerText =`${hours}:${minutes}`;
}

getDate();
setInterval(getDate, 1000);