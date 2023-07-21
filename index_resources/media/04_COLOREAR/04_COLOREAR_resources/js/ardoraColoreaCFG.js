//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=150; timeIni=150; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=4;
var score=0; scoreMax=2; scoreInc=2; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES"; messageTime="SE TERMINO TU TIEMPO"; messageError="FALLO"; messageErrorG="FALLO"; messageAttempts="INTENTE  NUEVAMENTE"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MDRfQ09MT1JFQVI="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[];
var c=["#F0D9BF","#F0D9BF","#FFFFFF","#FFFFFF","#FFFFFF","#FD97C5","#FB1E34","#909090","#909090","#909090","#909090","#909090","#909090","#909090","#909090","#909090","#909090","#909090","#E6E6E6"];
var x=["190","230","190","140","227","160","168","170","193","209","209","125","168","148","242","221","129","147","156"];
var y=["57","111","154","154","209","195","228","138","94","108","342","325","348","371","305","274","261","251","296"];
var t=["","","","","","","","","","","","","","","","","","",""];
var cM=["#F0D9BF","#FFFFFF","#FFFFFF","#FD97C5","#FB1E34","#909090","#E6E6E6"];
var tM=["Orejas","Ojos","Bigotes","Nariz","Lengua","Cuerpo","Pecho"];
var indexColor=0;
