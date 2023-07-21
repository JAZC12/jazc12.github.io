//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=240; timeIni=240; timeBon=0;
var successes=0; successesMax=18; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
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
var wordsGame="MTBfUkVMQUNJT05BUg=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["TGXDs24=", "U2VsdmE="],["U2VycGllbnRl", "VmVuZW5v"],["RWxlZmFudGU=", "VHJvbXBh"],["R2F0bw==", "Um9ucm9uZW8="],["Q2FiYWxsbw==", "R2Fsb3Bl"],["VGlidXLDs24=", "QWd1YQ=="],["TWFyaXBvc2E=", "VnVlbG8="],["R29yaWxh", "TW9udGU="],["SmlyYWZh", "Q3VlbGxv"],["U2VsdmE=", "UnVnaXI="],["VmVuZW5v", "RXNjYW1hcw=="],["VHJvbXBh", "TWFuYWRh"],["Um9ucm9uZW8=", "Q3VyaW9zaWRhZA=="],["R2Fsb3Bl", "Q3Jpbg=="],["QWd1YQ==", "QWxldGFz"],["VnVlbG8=", "Q29sb3JpZGE="],["TW9udGU=", "SW50ZWxpZ2VuY2lh"],["Q3VlbGxv", "QWx0dXJh"]];
var c=[[4,5],[9,6],[8,6],[4,8],[7,6],[7,4],[8,5],[6,5],[6,6],[5,5],[6,7],[6,6],[8,10],[6,4],[4,6],[5,8],[5,12],[6,6]];
var con1=["León","Perro","Serpiente","Elefante","Gato","Caballo","Tiburón","Mariposa","Gorila","Jirafa"];
var con2=["Selva","Campo","Veneno","Trompa","Ronroneo","Galope","Agua","Vuelo","Monte","Cuello"];
var con3=["Rugir","Ladrido","Escamas","Manada","Curiosidad","Crin","Aletas","Colorida","Inteligencia","Altura"];
var sel1=""; join1=[]; join2=[];
