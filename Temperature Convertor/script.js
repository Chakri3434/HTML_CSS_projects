function convert() {
    let res=0
    let scale = document.getElementById('scaleSelect').value;
    let temp=document.querySelector('.temp').value;
    let result=document.querySelector('.result');
    if (scale=='Celcius') {
        res = (temp*(9/5) + 32)
    }
    else {
        res = (temp-32)*(5/9)
    }
    result.value=res
        
}
