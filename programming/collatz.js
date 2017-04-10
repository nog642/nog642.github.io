function getNext(n) {
    if (n % 2 == 0) {
        return n / 2;
    } else {
        return (n * 3) + 1;
    }
}
function collatz() {
    var numb = document.forms.collatz.startNum.value;
    if (isNaN(numb) || numb <= 0) {
        document.forms.collatz.fullList.value = 'NaN';
    } else {
        numb = Number(numb)
        var numbList = [numb];
        while (numb !== 1) {
            numb = getNext(numb);
            numbList.push(numb);
        }
        document.forms.collatz.fullList.value = numbList;
    }
}