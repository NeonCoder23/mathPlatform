function Admin() {
    let a = document.querySelector("#specialAnchor");
    a.addEventListener("click", () => {
        let code = Number(prompt("Maxsus Parol!"))
        if (code == 23082005) {
            a.href = "/Baza/index.html"
        } else {
            a.href = "#"
        }
    })
}
Admin()
function noBlock() {
    alert("Bu bo'limlar tayyor emas!")
}