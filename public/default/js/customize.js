function getValue() {
    var hairType1 = document.getElementById('straight');
    var hairType2 = document.getElementById('wavy');
    var hairType3 = document.getElementById('curly');
    let result = document.getElementById('result');
    //let product = document.getElementById('product');
    if (hairType1.checked == true) {
        result.innerText = hairType1.value;
        //product.selectedIndex = 0;
        //console.log(product.selectedIndex);
    } else if (hairType2.checked == true) {
        result.innerText = hairType2.value;
        //product.selectedIndex = 1;
        //console.log(product.selectedIndex);
    } else if (hairType3.checked) {
        result.innerText = hairType3.value;
        //product.selectedIndex = 2;
        //console.log(product.selectedIndex);
    } else {
        alert("NOPE");
    }
}