

//Variables




var fName = "Jakub"

var age = 30 

var isTall = true

console.log(fName + age + isTall)


// Operators 

//+ - * / == === !=

//Loops

//functions


var people = ["Jakub", "Nick", "Gabriel", "Richard", "Jessica"]
    console.log(people[3])

    for(let i=0; i<people.length; i++){
        if(people[i]==("Richard")){
            console.log("Got him he is" + "" + [i+1] + "" + "in the list")
        }
    }


let test1 = document.getElementById("button1")
test1.addEventListener('click',()=>{console.log("hi")})


function add(a,b){
    a = document.getElementById('num1').value
    b = document.getElementById('num2').value
    let sum = Number(a) + Number(b)
    let answer = document.getElementById('result')
    answer.innerHTML = sum
}

let button2 = document.getElementById("button2")

button2.addEventListener("click", add )







