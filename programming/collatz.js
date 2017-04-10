function getNext(n) {
    if (n % 2 == 0) {
        return n / 2;
    } else {
        return (n * 3) + 1;
    }
}
function collatz() {
    var numb = document.forms.collatzForm.startNum.value;
    console.log(numb);
    if (isNaN(numb) || numb <= 0) {
        document.forms.collatzForm.fullList.value = 'NaN';
    } else {
        numb = Number(numb)
        var numbList = [numb];
        while (numb !== 1) {
            numb = getNext(numb);
            numbList.push(numb);
        }
        document.forms.collatzForm.fullList.value = numbList;
    }
}