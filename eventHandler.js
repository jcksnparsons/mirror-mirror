let inputEl = document.querySelector("#input-box");

let outputEl = document.querySelector("#output-box");

inputEl.addEventListener("keyup", function(event) {
    outputEl.innerHTML = event.target.value
})