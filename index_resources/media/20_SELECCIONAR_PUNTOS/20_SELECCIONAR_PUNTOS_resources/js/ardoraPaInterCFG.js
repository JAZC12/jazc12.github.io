//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=150; timeIni=150; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=false;
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
var wordsGame="MjBfU0VMRUNDSU9OQVJfUFVOVE9T"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var points=[["197","193","0","0"],["169","143","0","0"],["87","190","0","0"],["126","306","0","0"],["132","337","0","0"],["177","279","0","0"],["144","218","0","0"],["289","68","1","1"],["332","93","1","1"],["320","142","1","1"],["278","111","1","1"],["286","108","1","1"],["436","103","2","2"],["491","101","2","2"],["459","217","2","2"],["434","189","2","2"],["446","148","2","2"],["388","164","3","3"],["390","188","3","3"],["417","187","3","3"],["419","171","3","3"],["404","168","3","3"],["312","356","4","4"],["313","388","4","4"],["368","384","4","4"],["361","356","4","4"],["349","372","4","4"],["341","359","4","4"],["341","359","4","4"],["361","114","5","5"],["393","104","5","5"],["393","137","5","5"],["369","144","5","5"],["364","123","5","5"]];
var backSrc="20_SELECCIONAR_PUNTOS_resources/media/2  act.jpg";
var Shape = function () {this.x=undefined;this.y=undefined;};
Shape.prototype={fill:function(context){context.save();context.fillStyle=this.fillStyle;this.createPath(context);context.fill();context.restore();},
stroke:function(context){context.save();this.createPath(context);context.stroke();context.restore();},
isPointInPath:function(context,x,y){this.createPath(context);return context.isPointInPath(x, y);},};
var Polygon=function(){this.points = [];this.numInd=0;};Polygon.prototype=new Shape();Polygon.prototype.addPoint=function(x,y){this.points.push(new Point(x,y));};
Polygon.prototype.createPath=function (context) {if (this.points.length === 0)return;context.beginPath();
context.moveTo(this.points[0].x,this.points[0].y);for (var i=0; i < this.points.length; ++i) {context.lineTo(this.points[i].x,this.points[i].y);}context.closePath();};
var Point=function(x,y){this.x=x;this.y=y;};var shapes=[];
var polygonPoints=[[new Point(197,193),new Point(169,143),new Point(87,190),new Point(126,306),new Point(132,337),new Point(177,279),new Point(144,218)],[new Point(289,68),new Point(332,93),new Point(320,142),new Point(278,111),new Point(286,108)],[new Point(436,103),new Point(491,101),new Point(459,217),new Point(434,189),new Point(446,148)],[new Point(388,164),new Point(390,188),new Point(417,187),new Point(419,171),new Point(404,168)],[new Point(312,356),new Point(313,388),new Point(368,384),new Point(361,356),new Point(349,372),new Point(341,359),new Point(341,359)],[new Point(361,114),new Point(393,104),new Point(393,137),new Point(369,144),new Point(364,123)]];
var game=[];indexGame=0;
var area=["0","1","2","3","4","5"];
var areaSolved=["N","N","N","N","N","N"];
var areaWord=["COLA","OREJA","MELENA","LENGUA","PATA","OJO"];
var areaHelp=["COLA","OREJA","MELENA","LENGUA","PATA","OJO"];
var areaWrong=["","","","","",""];
var initMessageError="FALLO";
var wordPointX=["197","289","436","388","312","361"];
var wordPointY=["193","68","103","164","356","114"];
var areaColor=["#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0"];
var pathMedia="20_SELECCIONAR_PUNTOS_resources/media/"
var auMP3=["","","","","",""];
var auOGG=["","","","","",""];
var colorWord="#000000";
