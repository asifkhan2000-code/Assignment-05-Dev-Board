document.querySelectorAll(".btn-complete").forEach((button) => {
    button.addEventListener("click", function () {
        alert("Board Updated Successfully");

        // decrementing totalTask count
        const totalTaskEl = document.getElementById("total-task");
        let totalTask = parseInt(totalTaskEl.innerText);
        if (totalTask > 0) {
            totalTaskEl.innerText = totalTask - 1;
        }
        if (parseInt(totalTaskEl.innerText) === 0) {
            alert("Congratulations!!! You have completed all the current tasks");
        }
        // incrementing totalAttempt count
        let totalAttemptEl = document.getElementById("total-attempt");
        let totalAttempt = parseInt(totalAttemptEl.innerText);
        totalAttemptEl.innerText = totalAttempt + 1;
        this.setAttribute("disabled", true);
        this.style.opacity = "0.2"
    });
});
