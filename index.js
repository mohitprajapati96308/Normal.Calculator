let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let value = btn.textContent;

        if (value === "AC") {
            display.value = "";
        }
        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }
        else if (value === "=") {
            try {
                let expression = display.value.replace(/×/g, "*").replace(/÷/g, "/");
                display.value = eval(expression);
            } catch {
                display.value = "Error";
            }
        }
        else {
            display.value += value;
        }
    });
});
