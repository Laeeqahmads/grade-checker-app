function gradeCheck(event) {
    event.preventDefault();
    let Inputgrade = document.querySelector("#Inputgrade").value;
    Inputgrade = Number(Inputgrade)

    console.log(Inputgrade);

    let message = "";

 
    if (Inputgrade > 100){
        message = "Enter number between 0-100"
    } else if (Inputgrade >= 80){
        message = "Your grade is A+"
    } else if (Inputgrade >= 70){
        message = "Your grade is A"
    } else if (Inputgrade >= 60){
        message = "Your grade is B"
    } else if (Inputgrade >= 50){
        message = "Your grade is C"
    } else if (Inputgrade >= 0) {
        message = "Your grade is F"
    } else {
        message = "Enter number between 0-100"
    }

document.querySelector("#resultWindow").innerHTML = message
} 