function appendtodisplay (value) {
    document.getElementById('display').value+= value;
}
function cleardisplay() {
    document.getElementById('display').value='';
}
function calculateResult() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value=result;
}
