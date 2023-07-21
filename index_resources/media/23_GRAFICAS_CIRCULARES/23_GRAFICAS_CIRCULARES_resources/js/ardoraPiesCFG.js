//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
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
var uniVal=5;
var a=["MTA=","MzA=","NQ==","MTA=","NTU=","NQ=="];var b=["OCw3MA==","MjYsMDk=","NCwzNQ==","OCw3MA==","NDcsODM=","NCwzNQ=="];
var wordsGame="MjNfR1JBRklDQVNfQ0lSQ1VMQVJFUw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var canvas = document.getElementById("ardoraCanvasPie");var context = canvas.getContext("2d");
var radius=140;var arcs=[];
var arcCenterX=[150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150];var arcCenterY=[150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150];
var arcStrokeStyles=[colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText];var arcFillStyles=[colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack];
var arcIni=[0,0.273181969877373,0.546363939754747,0.81954590963212,1.09272787950949,1.36590984938687,1.63909181926424,1.91227378914161,2.18545575901899,2.45863772889636,2.73181969877373,3.00500166865111,3.27818363852848,3.55136560840585,3.82454757828323,4.0977295481606,4.37091151803797,4.64409348791535,4.91727545779272,5.19045742767009,5.46363939754747,5.73682136742484,6.01000333730221];var arcEnd=[0.273181969877373,0.546363939754747,0.81954590963212,1.09272787950949,1.36590984938687,1.63909181926424,1.91227378914161,2.18545575901899,2.45863772889636,2.73181969877373,3.00500166865111,3.27818363852848,3.55136560840585,3.82454757828323,4.0977295481606,4.37091151803797,4.64409348791535,4.91727545779272,5.19045742767009,5.46363939754747,5.73682136742484,6.01000333730221,6.28318530717959];
var indexColor=0;var colors=["#FFFF00","#3399FF","#FF9933","#78C85A","#97A5FF","#9BA533"];
