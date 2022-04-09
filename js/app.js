const button = document.getElementById('btn');
const color = document.querySelector(".color")

button.addEventListener('click', ()=>{
    let hexC =  generateHex();
    document.body.style.backgroundColor = hexC;
    color.textContent = hexC;
})

const hex =[
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E'
, 'F']

function generateHex(){
    let hexC = '#'
    for (let i=0; i<6; i++){
        hexC += hex[getRandom()]
    }
    return hexC;
}
function getRandom(){
    return Math.floor(Math.random() *hex.length);
}

console.log(getRandom());