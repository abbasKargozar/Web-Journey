console.log("JS Debug")
const linkHolder = document.getElementById("style-ref")
const styleButton = document.getElementById("style-changer")

styleButton.addEventListener("click", () => {
    linkHolder.disabled = !linkHolder.disabled;
    styleButton.textContent = linkHolder.disabled
    ? "Click to enable Style" : "Click to disable Style";
});
