const display = document.querySelector("input");
const buttons = document.querySelectorAll("button");
let barisSelesaiMenghitung = false;

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.innerText;

        if (barisSelesaiMenghitung && value !== "=" && value !== "c" && value !== "ce" && value !== "H") {
            display.value = ''; 
            barisSelesaiMenghitung = false;
        }

        if (value !== "=" && value !== "c" && value !== "ce" && value !== "H") {
            display.value += value;
        }

        if (value === "c" || value === "ce" || value === "H") {
            display.value = '';
            barisSelesaiMenghitung = false; 
        }

        if (value === "=") {
            try {
                display.value = eval(display.value);
                barisSelesaiMenghitung = true; 
            } catch (error) {
                display.value = 'Error';
                barisSelesaiMenghitung = true;
            }
        }
    });
});