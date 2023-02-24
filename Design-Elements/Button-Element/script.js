const btn = document.querySelector("#btn");
const text = document.querySelector("#text");

btn.onclick = () => {
    text.innerHTML = ("Thank You");
    btn.classList.add("active");
};
