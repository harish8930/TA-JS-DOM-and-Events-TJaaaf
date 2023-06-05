let boxfirst =  document.querySelector(".box1")
let boxsec =  document.querySelector(".box2")


function generateRandomColor(){

    let hexCharacter = ['0',
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
];

    let color = "#";

    for(let i =0 ; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * 16);
        color = color + hexCharacter[randomNumber];
    }
    return color;
}


function handleClick(){

let randomColor = generateRandomColor();

boxfirst.style.background = randomColor;

}


function handleMouseMove(){

    let randomColor = generateRandomColor();
    
    boxsec.style.background = randomColor;
    
    }


boxfirst.addEventListener("click",handleClick)

boxsec.addEventListener("mousemove",handleMouseMove)
