const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click', function(){

    
    let hex_color = "#";
    for (let  i= 0;  i< 6; i++) {
        let randomNumber = getRandomNumber();
        console.log(randomNumber);
        
        hex_color += hex[randomNumber];
    }

    color.textContent = hex_color;
    document.body.style.backgroundColor = hex_color;

})

function getRandomNumber()
{
    return Math.floor(Math.random() * hex.length);
}