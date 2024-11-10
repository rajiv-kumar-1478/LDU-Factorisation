let a11;
let a12;
let a21;
let a22;
let l11;
let l12;
let l21;
let l22;
let lm11;
let lm12;
let lm21;
let lm22;
let d11;
let d12;
let d21;
let d22;
let u11;
let u12;
let u21;
let u22;
let E11;
let E12;
let E21;
let E22;
let E11_inv;
let E12_inv;
let E21_inv;
let E22_inv;
let dm11;
let dm12;
let dm21;
let dm22;
let um11;
let um12;
let um21;
let um22;
let umm11;
let umm12;
let umm21;
let umm22;
let u_11;
let u_12;
let u_21;
let u_22;
function matrix1(){

a11=parseFloat(document.getElementById("a11").value);
a12=parseFloat(document.getElementById("a12").value);
a21=parseFloat(document.getElementById("a21").value);
a22=parseFloat(document.getElementById("a22").value);
l11=parseFloat(document.getElementById("l11").value);
l12=parseFloat(document.getElementById("l12").value);
l21=parseFloat(document.getElementById("l21").value);
l22=parseFloat(document.getElementById("l22").value);
d11=parseFloat(document.getElementById("d11").value);
d12=parseFloat(document.getElementById("d12").value);
d21=parseFloat(document.getElementById("d21").value);
d22=parseFloat(document.getElementById("d22").value);
lm11=parseFloat(document.getElementById("lm11").value);
lm12=parseFloat(document.getElementById("lm12").value);
lm21=parseFloat(document.getElementById("lm21").value);
lm22=parseFloat(document.getElementById("lm22").value);
u11=parseFloat(document.getElementById("u11").value);
u12=parseFloat(document.getElementById("u12").value);
u21=parseFloat(document.getElementById("u21").value);
u22=parseFloat(document.getElementById("u22").value);
umm11=parseFloat(document.getElementById("umm11").value);
umm12=parseFloat(document.getElementById("umm12").value);
umm21=parseFloat(document.getElementById("umm21").value);
umm22=parseFloat(document.getElementById("umm22").value);

document.getElementById("l11").value=1;
document.getElementById("l12").value=0;
document.getElementById("l21").value=a21 / a11;
document.getElementById("l22").value=1;

document.getElementById("lm11").value=1;
document.getElementById("lm12").value=0;
document.getElementById("lm21").value=a21 / a11;
document.getElementById("lm22").value=1;

document.getElementById("u11").value=a11;
document.getElementById("u12").value=a12;
document.getElementById("u21").value=0;
document.getElementById("u22").value=a22+(-(a21*a12)/a11);


document.getElementById("umm11").value=1;
document.getElementById("umm12").value=(a12)/a11;
document.getElementById("umm21").value=0;
document.getElementById("umm22").value=1;

document.getElementById("d11").value=a11;
document.getElementById("d12").value=0;
document.getElementById("d21").value=0;
document.getElementById("d22").value=a22 - ( a21 * a12 ) / a11;

}

function  complete(){


a11=parseFloat(document.getElementById("a11").value);
a12=parseFloat(document.getElementById("a12").value);
a21=parseFloat(document.getElementById("a21").value);
a22=parseFloat(document.getElementById("a22").value);

E11=parseFloat(document.getElementById("E11").value);
E12=parseFloat(document.getElementById("E12").value);
E21=parseFloat(document.getElementById("E21").value);
E22=parseFloat(document.getElementById("E22").value);

E11_inv=parseFloat(document.getElementById("E11_inv").value);
E12_inv=parseFloat(document.getElementById("E12_inv").value);
E21_inv=parseFloat(document.getElementById("E21_inv").value);
E22_inv=parseFloat(document.getElementById("E22_inv").value);

dm11=parseFloat(document.getElementById("dm11").value);
dm12=parseFloat(document.getElementById("dm12").value);
dm21=parseFloat(document.getElementById("dm21").value);
dm22=parseFloat(document.getElementById("dm22").value);

lm11=parseFloat(document.getElementById("lm11").value);
lm12=parseFloat(document.getElementById("lm12").value);
lm21=parseFloat(document.getElementById("lm21").value);
lm22=parseFloat(document.getElementById("lm22").value);

um11=parseFloat(document.getElementById("um11").value);
um12=parseFloat(document.getElementById("um12").value);
um21=parseFloat(document.getElementById("um21").value);
um22=parseFloat(document.getElementById("um22").value);


document.getElementById("E11").value=1;
document.getElementById("E12").value=0;
document.getElementById("E21").value=-(a21 / a11);
document.getElementById("E22").value=1;


document.getElementById("um11").value=a11;
document.getElementById("um12").value=a12;
document.getElementById("um21").value=0;
document.getElementById("um22").value=a22+(-(a21*a12)/a11);

document.getElementById("E11_inv").value=1;
document.getElementById("E12_inv").value=0;
document.getElementById("E21_inv").value=(a21 / a11);
document.getElementById("E22_inv").value=1;


document.getElementById("dm11").value=a11;
document.getElementById("dm12").value=0;
document.getElementById("dm21").value=0;
document.getElementById("dm22").value=a22+(-(a21*a12)/a11);


document.getElementById("u_11").value=1;
document.getElementById("u_12").value=(a12)/a11;
document.getElementById("u_21").value=0;
document.getElementById("u_22").value=1;




}
