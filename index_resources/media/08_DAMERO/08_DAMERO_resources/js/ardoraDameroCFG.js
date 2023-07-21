//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=240; timeIni=240; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
var score=0; scoreMax=2; scoreInc=2; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
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
var xCell=["QQ==","Tg==","SQ==","TQ==","QQ==","TA==","RQ==","Uw==","IA==","TQ==","QQ==","Uw==","IA==","Qw==","Tw==","TQ==","VQ==","Tg==","RQ==","Uw=="];
var que=["Ave acuática de tamaño mediano a grande.","Animal de granja que suelen tener un cuerpo robusto, con piel gruesa y cerdas en su cuerpo.","Un anfibio de cuerpo robusto y piel rugosa.","Se crían principalmente por su carne, leche y cuero.","Mamífero de gran tamaño perteneciente a la familia Elephantidae.","Conocido como el mejor amigo del hombre debido a su estrecha relación con los seres humanos a lo largo de la historia.","Mamífero carnívoro de gran tamaño","Mamífero rumiante de la familia Camelidae, nativo de los Andes de América del Sur."];
var yCell=["UEFUTw==","Q0VSRE8=","U0FQTw==","VkFDQQ==","RUxFRkFOVEU=","UEVSUk8=","T1NP","QUxQQUNB"];
var pos=[["0","1","0","15"],["14","7","0","0","0"],["8","5","0","0"],["0","11","0","0"],["19","6","0","0","0","2","0","0"],["0","0","0","0","0"],["0","12","0"],["0","0","0","0","0","0"],["0","0","0","0","4","0"],["0","0","0","18","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0","3","0","0"],["0","17","0"],["0","0","0","0","0","0"]];
var upos=[["","","",""],["","","","",""],["","","",""],["","","",""],["","","","","","","",""],["","","","",""],["","",""],["","","","","",""],["","","","","",""],["","","","","","",""],["","","",""],["","","",""],["","","","","","",""],["","",""],["","","","","",""]];
var uCell=["","","","","","","","","","","","","","","","","","","",""];
var colCount=12;
var showE=true;
var typeD=1;var tiCor=true;
var colDef=0; col=1; row=1; inQue=0; colorError="#FF0000";
var wordsGame="MDhfREFNRVJP"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
