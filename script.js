const container = document.createElement("div");
container.classList.add("container");
const colorPicker = document.querySelector('#colorPicker');
const colorPickerBackground = document.querySelector('#colorPickerBackground');
document.body.appendChild(container);
document.body.setAttribute('style','display: flex; justify-content: center; flex-direction: row; row-gap: 30px;')

const input = document.querySelector('#input');

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function makeNewGrid() {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
    makeGrid(parseInt(input.value));
}



function makeGrid (num){
    if (num > 100) {
        alert('Number must be under 100')
        return;
    }
    for (let i = 1; i <= (num * num); i++) {
        let div = document.createElement("div");
        div.setAttribute('style',`background-color: ${colorPickerBackground.value}; `);
        container.appendChild(div);
        
        div.onmouseover = () => {
            if (mouseDown == true) {
                div.setAttribute('style',`background-color: ${colorPicker.value};`)
            };
        }
    }
    container.setAttribute('style',`width: 700px; height: 500px; display: grid; grid-template-columns: repeat(${num},1fr);`);
    
}