function iniciar(){
anunci="mande-nos um e-mail com sugestões ou críticas para";
compri=anunci.length;
nespaco=compri-1;
posi=1;
comeco=0;
letreiro();
}//-----------------
function letreiro(){
espaco="";
for (rec=1;rec<=nespaco;rec++){
espaco=espaco+" ";
}//para
letrado=espaco+anunci.substring(comeco,posi);
window.status=letrado;
if (posi<compri){
posi++;
}//se
nespaco--;
if (nespaco<=0){
comeco++;
}//se
if (comeco==compri){
nespaco=compri-1;
posi=1;
comeco=0;
}//se
setTimeout("letreiro()",150)
}//-----------------
function focar_nume(formu,elemento) {
//focaliza um elemento pelo numero
var contar=document.forms[formu];
if (contar!=undefined) {
contar=document.forms[formu].elements[elemento];
if (contar!=undefined) {
document.forms[formu].elements[elemento].focus();
}
}
}//-----------------
function escolhe(){
V1=parseFloat(document.formu1.t1.value);
V2=parseFloat(document.formu1.t2.value);
W2=parseFloat(document.formu1.t3.value);
F=parseFloat(document.formu1.t4.value);
tipo=parseFloat(document.formu1.s5.value);
W1=W2*1.1;
I1=W1/V1
I2=W2/V2
if (W2<=500){
D=3;
}else{
if (W2<=1000){
D=2.5;
}else{
D=2;
}
}
S1=I1/D;
S2=I2/D;
SM=tipo*Math.sqrt(W2/F);
SG=SM*1.1;
nucleo=Math.sqrt(SG);
document.formu2.resu1.value=W1+" VA";
document.formu2.resu2.value=I1+" A";
document.formu2.resu3.value=I2+" A";
document.formu2.resu4.value=D+" A/mm2";
document.formu2.resu5.value=S1+" mm2";
document.formu2.resu6.value=S2+" mm2";
document.formu2.resu7.value=SM+" cm2";
document.formu2.resu8.value=SG+" cm2";
document.formu2.resu9.value=nucleo+" cm";
focar_nume(1,0);
}//--------------------------------------------------------------------
function limpar1(){
document.formu1.t1.value="";
document.formu1.t2.value="";
document.formu1.t3.value="";
document.formu1.t4.value="";
focar_nume(0,0);
}//--------------------------------------------------------------------
function decide(){
V1=parseFloat(document.formu1.t1.value);
V2=parseFloat(document.formu1.t2.value);
W2=parseFloat(document.formu1.t3.value);
F=parseFloat(document.formu1.t4.value);
lado=parseFloat(document.formu3.s3.value);
SF1=parseFloat(document.formu3.t1.value);
SF2=parseFloat(document.formu3.t2.value);
A=parseFloat(document.formu3.t4.value);
esp=parseFloat(document.formu3.t5.value);
BM=parseFloat(document.formu3.t6.value);
W1=W2*1.1;
I1=W1/V1
I2=W2/V2
janela=A*50*lado*A;
SG=A*esp;
SM=SG/1.1;
EV=100000000/(4.44*BM*F*SM);
N1=V1*EV;
N2=V2*EV*1.1;
SC=(N1*SF1)+(N2*SF2);
razao=janela/SC;
LM=(2*A)+(2*esp)+(0.5*A*Math.PI);
PC=SC*LM*8.9/100;
document.formu4.resu1.value=SM+" cm2";
document.formu4.resu2.value=SG+" cm2";
document.formu4.resu4.value=EV+" esp/volt";
document.formu4.resu5.value=N1+" voltas";
document.formu4.resu6.value=N2+" voltas";
document.formu4.resu7.value=SC+" mm2";
document.formu4.resu8.value=janela+" mm2";
document.formu4.resu9.value=razao;
document.formu4.resu10.value=LM+" cm";
document.formu4.resu11.value=PC+" g";
focar_nume(4,0);
}//----------------
function limpar2(){
document.formu3.t1.value="";
document.formu3.t2.value="";
document.formu3.t4.value="";
document.formu3.t5.value="";
focar_nume(3,0);
}//--------------------------------------------------------------------
