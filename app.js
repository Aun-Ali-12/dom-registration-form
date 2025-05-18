function submit(){    
let name = document.getElementById("name").value
let nameSplit = name.split(" ")
let stdName = []
let joinStdName = stdName.join(" ")
for(let i = 0; i<nameSplit.length; i++){
let firstLetter = nameSplit[i].slice(0, 1).toUpperCase()
let secPart = nameSplit[i].slice(1).toLowerCase()
let fullName = firstLetter+secPart
stdName.push(fullName)
}
console.log("bahar loop", stdName.join(" "));
let card = document.getElementById("card")

let fName = document.getElementById("f-name").value
let fNameSplit = fName.split(" ")
let fatherName = []
for(let i = 0; i<fNameSplit.length; i++){
let firstLetter = fNameSplit[i].slice(0, 1).toUpperCase()
let secPart = fNameSplit[i].slice(1).toLowerCase()
let fullName = firstLetter+secPart
fatherName.push(fullName)
}
let card1 = document.getElementById("card1")

let dob = document.getElementById("dob").value
console.log(dob);
let card2 = document.getElementById("card2")

let cnic = document.getElementById("cnic").value
console.log(cnic);
let card3 = document.getElementById("card3")

let edu = document.getElementById("edu").value
let eduSplit = edu.split(" ")
let stdEdu = []
for(i = 0; i<eduSplit.length; i++){
let firstLetter = eduSplit[i].slice(0, 1).toUpperCase()
let secPart = eduSplit[i].slice(1).toLowerCase()
let fullName = firstLetter+secPart
stdEdu.push(fullName)
}
let card4 = document.getElementById("card4")

//first card
if(joinStdName.length==0 && fName.length==0 && dob.length==0 && cnic.length==0 && edu.length==0){
alert("Fill the missing input");
}
else{
card.style.backgroundColor = "rgb(0, 68, 255)"
card.style.width = "fit-content"
card.style.height = "fit-content"
card.style.padding = "1.5rem"
card.style.border = "0.15rem"
card.style.borderRadius = "1rem"
card.innerText = stdName.join(" ")
//second card
card1.style.backgroundColor = "rgb(0, 68, 255)"
card1.style.width = "fit-content"
card1.style.height = "fit-content"
card1.style.padding = "1.5rem"
card1.style.border = "0.15rem"
card1.style.borderRadius = "1rem"
card1.innerText = fatherName.join(" ")
//third card
card2.style.backgroundColor = "rgb(0, 68, 255)"
card2.style.width = "fit-content"
card2.style.height = "fit-content"
card2.style.padding = "1.5rem"
card2.style.border = "0.15rem"
card2.style.borderRadius = "1rem"
card2.innerText = dob
//fourth card
card3.style.backgroundColor = "rgb(0, 68, 255)"
card3.style.width = "fit-content"
card3.style.height = "fit-content"
card3.style.padding = "1.5rem"
card3.style.border = "0.15rem"
card3.style.borderRadius = "1rem"
card3.innerText = cnic
//fifth card
card4.style.backgroundColor = "rgb(0, 68, 255)"
card4.style.width = "fit-content"
card4.style.height = "fit-content"
card4.style.padding = "1.5rem"
card4.style.border = "0.15rem"
card4.style.borderRadius = "1rem"
card4.innerText = stdEdu.join(" ")
}

//main card
let mainCard = document.getElementById("card-div")
mainCard.style.display = "flex"
mainCard.style.justifyContent = "space-between"
}
// function submit(){
// let name = document.getElementById("name").value
// let nameSplit = name.split(" ")
// let stdName = []
// for(let i = 0; i<nameSplit.length; i++){
// let firstLetter = nameSplit[i].slice(0, 1).toUpperCase()
// let secPart = nameSplit[i].slice(1).toLowerCase()
// let fullName = firstLetter+secPart
// stdName.push(fullName)
// }
// console.log("bahar loop", stdName.join(" "));
// }
