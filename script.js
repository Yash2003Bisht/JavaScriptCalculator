function display(value){
    document.getElementById("result").value += value;
}

function calculate(){
    let temp_result = document.getElementById("result").value
    let result = eval(temp_result)
    document.getElementById("result").value = result
}

function clearScreen(){
    document.getElementById("result").value = ""
}