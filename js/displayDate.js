const displayDateEl = document.getElementById("display-date");
const currentDate = new Date();
const date = currentDate.toDateString();
displayDateEl.innerText = `${date}`;