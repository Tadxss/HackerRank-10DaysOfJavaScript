const btn = document.getElementById('btn');

btn.addEventListener("click", function() {
    const fnBtn = document.getElementById('btn');
    let value = Number(fnBtn.textContent);
    value++;
    btn.textContent = value;
});
