const btnRotator = document.getElementById('btn5');
let numbers = [1, 2, 3, 6, 9, 8, 7,4];
const ids = [1, 2, 3, 6, 9, 8, 7,4];

btnRotator.addEventListener("click", function () {
    numbers.unshift(numbers.pop());
    for (let i = 0; i <= 7; i++) {
        document.getElementById("btn"+ids[i]).innerHTML = numbers [i];
    }
});