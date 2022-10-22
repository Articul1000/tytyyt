
function summ_inp() {
    let inp_1 = document.getElementById('inp_1').value;
    let inp_2 = document.getElementById('inp_2').value;
    let result = +inp_1 + +inp_2;
    document.getElementById('result').innerHTML = result;
}

function vich_inp() {
    let inp_1 = document.getElementById('inp_1').value;
    let inp_2 = document.getElementById('inp_2').value;
    let result = +inp_1 - +inp_2;
    document.getElementById('result').innerHTML = result;
}

function umnoj_inp() {
    let inp_1 = document.getElementById('inp_1').value;
    let inp_2 = document.getElementById('inp_2').value;
    let result = +inp_1 * +inp_2;
    document.getElementById('result').innerHTML = result;
}

function delenie_inp() {
    let inp_1 = document.getElementById('inp_1').value;
    let inp_2 = document.getElementById('inp_2').value;
    let result = +inp_1 / +inp_2;
    document.getElementById('result').innerHTML = result;
}

function step_inp() {
    let inp_1 = document.getElementById('inp_1').value;
    let inp_2 = document.getElementById('inp_2').value;
    let result = Number(inp_1) ** Number(inp_2);
    document.getElementById('result').innerHTML = result;
}