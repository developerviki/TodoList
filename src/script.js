function addTodo() {
    let input = document.getElementById("input")
    let inputValue = input.value

    if (inputValue == "") {
        alert("Please Enter Value");
        return;
    } else {
        let element1 = document.createElement("li")
        let element2 = document.createElement("h5")
        element2.innerText = inputValue
        let element3 = document.createElement("button")
        element3.innerText = "Edit"
        element3.style.backgroundColor = "#ffca2c"
        let element4 = document.createElement("button")
        element4.innerText = "Delete"
        element4.style.backgroundColor = "#bb2d3b"
        let div = document.getElementById("todo")

        div.appendChild(element1)
        div.appendChild(element2)
        div.appendChild(element3)
        div.appendChild(element4)

        input.value = ""

        element4.addEventListener('click', () => {
            div.removeChild(element1)
            div.removeChild(element2)
            div.removeChild(element3)
            div.removeChild(element4)
        })
    }

}