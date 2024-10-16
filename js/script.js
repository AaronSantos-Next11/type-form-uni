const value = document.querySelector('#range_value');

const input = document.querySelector('#range');

value.textContent = input.value;

addEventListener("input", (event) => {
    value.textContent = event.target.value;
});