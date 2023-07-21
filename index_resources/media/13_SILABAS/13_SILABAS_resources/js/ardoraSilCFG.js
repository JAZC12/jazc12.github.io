//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
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
var wGame=["-loma","-codrilo","del-","mari-sa","ele-te","alpa-","ra-","co-jo","guacama-","lo-"];
var wIma=["12 pal.jpg","12 coco.jpg","12 delf.jpg","12 mari.jpg","5 elefante.jpg","5 alpa.jpg","5  rat.jpg","conejo 2.jpg","loro2.jpg","loro1.jpg"];
var audio=["","","","","","","","","",""];
var wAlt=["","","","","","","","","",""];
var w0=["cGE=","Y28=","Zmlu","cG8=","ZmFu","Y2E=","dGE=","bmU=","eW8=","cm8="];
var w1=["cGU=","Y2U=","bWFzYWxsYQ==","Y2E=","Y2Fu","c2E=","c2E=","bGU=","bGxv","cml0bw=="];
var w2=["Y2E=","cGE=","cHJpbmNpcGlv","cmU=","Z2Fu","ZGE=","bG8=","cGk=","cGE=","cmVuem8="];
var w3=["c2E=","bWU=","cGE=","ZGE=","dGU=","cmU=","cmU=","bHU=","cmE=","bWE="];
var c=[2,2,3,2,3,2,2,2,2,2];
var wW=["","","","","","","","","",""];
var dirMedia="13_SILABAS_resources/media/";
var wordsGame="MTNfU0lMQUJBUw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var ram_G=["-1","-1","-1","-1","-1","-1","-1","-1","-1","-1"]; var indexGame=0; var tiAudio=false;
