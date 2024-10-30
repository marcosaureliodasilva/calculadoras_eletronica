function iniciar(){
anunci="mande-nos um e-mail com sugestões ou críticas para";
compri=anunci.length;
nespaco=compri-1;
posi=1;
comeco=0;
letreiro();
limpar();
}//----------------
function letreiro(){
//letreiro na barra de status
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
function validar(){
valido=document.formu1.numecpf.value;
if (validacpf(valido)==true && valido!=""){
alert('cpf ok');
}
else{
alert('cpf inválido');
}
}//-----------------
function gerar(){
document.formu3.geracpf.value=geradorcpf();
}//-----------------
function limpar(){
document.formu1.numecpf.value="";
focar_nume(0,0);
}//-----------------
function calculaDv(strCpf){
	var peso=11;
	var soma=0;
	if(strCpf.length==9)
	{
		peso=10;
	}
	for(i=0; i<strCpf.length; i++)
	{
		soma += parseInt(strCpf.substring(i,i+1)) * (peso--);
	}
	// resto divisao por 11
	soma = soma % 11;
	if(soma<2)
	{
		soma=0;
	}
	else
	{
		soma = 11 - soma;
	}
	return soma;
}//-----------------
function validacpf(strCpf)
{
	var cpfSemDigito = strCpf.substring(0,strCpf.length-2);
	var dv1Cpf = strCpf.substring(strCpf.length-2,strCpf.length-1);
	var dv2Cpf = strCpf.substring(strCpf.length-1,strCpf.length);
	var dv1 = calculaDv(cpfSemDigito);
	var dv2 = calculaDv(cpfSemDigito+""+dv1);
	if(dv1Cpf==dv1 && dv2Cpf==dv2)
	{
		return true;
	}
	else
	{
		return false;
	}
}//-----------------
function geradorcpf()
{
	var strCpf="";
	// gera randomicamente 9 dígitos de 0-9
	for(i=0; i<9; i++)
	{
		strCpf += "" + parseInt(Math.random()*10);
	}
	// calcula dv1 com base nos 9 dígitos
	var dv1 = calculaDv(strCpf);
	// calcula dv2 com base nos 9 digitos + dv1
	var dv2 = calculaDv(strCpf+""+dv1);
	// retorna cpf
	return strCpf+""+dv1+""+dv2;
}//-----------------
