document.querySelectorAll(".btn-complete").forEach((button) => {
    button.addEventListener("click", function () {
        const currentTime = new Date();
        const time = currentTime.toLocaleTimeString();
        let cardTitle =
            this.parentElement.querySelectorAll(".card-title").innerText;
        let p = document.createElement("p");
        p.innerText = `You have completed the task ${cardTitle} on ${time}`;
        document.getElementById("add-activity").appendChild(p);
    });
});
document.getElementById("btn-clear-history").addEventListener("click", function(){
    document.getElementById("add-activity").innerText = '';
})