var inp_f1 = document.querySelector('.in-i_f1');
var inp_f2 = document.querySelector('.in-i_f2');

var nxt = document.querySelector('#next');
var bck = document.querySelector('#back');

var pw = document.querySelector("#password");
var cpw = document.querySelector("#cpassword");


nxt.addEventListener("click", function () {
    if (pw.value == cpw.value && pw.value != "" && cpw.value != "") {
        inp_f1.style.display = "none";
        inp_f2.style.display = "block";
    }
    else if (pw.value == "" && cpw.value == "") {
        document.querySelector('#pw-mm').innerHTML = "<b>Empty field</b>";
        document.querySelector('#pw-mm').style.display = "block";
    }
    else{
        document.querySelector('#pw-mm').style.display = "block";
    }
})

bck.addEventListener("click", function () {
    inp_f1.style.display = "block";
    inp_f2.style.display = "none";
})
