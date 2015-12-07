function validateNumbers(n) {

    return !isNaN(parseFloat(n)) && isFinite(n);

}

function validateEmail(e) {
    //str.indexOf('@@');
    var re = /^([\w-]+(?:\.[\w-]+)*)@@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)/;
    return re.test(e);
}

function validateForm(form) {
    var sum = true;

    for (I = 0; I < valiList.length; I++) {
        var x = document.forms[form.name][valiList[I].name];

        if (x.value == null || x.value == "") {
            alert(valiList[I].message);
            sum = false;
        } else {


            if (valiList[I].type == 'int') {

                if (!validateNumbers(x.value)) {
                    alert(valiList[I].message);
                    sum = false;
                }
            }

            if (valiList[I].type == 'email') {

                if (!validateEmail(x.value)) {
                    alert(valiList[I].message);
                    sum = false;
                }
            }
        }

        if (sum == false) {
            return false;
        }


    }
    return sum;
}



//var x = document.forms["myForm"]["navn"].value;

//for (I = 0; I < form.length; I++) {
//   // alert(form[I].rel);
//    var x = form[I].value;;
//    if (x == null || x == "") {
//        alert("Name must be filled out");
//        return false;
//    }
//}
