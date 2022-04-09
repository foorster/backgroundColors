const button = document.getElementById('btn');
const color = document.querySelector(".color")
const block = document.getElementById('block');

button.addEventListener('click', ()=>{
    let hexC =  generateHex();
    color.textContent = 'Фон ' + hexC;
    block.style.backgroundImage = `url('img/${hexC}.jpg')`;
})

const hex =['1', '2', '3', '4', '5', '6']

function generateHex(){
    let hexC = hex[getRandom()]
    return hexC;
}

function getRandom(){
    return Math.floor(Math.random() *hex.length);
}
