// Random color in all body function start
function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
document.getElementById("bg-color-btn").addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
});
// Random color in all body function end
// Local date start
function getFormattedDate() {
    let now = new Date();
    let day = now.toLocaleDateString('en-US', { weekday: 'short' }) + ",";
    let date = now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    document.getElementById("day").innerText = day;
    document.getElementById("date").innerText = date;
}
getFormattedDate();
// Local date end
// Blog page work start
function blog() {
    window.location.href = "blog.html";
}
// Blog page work end
// Task Number Count Start
let taskNo = document.getElementById("task-no").innerText;
let completeNo = document.getElementById("complete-no").innerText;
let conTaskNO = parseInt(taskNo);
let conCompleteNO = parseInt(completeNo);
// Task Number Count End
// Clicked Function Start
let buttons = document.querySelectorAll(".myButtons");
for (let button of buttons) {
    button.addEventListener("click", function () {
        this.disabled = true;
        console.log("hello");
        this.style.opacity = 0.3;
        conTaskNO = conTaskNO - 1;
        conCompleteNO = conCompleteNO + 1;
        document.getElementById("task-no").innerText = conTaskNO;
        document.getElementById("complete-no").innerText = conCompleteNO;
        alert("Board Updated Successfully");
        if (conTaskNO === 0 && conCompleteNO === 29) {
            alert("Congrats!!! You have completed all the current task.");
        }
        // History Check Start
        let parent = this.parentElement.parentElement;
        let h3 = parent.querySelector("h3");
        let value = h3.innerText;

        let History = document.getElementById('history');
        let p = document.createElement("p");
        p.innerText = `
        You have Complete The Task ${value} at 12:48:15 P
        `
        History.appendChild(p);
        // History Check End
    });
}
// Clicked Function End
// Clear History Start
document.getElementById("clear").addEventListener("click", function () {
    let History = document.getElementById('history');
    History.innerText =" ";
})
// Clear History End