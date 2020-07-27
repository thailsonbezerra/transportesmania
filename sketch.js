//LINK DO VIDEO: https://youtu.be/qDIYmcjub6g

var tela = 0;
var contFrame = 0;
var contFrame1 = 0;
var contFrame2 = 0;
var contFrame3 = 0;
var contFrame4 = 0;
var contFrame5 = 0;
var contFrame6 = 0;

//VARIAVEIS MENU
var menuJogoX = 27;
var menuJogoY = 69.5;
var menuInfX = 5;
var menuInfY =  164;
var menuCredX = 22;
var menuCredY = 269.5;
var largura = 120;
var altura = 40;

//VARIAVEIS JOGO
var canhaoX = 275;
var canhaoY = 388;
var disparoX = 0;
var disparoY = 0;
var disparoEstado = false;
var rDisparo = 5;

var xAviao = 0;
var yAviao = 260;
velocidadeAviao = 3;
var rAviao= 15;

var xBalao= 100;
var yBalao=140;
velocidadeBalao= 3;
var rBalao = 15;

var xBarco = 200;
var yBarco = 90;
velocidadeBarco = 3;
var rBarco = 15;

var xNavio= 300;
var yNavio=180;
velocidadeNavio= 3;
var rNavio = 15;

var xCarro = 400;
var yCarro = 50;
velocidadeCarro = 3;
var rCarro = 15;

var xMoto= 500;
var yMoto=220;
velocidadeMoto= 3;
var rMoto = 15;

var contadorAcertos = 0;

var vida = 3;
var xVida = 0;
var yVida = 300
var velocidadeVida = 8;
var rVida = 15;

function preload() {
  
//SONS  
  
soundMenuBack = loadSound('menu-back.wav');
soundMenuSelect = loadSound('menu-select.wav');
soundMenuValidate = loadSound('menu-validate.wav');
soundCorrect = loadSound('correct.wav');
soundIncorrect = loadSound('incorrect.wav');
soundGameOver = loadSound('gameover.wav');
soundLifeUp = loadSound('lifeup.wav');
soundNextLevel = loadSound('nextlevel.wav');
soundWin = loadSound('win.mp3');
soundMenu = loadSound('menu.wav');
soundFase1 = loadSound('fase1.mp3');
soundFase2 = loadSound('fase2.mp3');
soundFase3 = loadSound('fase3.mp3');
soundFase4 = loadSound('fase4.wav');
soundFase5 = loadSound('fase5.wav');
soundFase6 = loadSound('fase6.wav');

//IMAGENS
  
imgCanhao = loadImage('canhao.png');
imgTela = loadImage('fundo.jpeg');
imgAviao = loadImage('aviao.png');
imgBalao = loadImage('balao.png');
imgHeart = loadImage('heart.png');
imgBarco = loadImage('barco.png');
imgNavio = loadImage('navio.png');
imgCarro = loadImage('carro.png');
imgMoto = loadImage('moto.png');
imgFundoMenu = loadImage('fundoMenu.jpg');
imgFundoF2 = loadImage('terrestre.jpg');
imgFundoF3 = loadImage('fundoFase2.jpg');
imgFundoF4 = loadImage('aquatico.jpg');
imgFundoF5 = loadImage('usoIndividual.jpg');
imgFundoF6 = loadImage('usoColetivo.jpg');
imgFundoWin = loadImage('nuvem.jpg');    
imgFundoGameOver = loadImage('fundoGameOver.jpg'); 
imgCadeado = loadImage('cadeado.png');
imgFundoInf = loadImage('fundoInformaçoes.jpg'); 
imgSeta = loadImage('seta.png');
imgBack = loadImage('back.png');
imgFundoCred = loadImage('fundoCreditos.jpg'); 
imgSeta = loadImage('seta.png');
imgBarb = loadImage('barbara.jpg');
imgTH = loadImage('Thailson.jpeg'); 
  
//FONTES
  
fontNome = loadFont('fonteNome.ttf');
jogoFont = loadFont('noJogo.ttf');
gameoverFont = loadFont('game_over.ttf');
fontWin = loadFont('Corrupted File.ttf');
fontStep = loadFont('Action Man.ttf');
  
}

function setup() {
  createCanvas(550, 400);
}

function draw() {

  if(tela == 0){
    menu(); 
  }
  
  if(tela == 0.1){
    menu2()
    keyTyped();
  }
  
  if(tela == 0.2){
    r2()
    keyTyped();
  }
  
  if(tela == 0.3){
    r3()
    keyTyped();
  }
  
  if(tela == 0.4){
   r4()
   keyTyped(); 
  }
  
  if(tela == 0.5){
   r5()
   keyTyped(); 
  }
  
  if(tela == 0.6){
    keyTyped();
    r6()
  }
  
  if(tela == 1){
    fase1();
    keyTyped();
  }
  
  if(tela == 1.2){
    fase2();
    keyTyped();
  }
  
  if(tela == 1.3){
    fase3();
    keyTyped();
  }
  
  if(tela == 1.4){
    fase4();
    keyTyped();
  }
  
  if(tela == 1.5){
    fase5();
    keyTyped();
  }
  
  if(tela == 1.6){
    fase6();
    keyTyped();
  }
  
  if(tela == 2){
   informacoes(); 
    keyTyped();
  }
  
  if(tela == 3){
   creditos(); 
    keyTyped();
  }
  if( tela == 4){
   gameover()
   keyTyped();
  }
  
  if(tela == 5){
    win()
  }
}
function menu(){
   
  image(imgFundoMenu,275,200,555,410);
  imageMode(CENTER)
  contFrame = contFrame + 1
  if(contFrame == 10){
      soundMenu.loop();
      soundMenu.setVolume(0.2);
  }

 stroke(20);
 fill(1000);
  //JOGAR
 if(mouseX > menuJogoX && mouseX < menuJogoX + largura && mouseY > menuJogoY && mouseY < menuJogoY + altura){
   rect(menuJogoX, menuJogoY, largura, altura,10);
   if(mouseIsPressed){
     soundMenuValidate.play();
     tela = 0.1;
   }
 }
  //INFORMAÇOES
  if(mouseX > menuInfX && mouseX < menuInfX + largura + 45 && mouseY > menuInfY && mouseY < menuInfY + altura){
   rect(menuInfX, menuInfY, largura + 45, altura,10);
   if(mouseIsPressed){
     soundMenuValidate.play();
     tela = 2;
   }
}
  //CREDITOS
  if(mouseX > menuCredX && mouseX < menuCredX + largura + 10 && mouseY > menuCredY && mouseY < menuCredY + altura){
   rect(menuCredX, menuCredY, largura +10, altura,10);
    if(mouseIsPressed){
      soundMenuValidate.play();
      tela = 3;
   }
  }
  noFill();
  noStroke();

   fill(10);  
   erase(150);
   strokeWeight(4);
   rect(0, 0, 180, 400);
   noErase();
 
  
   textSize(28);
   text('Jogar', 50, 100)
   text('Informações', 12, 195)   
   text('Créditos', 35, 300)
    
   textSize(56);
   fill(10);
    textFont(fontNome);
    textStyle(BOLD);
    text('TRANSPORTES', 195 ,190);
    text('MANIA', 310 ,247);
    fill(250);
    text('TRANSPORTES', 200 ,195);
    text('MANIA', 320 ,252);
    textStyle(NORMAL);
    textFont('Georgia');

  
  
}
function menu2(){
  
//variaveis resetadas
contFrame1 = 0;
canhaoX = 275;
canhaoY = 388;
xAviao = 0;
yAviao = 260;
xBalao= 100;
yBalao=140;
xBarco = 200;
yBarco = 90;
xNavio= 300;
yNavio=180;
xCarro = 400;
yCarro = 50;
xMoto= 500;
yMoto=220;
contadorAcertos = 0;
disparoEstado = false;
vida = 3;
disparoX = 0;
disparoY = 0;

  image(imgFundoInf,275,200,555,410);
  imageMode(CENTER)
 
    
  fill(10);  
   erase(200);
   strokeWeight(10);
   rect(10, 50, 530, 340);
   noErase();
  
  textStyle(BOLD)
  textSize(26);
  text('Orientações', 200,30)
  
  
  textSize(14);
  text('Transportes Terrestres', 20, 70);
  text('Transportes Aquaticos', 205, 70);
  text('Transportes Aéreos', 390, 70);
  
    image(imgCarro,40,85, 45, 45);
    image(imgMoto,90,85, 45, 45);

    image(imgBarco,320,85, 40, 40);
    image(imgNavio,250,85, 40, 40);
  
    image(imgBalao,500,85, 40, 40);
    image(imgAviao,450,85, 45, 45);
  
  textSize(20);
  text('Como jogar?', 200, 130);
  textSize(14);
  text('Utilize o teclado para guiar o canhão a seta "<-" - Move para a Esquerda \ne a seta "->" - Move para a direita. A "barra de espaço" atira.', 20,150)
  
  textSize(20);
  text('Objetivo', 220, 200);
  textSize(14);
  text('Haverá um objetivo em cada fase, o objetivo estará informado no centro \nsuperior da tela sinalizado em vermelho.Então você tem que controlar o\ncanhão, assim acertando o transporte correto que estará em movimento.\nMas não é tão fácil quanto parece! Você inicia com 3 vidas, se errar o\ntransporte você perde uma vida, se chegar a zero você perde.', 20,220)
  
  textSize(20);
  text('Canhao:', 20, 370);
      image(imgCanhao,140,360, 45, 45);
  
  textSize(18);
  text('Aperte "ESC" para voltar ao MENU', 190, 330);
  text('Aperte "ENTER" para iniciar', 220, 370);
  
  if(keyIsDown(ENTER)){
     soundMenuValidate.play();
     tela = 1;
    }
}
function fase1(){
  
soundMenu.stop();
    
    image(imgTela,275,200, 550,400);
  
  contFrame1 = contFrame1 + 1;
  
  if(contFrame1 == 10){
    soundFase1.loop(); 
    soundFase1.setVolume(0.3);
  }
  
  image(imgHeart, 15 ,20, 25, 25);
  
  //canhao e tiro
  //ellipse(canhaoX, canhaoY,25,25);
  imageMode(CENTER);
  image(imgCanhao, canhaoX, canhaoY,45,45);

  if(keyIsDown(LEFT_ARROW)){
    canhaoX = canhaoX - 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    canhaoX = canhaoX + 3;
  }
  
  if(canhaoX < 0){
    canhaoX = 0;
  }
  if(canhaoX > 550){
    canhaoX = 550;
  }
  
  if(keyIsDown(32) && disparoEstado == false){
    disparoX = canhaoX-7;
    disparoY = canhaoY-15;
    disparoEstado = true;
  }
  if(disparoEstado == true){
  ellipse(disparoX, disparoY, 10, 10);
  disparoY = disparoY - 13;
    if(disparoY < 0){
      disparoEstado = false;
    }
  }
  
  //veiculos
  
  //aviao;
  //ellipse(xAviao,yAviao,20,20);
    image(imgAviao, xAviao ,yAviao ,40,40);
 xAviao = xAviao + velocidadeAviao;
  if(xAviao > 550){
    velocidadeAviao = - 3;
  }
  if(xAviao < 0){
   velocidadeAviao = +3;
  }
  
  
    //balao;
 //ellipse(xBalao,yBalao,20,20);
    image(imgBalao, xBalao,yBalao,40,40);
 xBalao= xBalao+ velocidadeBalao;
  if(xBalao> 550){
    velocidadeBalao= - 3;
  }
  if(xBalao< 0){
   velocidadeBalao= +3;
  }
  
  
  
  //Barco;
  //ellipse(xBarco,yBarco,20,20);
    image(imgBarco, xBarco ,yBarco ,40,40);
 xBarco = xBarco + velocidadeBarco;
  if(xBarco > 550){
    velocidadeBarco = - 3;
  }
  if(xBarco < 0){
   velocidadeBarco = +3;
  }
  
  
  //Navio;
  //ellipse(xNavio,yNavio,20,20);
    image(imgNavio, xNavio ,yNavio ,40,40);
 xNavio = xNavio + velocidadeNavio;
  if(xNavio > 550){
    velocidadeNavio = - 3;
  }
  if(xNavio < 0){
   velocidadeNavio = +3;
  }
  
  
  //Moto;
  //ellipse(xMoto,yMoto,20,20);
    image(imgMoto, xMoto ,yMoto ,40,40);
 xMoto = xMoto + velocidadeMoto;
  if(xMoto > 550){
    velocidadeMoto = - 3;
  }
  if(xMoto < 0){
   velocidadeMoto = +3;
  }
  
  
  //Carro;
  //ellipse(xCarro,yCarro,20,20);
    image(imgCarro, xCarro ,yCarro ,40,40);
 xCarro = xCarro + velocidadeCarro;
  if(xCarro > 550){
    velocidadeCarro = - 3;
  }
  if(xCarro < 0){
   velocidadeCarro = +3;
  }
  
  //Vida
  
  //ellipse(xVida,yVida,20,20);
  image(imgHeart, xVida ,yVida,40,40);
 xVida = xVida + velocidadeVida;
  if(xVida > 550){
    xVida = -random(2000);
  }

  
  //COLISAO
  
  if(dist(xBalao, yBalao, disparoX, disparoY) < rDisparo + rBalao){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1;
    xBalao = 1000;
    yBalao = 1000;
  }
  
    if(dist(xAviao, yAviao, disparoX, disparoY) < rDisparo + rAviao){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1  
    xAviao = 1000;
    yAviao = 1000;
  }
  
   if(dist(xMoto, yMoto, disparoX, disparoY) < rDisparo + rMoto){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1  
    xMoto = 1000;
    yMoto = 1000;
   }
  
  if(dist(xCarro, yCarro, disparoX, disparoY) < rDisparo + rCarro){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1  
    xCarro = 1000;
    yCarro = 1000;
  }
  
  if(dist(xNavio, yNavio, disparoX, disparoY) < rDisparo + rNavio){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1  
    xNavio = 1000;
    yNavio = 1000;
  }
  
  if(dist(xBarco, yBarco, disparoX, disparoY) < rDisparo + rBarco){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1  
    xBarco = 1000;
    yBarco = 1000;
  }
  
    if(dist(xVida, yVida, disparoX, disparoY) < rDisparo + rVida){
    soundLifeUp.play();
    vida = vida + 1
    xVida = 1000;
    yVida = 1000;
  }
  
  if(contadorAcertos == 6){
      soundNextLevel.play();
      tela = 0.2;
  }
  
  if(vida === 0){
      soundGameOver.play();
      tela = 4;
  }
  
fill('#E56B6F');
  rect(123, 8.5, 300, 22, 5);
  
  
  //TEXTOS 
fill(0);
textSize(22);
textFont(jogoFont);
text('ACERTE TODOS OS TRANSPORTES',135,27);
text(': ' + vida,35,27);
text('Nivel : 1',472,27);
textFont('Helvetica');
  
  contFrame = 0;
}
function fase2(){
  
soundNextLevel.stop();
  imageMode(CENTER);
  image(imgFundoF2,275,200, 550,400);
  
  contFrame2 = contFrame2+1;
  
  if(contFrame2 == 10){
    soundFase2.loop();
    soundFase2.setVolume(0.3);
    
  }
  
  image(imgHeart, 15 ,20, 25, 25);

    image(imgCanhao, canhaoX, canhaoY,45,45);

  if(keyIsDown(LEFT_ARROW)){
    canhaoX = canhaoX - 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    canhaoX = canhaoX + 3;
  }
  
  if(canhaoX < 0){
    canhaoX = 0;
  }
  if(canhaoX > 550){
    canhaoX = 550;
  }
  
  if(keyIsDown(32) && disparoEstado == false){
    disparoX = canhaoX-7;
    disparoY = canhaoY-15;
    disparoEstado = true;
  }
  if(disparoEstado == true){
  ellipse(disparoX, disparoY, 10, 10);
  disparoY = disparoY - 13;
    if(disparoY < 0){
      disparoEstado = false;
    }
  }
  
  //veiculos
  
  //aviao;
  //ellipse(xAviao,yAviao,20,20);
    image(imgAviao, xAviao ,yAviao ,40,40);
 xAviao = xAviao + velocidadeAviao;
  if(xAviao > 550){
    velocidadeAviao = - 3;
  }
  if(xAviao < 0){
   velocidadeAviao = +3;
  }
  
  
    //balao;
 //ellipse(xBalao,yBalao,20,20);
    image(imgBalao, xBalao,yBalao,40,40);
 xBalao= xBalao+ velocidadeBalao;
  if(xBalao> 550){
    velocidadeBalao= - 3;
  }
  if(xBalao< 0){
   velocidadeBalao= +3;
  }
  
  
  
  //Barco;
  //ellipse(xBarco,yBarco,20,20);
    image(imgBarco, xBarco ,yBarco ,40,40);
 xBarco = xBarco + velocidadeBarco;
  if(xBarco > 550){
    velocidadeBarco = - 3;
  }
  if(xBarco < 0){
   velocidadeBarco = +3;
  }
  
  
  //Navio;
  //ellipse(xNavio,yNavio,20,20);
    image(imgNavio, xNavio ,yNavio ,40,40);
 xNavio = xNavio + velocidadeNavio;
  if(xNavio > 550){
    velocidadeNavio = - 3;
  }
  if(xNavio < 0){
   velocidadeNavio = +3;
  }
  
  
  //Moto;
  //ellipse(xMoto,yMoto,20,20);
    image(imgMoto, xMoto ,yMoto ,40,40);
 xMoto = xMoto + velocidadeMoto;
  if(xMoto > 550){
    velocidadeMoto = - 3;
  }
  if(xMoto < 0){
   velocidadeMoto = +3;
  }
  
  
  //Carro;
  //ellipse(xCarro,yCarro,20,20);
    image(imgCarro, xCarro ,yCarro ,40,40);
 xCarro = xCarro + velocidadeCarro;
  if(xCarro > 550){
    velocidadeCarro = - 3;
  }
  if(xCarro < 0){
   velocidadeCarro = +3;
  }
  
  //Vida
  
  //ellipse(xVida,yVida,20,20);
  image(imgHeart, xVida ,yVida,40,40);
 xVida = xVida + velocidadeVida;
  if(xVida > 550){
    xVida = -random(2000);
  }

  
  //COLISAO
  
  if(dist(xBalao, yBalao, disparoX, disparoY) < rDisparo + rBalao){
    soundIncorrect.play();
    vida = vida - 1
    xBalao = 1000;
    yBalao = 1000;
  }
  
    if(dist(xAviao, yAviao, disparoX, disparoY) < rDisparo + rAviao){
    soundIncorrect.play();
    vida = vida - 1
    xAviao = 1000;
    yAviao = 1000;
  }
  
   if(dist(xMoto, yMoto, disparoX, disparoY) < rDisparo + rMoto){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1  
    xMoto = 1000;
    yMoto = 1000;
   }
  
  if(dist(xCarro, yCarro, disparoX, disparoY) < rDisparo + rCarro){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1  
    xCarro = 1000;
    yCarro = 1000;
  }
  
  if(dist(xNavio, yNavio, disparoX, disparoY) < rDisparo + rNavio){
    soundIncorrect.play();
    vida = vida - 1
    xNavio = 1000;
    yNavio = 1000;
  }
  
  if(dist(xBarco, yBarco, disparoX, disparoY) < rDisparo + rBarco){
    soundIncorrect.play();
    vida = vida - 1
    xBarco = 1000;
    yBarco = 1000;
  }
  
    if(dist(xVida, yVida, disparoX, disparoY) < rDisparo + rVida){
    soundLifeUp.play();
    vida = vida + 1
    xVida = 1000;
    yVida = 1000;
  }
  
  if(contadorAcertos == 2){
      soundNextLevel.play();
      tela = 0.3;
  }
  
  if(vida === 0){
    soundGameOver.play();  
    tela = 4;
  }
  
fill('#E56B6F');
  rect(90, 8.5, 350, 22, 5);
  
  
  //TEXTOS 
fill(0);
textSize(22);
textFont(jogoFont);
text('ACERTE OS TRANSPORTES TERRESTRES',100,27);
text(': ' + vida,35,27);
text('Nivel : 2',472,27);
textFont('Helvetica');

  
}
function fase3(){
  
soundNextLevel.stop();
  image(imgFundoF3,275,200,550,415);
  image(imgHeart, 15 ,20, 25, 25);
  
  contFrame3 = contFrame3 +1
  if(contFrame3 == 10){
    soundFase3.loop();
    soundFase3.setVolume(0.3);
    
  }
 
  
  //canhao e tiro
  //ellipse(canhaoX, canhaoY,25,25);
  imageMode(CENTER);
  image(imgCanhao, canhaoX, canhaoY,45,45);

  if(keyIsDown(LEFT_ARROW)){
    canhaoX = canhaoX - 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    canhaoX = canhaoX + 3;
  }
  
  if(canhaoX < 0){
    canhaoX = 0;
  }
  if(canhaoX > 550){
    canhaoX = 550;
  }
  
  if(keyIsDown(32) && disparoEstado == false){
    disparoX = canhaoX-7;
    disparoY = canhaoY-15;
    disparoEstado = true;
  }
  if(disparoEstado == true){
  ellipse(disparoX, disparoY, 10, 10);
  disparoY = disparoY - 13;
    if(disparoY < 0){
      disparoEstado = false;
    }
  }
  
  //veiculos
  
  //aviao;
  //ellipse(xAviao,yAviao,20,20);
    image(imgAviao, xAviao ,yAviao ,40,40);
 xAviao = xAviao + velocidadeAviao;
  if(xAviao > 550){
    velocidadeAviao = - 3;
  }
  if(xAviao < 0){
   velocidadeAviao = +3;
  }
  
  
    //balao;
 //ellipse(xBalao,yBalao,20,20);
    image(imgBalao, xBalao,yBalao,40,40);
 xBalao= xBalao+ velocidadeBalao;
  if(xBalao> 550){
    velocidadeBalao= - 3;
  }
  if(xBalao< 0){
   velocidadeBalao= +3;
  }
  
  
  
  //Barco;
  //ellipse(xBarco,yBarco,20,20);
    image(imgBarco, xBarco ,yBarco ,40,40);
 xBarco = xBarco + velocidadeBarco;
  if(xBarco > 550){
    velocidadeBarco = - 3;
  }
  if(xBarco < 0){
   velocidadeBarco = +3;
  }
  
  
  //Navio;
  //ellipse(xNavio,yNavio,20,20);
    image(imgNavio, xNavio ,yNavio ,40,40);
 xNavio = xNavio + velocidadeNavio;
  if(xNavio > 550){
    velocidadeNavio = - 3;
  }
  if(xNavio < 0){
   velocidadeNavio = +3;
  }
  
  
  //Moto;
  //ellipse(xMoto,yMoto,20,20);
    image(imgMoto, xMoto ,yMoto ,40,40);
 xMoto = xMoto + velocidadeMoto;
  if(xMoto > 550){
    velocidadeMoto = - 3;
  }
  if(xMoto < 0){
   velocidadeMoto = +3;
  }
  
  
  //Carro;
  //ellipse(xCarro,yCarro,20,20);
    image(imgCarro, xCarro ,yCarro ,40,40);
 xCarro = xCarro + velocidadeCarro;
  if(xCarro > 550){
    velocidadeCarro = - 3;
  }
  if(xCarro < 0){
   velocidadeCarro = +3;
  }
  
  //Vida
  
  //ellipse(xVida,yVida,20,20);
  image(imgHeart, xVida ,yVida,40,40);
 xVida = xVida + velocidadeVida;
  if(xVida > 550){
    xVida = -random(2000);
  }

  
  //COLISAO
  
  if(dist(xBalao, yBalao, disparoX, disparoY) < rDisparo + rBalao){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1;
    xBalao = 1000;
    yBalao = 1000;
  }
  
    if(dist(xAviao, yAviao, disparoX, disparoY) < rDisparo + rAviao){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1; 
    xAviao = 1000;
    yAviao = 1000;
  }
  
   if(dist(xMoto, yMoto, disparoX, disparoY) < rDisparo + rMoto){
    soundIncorrect.play();
    vida = vida - 1;
    xMoto = 1000;
    yMoto = 1000;
   }
  
  if(dist(xCarro, yCarro, disparoX, disparoY) < rDisparo + rCarro){
    soundIncorrect.play();
    vida = vida - 1;
    xCarro = 1000;
    yCarro = 1000;
  }
  
  if(dist(xNavio, yNavio, disparoX, disparoY) < rDisparo + rNavio){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1;  
    xNavio = 1000;
    yNavio = 1000;
  }
  
  if(dist(xBarco, yBarco, disparoX, disparoY) < rDisparo + rBarco){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1;  
    xBarco = 1000;
    yBarco = 1000;
  }
  
    if(dist(xVida, yVida, disparoX, disparoY) < rDisparo + rVida){
    soundLifeUp.play();
    vida = vida + 1
    xVida = 1000;
    yVida = 1000;
  }
  
  if(contadorAcertos == 4){
      soundNextLevel.play();
      tela = 0.4;
  }
  
  if(vida === 0){
    soundGameOver.play();  
      tela = 4;
  }
  

  fill('#E56B6F');
  rect(63, 10, 400, 22, 5);
  
  
  //TEXTOS 
fill(0);
textFont(jogoFont);
  textSize(18);
text('ACERTE OS MEIOS DE TRANSPORTES AQUÁTICOS E AÉREOS',65,27);
  textSize(22);
text(': ' + vida,35,27);
text('Nivel : 3',472,27);
textFont('Helvetica');
  
}
function fase4(){
  
soundNextLevel.stop();
  image(imgFundoF4,275,200, 550,400);
  
  contFrame4 = contFrame4 + 1
  if(contFrame4 == 10){
      soundFase4.loop();
      soundFase4.setVolume(0.3);
  }
  
  image(imgHeart, 15 ,20, 25, 25);
  
  //canhao e tiro
  //ellipse(canhaoX, canhaoY,25,25);
  imageMode(CENTER);
  image(imgCanhao, canhaoX, canhaoY,45,45);

  if(keyIsDown(LEFT_ARROW)){
    canhaoX = canhaoX - 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    canhaoX = canhaoX + 3;
  }
  
  if(canhaoX < 0){
    canhaoX = 0;
  }
  if(canhaoX > 550){
    canhaoX = 550;
  }
  
  if(keyIsDown(32) && disparoEstado == false){
    disparoX = canhaoX-7;
    disparoY = canhaoY-15;
    disparoEstado = true;
  }
  if(disparoEstado == true){
  ellipse(disparoX, disparoY, 10, 10);
  disparoY = disparoY - 13;
    if(disparoY < 0){
      disparoEstado = false;
    }
  }
  
  //veiculos
  
  //aviao;
  //ellipse(xAviao,yAviao,20,20);
    image(imgAviao, xAviao ,yAviao ,40,40);
 xAviao = xAviao + velocidadeAviao;
  if(xAviao > 550){
    velocidadeAviao = - 3;
  }
  if(xAviao < 0){
   velocidadeAviao = +3;
  }
  
  
    //balao;
 //ellipse(xBalao,yBalao,20,20);
    image(imgBalao, xBalao,yBalao,40,40);
 xBalao= xBalao+ velocidadeBalao;
  if(xBalao> 550){
    velocidadeBalao= - 3;
  }
  if(xBalao< 0){
   velocidadeBalao= +3;
  }
  
  
  
  //Barco;
  //ellipse(xBarco,yBarco,20,20);
    image(imgBarco, xBarco ,yBarco ,40,40);
 xBarco = xBarco + velocidadeBarco;
  if(xBarco > 550){
    velocidadeBarco = - 3;
  }
  if(xBarco < 0){
   velocidadeBarco = +3;
  }
  
  
  //Navio;
  //ellipse(xNavio,yNavio,20,20);
    image(imgNavio, xNavio ,yNavio ,40,40);
 xNavio = xNavio + velocidadeNavio;
  if(xNavio > 550){
    velocidadeNavio = - 3;
  }
  if(xNavio < 0){
   velocidadeNavio = +3;
  }
  
  
  //Moto;
  //ellipse(xMoto,yMoto,20,20);
    image(imgMoto, xMoto ,yMoto ,40,40);
 xMoto = xMoto + velocidadeMoto;
  if(xMoto > 550){
    velocidadeMoto = - 3;
  }
  if(xMoto < 0){
   velocidadeMoto = +3;
  }
  
  
  //Carro;
  //ellipse(xCarro,yCarro,20,20);
    image(imgCarro, xCarro ,yCarro ,40,40);
 xCarro = xCarro + velocidadeCarro;
  if(xCarro > 550){
    velocidadeCarro = - 3;
  }
  if(xCarro < 0){
   velocidadeCarro = +3;
  }
  
  //Vida
  
  //ellipse(xVida,yVida,20,20);
  image(imgHeart, xVida ,yVida,40,40);
 xVida = xVida + velocidadeVida;
  if(xVida > 550){
    xVida = -random(2000);
  }

  
  //COLISAO
  
  if(dist(xBalao, yBalao, disparoX, disparoY) < rDisparo + rBalao){
    soundIncorrect.play();
    vida = vida - 1  
    xBalao = 1000;
    yBalao = 1000;
  }
  
    if(dist(xAviao, yAviao, disparoX, disparoY) < rDisparo + rAviao){
    soundIncorrect.play();
    vida = vida - 1  
    xAviao = 1000;
    yAviao = 1000;
  }
  
   if(dist(xMoto, yMoto, disparoX, disparoY) < rDisparo + rMoto){
    soundIncorrect.play();
    vida = vida - 1  
    xMoto = 1000;
    yMoto = 1000;
   }
  
  if(dist(xCarro, yCarro, disparoX, disparoY) < rDisparo + rCarro){
    soundIncorrect.play();
    vida = vida - 1  
    xCarro = 1000;
    yCarro = 1000;
  }
  
  if(dist(xNavio, yNavio, disparoX, disparoY) < rDisparo + rNavio){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1  
    xNavio = 1000;
    yNavio = 1000;
  }
  
  if(dist(xBarco, yBarco, disparoX, disparoY) < rDisparo + rBarco){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1  
    xBarco = 1000;
    yBarco = 1000;
  }
  
    if(dist(xVida, yVida, disparoX, disparoY) < rDisparo + rVida){
    soundLifeUp.play();
    vida = vida + 1
    xVida = 1000;
    yVida = 1000;
  }
  
  if(contadorAcertos == 2){
      soundNextLevel.play();
      tela = 0.5;
  }
  
  if(vida === 0){
    soundGameOver.play();  
      tela = 4;
  }
  
fill('#E56B6F');
  rect(100, 8.5, 328, 22, 5);
  
  
  //TEXTOS 
fill(0);
textSize(22);
textFont(jogoFont);
text('ACERTE OS TRANSPORTES AQUATICOS',105,27);
text(': ' + vida,35,27);
text('Nivel : 4',472,27);
textFont('Helvetica');

}
function fase5(){

soundNextLevel.stop();
  image(imgFundoF5,275,200,550,415);
  
  contFrame5 = contFrame5 + 1
  if(contFrame5 == 10){
      soundFase5.loop();
      soundFase5.setVolume(0.3);

  }
  
  image(imgHeart, 15 ,20, 25, 25);
 
  
  //canhao e tiro
  //ellipse(canhaoX, canhaoY,25,25);
  imageMode(CENTER);
  image(imgCanhao, canhaoX, canhaoY,45,45);

  if(keyIsDown(LEFT_ARROW)){
    canhaoX = canhaoX - 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    canhaoX = canhaoX + 3;
  }
  
  if(canhaoX < 0){
    canhaoX = 0;
  }
  if(canhaoX > 550){
    canhaoX = 550;
  }
  
  if(keyIsDown(32) && disparoEstado == false){
    disparoX = canhaoX-7;
    disparoY = canhaoY-15;
    disparoEstado = true;
  }
  if(disparoEstado == true){
  ellipse(disparoX, disparoY, 10, 10);
  disparoY = disparoY - 13;
    if(disparoY < 0){
      disparoEstado = false;
    }
  }
  
  //veiculos
  
  //aviao;
  //ellipse(xAviao,yAviao,20,20);
    image(imgAviao, xAviao ,yAviao ,40,40);
 xAviao = xAviao + velocidadeAviao;
  if(xAviao > 550){
    velocidadeAviao = - 3;
  }
  if(xAviao < 0){
   velocidadeAviao = +3;
  }
  
  
    //balao;
 //ellipse(xBalao,yBalao,20,20);
    image(imgBalao, xBalao,yBalao,40,40);
 xBalao= xBalao+ velocidadeBalao;
  if(xBalao> 550){
    velocidadeBalao= - 3;
  }
  if(xBalao< 0){
   velocidadeBalao= +3;
  }
  
  
  
  //Barco;
  //ellipse(xBarco,yBarco,20,20);
    image(imgBarco, xBarco ,yBarco ,40,40);
 xBarco = xBarco + velocidadeBarco;
  if(xBarco > 550){
    velocidadeBarco = - 3;
  }
  if(xBarco < 0){
   velocidadeBarco = +3;
  }
  
  
  //Navio;
  //ellipse(xNavio,yNavio,20,20);
    image(imgNavio, xNavio ,yNavio ,40,40);
 xNavio = xNavio + velocidadeNavio;
  if(xNavio > 550){
    velocidadeNavio = - 3;
  }
  if(xNavio < 0){
   velocidadeNavio = +3;
  }
  
  
  //Moto;
  //ellipse(xMoto,yMoto,20,20);
    image(imgMoto, xMoto ,yMoto ,40,40);
 xMoto = xMoto + velocidadeMoto;
  if(xMoto > 550){
    velocidadeMoto = - 3;
  }
  if(xMoto < 0){
   velocidadeMoto = +3;
  }
  
  
  //Carro;
  //ellipse(xCarro,yCarro,20,20);
    image(imgCarro, xCarro ,yCarro ,40,40);
 xCarro = xCarro + velocidadeCarro;
  if(xCarro > 550){
    velocidadeCarro = - 3;
  }
  if(xCarro < 0){
   velocidadeCarro = +3;
  }
  
  //Vida
  
  //ellipse(xVida,yVida,20,20);
  image(imgHeart, xVida ,yVida,40,40);
 xVida = xVida + velocidadeVida;
  if(xVida > 550){
    xVida = -random(2000);
  }

  
  //COLISAO
  
  if(dist(xBalao, yBalao, disparoX, disparoY) < rDisparo + rBalao){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1;
    xBalao = 1000;
    yBalao = 1000;
  }
  
    if(dist(xAviao, yAviao, disparoX, disparoY) < rDisparo + rAviao){
    soundIncorrect.play();
    vida = vida - 1
    xAviao = 1000;
    yAviao = 1000;
  }
  
   if(dist(xMoto, yMoto, disparoX, disparoY) < rDisparo + rMoto){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1  
    xMoto = 1000;
    yMoto = 1000;
   }
  
  if(dist(xCarro, yCarro, disparoX, disparoY) < rDisparo + rCarro){
    soundIncorrect.play();
    vida = vida - 1
    xCarro = 1000;
    yCarro = 1000;
  }
  
  if(dist(xNavio, yNavio, disparoX, disparoY) < rDisparo + rNavio){
    soundIncorrect.play();
    vida = vida - 1
    xNavio = 1000;
    yNavio = 1000;
  }
  
  if(dist(xBarco, yBarco, disparoX, disparoY) < rDisparo + rBarco){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1  
    xBarco = 1000;
    yBarco = 1000;
  }
  
    if(dist(xVida, yVida, disparoX, disparoY) < rDisparo + rVida){
    soundLifeUp.play();
    vida = vida + 1
    xVida = 1000;
    yVida = 1000;
  }
  
  if(contadorAcertos == 3){
      soundNextLevel.play();
      tela = 0.6;
  }
  
  if(vida === 0){
    soundGameOver.play();  
      tela = 4;
  }
  

  fill('#E56B6F');
  rect(68, 10, 393, 22, 5);
  
  
  //TEXTOS 
fill(0);
textFont(jogoFont);
  textSize(18);
text('ACERTE OS MEIOS DE TRANSPORTES DE USO INDIVIDUAL',75,27);
  textSize(22);
text(': ' + vida,35,27);
text('Nivel : 5',472,27);
textFont('Helvetica');
  
}
function fase6(){

soundNextLevel.stop();
image(imgFundoF6,275,200,550,415);
  
  contFrame6 = contFrame6 + 1
  if(contFrame6 == 10){
      soundFase6.loop();
      soundFase6.setVolume(0.3);
  }
  
  image(imgHeart, 15 ,20, 25, 25);
 
  
  //canhao e tiro
  //ellipse(canhaoX, canhaoY,25,25);
  imageMode(CENTER);
  image(imgCanhao, canhaoX, canhaoY,45,45);

  if(keyIsDown(LEFT_ARROW)){
    canhaoX = canhaoX - 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    canhaoX = canhaoX + 3;
  }
  
  if(canhaoX < 0){
    canhaoX = 0;
  }
  if(canhaoX > 550){
    canhaoX = 550;
  }
  
  if(keyIsDown(32) && disparoEstado == false){
    disparoX = canhaoX-7;
    disparoY = canhaoY-15;
    disparoEstado = true;
  }
  if(disparoEstado == true){
  ellipse(disparoX, disparoY, 10, 10);
  disparoY = disparoY - 13;
    if(disparoY < 0){
      disparoEstado = false;
    }
  }
  
  //veiculos
  
  //aviao;
  //ellipse(xAviao,yAviao,20,20);
    image(imgAviao, xAviao ,yAviao ,40,40);
 xAviao = xAviao + velocidadeAviao;
  if(xAviao > 550){
    velocidadeAviao = - 3;
  }
  if(xAviao < 0){
   velocidadeAviao = +3;
  }
  
  
    //balao;
 //ellipse(xBalao,yBalao,20,20);
    image(imgBalao, xBalao,yBalao,40,40);
 xBalao= xBalao+ velocidadeBalao;
  if(xBalao> 550){
    velocidadeBalao= - 3;
  }
  if(xBalao< 0){
   velocidadeBalao= +3;
  }
  
  
  
  //Barco;
  //ellipse(xBarco,yBarco,20,20);
    image(imgBarco, xBarco ,yBarco ,40,40);
 xBarco = xBarco + velocidadeBarco;
  if(xBarco > 550){
    velocidadeBarco = - 3;
  }
  if(xBarco < 0){
   velocidadeBarco = +3;
  }
  
  
  //Navio;
  //ellipse(xNavio,yNavio,20,20);
    image(imgNavio, xNavio ,yNavio ,40,40);
 xNavio = xNavio + velocidadeNavio;
  if(xNavio > 550){
    velocidadeNavio = - 3;
  }
  if(xNavio < 0){
   velocidadeNavio = +3;
  }
  
  
  //Moto;
  //ellipse(xMoto,yMoto,20,20);
    image(imgMoto, xMoto ,yMoto ,40,40);
 xMoto = xMoto + velocidadeMoto;
  if(xMoto > 550){
    velocidadeMoto = - 3;
  }
  if(xMoto < 0){
   velocidadeMoto = +3;
  }
  
  
  //Carro;
  //ellipse(xCarro,yCarro,20,20);
    image(imgCarro, xCarro ,yCarro ,40,40);
 xCarro = xCarro + velocidadeCarro;
  if(xCarro > 550){
    velocidadeCarro = - 3;
  }
  if(xCarro < 0){
   velocidadeCarro = +3;
  }
  
  //Vida
  
  //ellipse(xVida,yVida,20,20);
  image(imgHeart, xVida ,yVida,40,40);
 xVida = xVida + velocidadeVida;
  if(xVida > 550){
    xVida = -random(2000);
  }

  
  //COLISAO
  
  if(dist(xBalao, yBalao, disparoX, disparoY) < rDisparo + rBalao){
    soundIncorrect.play();
    vida = vida - 1;
    xBalao = 1000;
    yBalao = 1000;
  }
  
    if(dist(xAviao, yAviao, disparoX, disparoY) < rDisparo + rAviao){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1  
    xAviao = 1000;
    yAviao = 1000;
  }
  
   if(dist(xMoto, yMoto, disparoX, disparoY) < rDisparo + rMoto){
    soundIncorrect.play();
    vida = vida - 1
    xMoto = 1000;
    yMoto = 1000;
   }
  
  if(dist(xCarro, yCarro, disparoX, disparoY) < rDisparo + rCarro){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1  
    xCarro = 1000;
    yCarro = 1000;
  }
  
  if(dist(xNavio, yNavio, disparoX, disparoY) < rDisparo + rNavio){
    soundCorrect.play();
    contadorAcertos = contadorAcertos + 1  
    xNavio = 1000;
    yNavio = 1000;
  }
  
  if(dist(xBarco, yBarco, disparoX, disparoY) < rDisparo + rBarco){
    soundIncorrect.play();
    vida = vida - 1  
    xBarco = 1000;
    yBarco = 1000;
  }
  
    if(dist(xVida, yVida, disparoX, disparoY) < rDisparo + rVida){
    soundLifeUp.play();
    vida = vida + 1
    xVida = 1000;
    yVida = 1000;
  }
  
  if(contadorAcertos == 3){
      soundWin.play();
      tela = 5;
  }
  
  if(vida === 0){
    soundGameOver.play();  
      tela = 4;
  }
  

  fill('#E56B6F');
  rect(68, 10, 388, 22, 5);
  
  
  //TEXTOS 
fill(0);
textFont(jogoFont);
  textSize(18);
text('ACERTE OS MEIOS DE TRANSPORTES DE USO COLETIVO',78,27);
  textSize(22);
text(': ' + vida,35,27);
text('Nivel : 6',472,27);
textFont('Helvetica');
  
}
function gameover(){
  
  soundFase2.stop();
  soundFase3.stop();
  soundFase4.stop();
  soundFase5.stop();
  soundFase6.stop();
  
//resetar

contFrame1 = 0;
contFrame2 = 0;
contFrame3 = 0;
contFrame4 = 0;
contFrame5 = 0;
contFrame6 = 0;
  
  background(10);
  
  image(imgFundoGameOver,0,0,555,410);

  soundCorrect.stop();
  soundIncorrect.stop();
  
if(mouseX > 20 && mouseX < 20 + 110 && mouseY > 365 && mouseY <365 + 30){
  rect(20, 365, 110, 30,10);
  if(mouseIsPressed){
    soundMenuBack.play();
    tela = 0;
  }
}
  imageMode(CENTER);
  textSize(16);
  fill('RED')
  textStyle(BOLD);
  textFont('Georgia')
  text('VOLTAR',30,385);
  image(imgBack,110,380, 15,15);
  imageMode(CORNER);

  fill('BLACK');
  textFont(gameoverFont);
  textSize(80);
  text('Voce caiu do barco e se afogou', 50,160);
  textSize(150);
  text('GAMER OVER', 80, 220);
  textSize(80);
  text('Tente outra vez. Voce consegue!',45,260);
  
}
function win(){
  
soundFase6.stop();
soundCorrect.stop();
soundIncorrect.stop();
  
background(10);
  
image(imgFundoWin,275,200,555,410);
imageMode(CENTER);
  
textFont(fontWin);
textSize(100);
fill('BLACK');
text('YOU WIN', 35, 200);
  
if(keyIsDown(ENTER)){
  soundMenuValidate.play();
  tela = 3;
}
  fill(10);
  erase(200);
  strokeWeight(4);
  rect(15, 270, 515, 80,10);
  noErase();
  textFont('Georgia'); 
  textSize(18); 
  text('Parabéns você passou por todas as fases, obrigado por jogar \nTRANSPORTES MANIA. Espero que tenha aprendido bastante \ncom o nosso jogo!', 28, 295);
  text('Aperte "ENTER" para ir aos créditos.', 28, 380);
  textFont(jogoFont);
textSize(30);
text('PARABÉNS, VOCÊ CHEGOU AO CÉU!', 90, 70);
textSize(24);
text('AGORA VOCÊ ESTÁ JUNTO DOS TRANSPORTES AÉREOS', 35, 95);

textSize(24);
text('VOCÊ VENCEU TODOS OS NIVEIS!!', 125, 250);
  
   if(mouseX > 435 && mouseX < 435 + 110 && mouseY > 365 && mouseY <365 + 30){
       rect(435, 365, 110, 30,10);
        if(mouseIsPressed){
        soundMenuBack.play();
        tela = 0;
  }
}
  
  textFont('Georgia'); 
  textSize(16);
  fill('RED')
  textStyle(BOLD);
  text('VOLTAR',445,385);
  image(imgBack,530,380, 15,15);
}
function r2(){
soundCorrect.stop();
soundIncorrect.stop();
soundFase1.stop();  
contFrame2 = 0;  
//resetar  
canhaoX = 275;
canhaoY = 388;
xAviao = 100; 
yAviao = 140;
xBalao= 200;
yBalao= 90;
xBarco =  300;
yBarco = 180;
xNavio=  500;
yNavio= 220;
xCarro =0;
yCarro = 260;
xMoto=400;
yMoto=50;
contadorAcertos = 0;
disparoEstado = false;
disparoX = 0;
disparoY = 0;
    
  image(imgFundoWin,0,0,555,410);
  imageMode(CENTER);
  
if(mouseX > 435 && mouseX < 435 + 110 && mouseY > 365 && mouseY <365 + 30){
  fill('BLACK');
  rect(435, 365, 110, 30,10);
  if(mouseIsPressed){
    soundMenuBack.play();
    tela = 0;
  }
}
  
  imageMode(CENTER);
  textSize(16);
  textFont('Helvetica');
  fill('RED')
  textStyle(BOLD);
  text('VOLTAR',445,385);
  image(imgBack,530,380, 15,15);
  imageMode(CORNER);
  
  erase(150);
  strokeWeight(4);
  rect(17, 225, 510, 90,5);
  noErase();

  textFont(fontStep);
  textStyle(NORMAL);
  fill(10);
  
  textSize(36);
  text('PARABÉNS', 200, 30);
  
  textSize(28);
  text('Você desbloqueou a proxima fase', 70, 70);
  
  
  image(imgCadeado, 255,90, 70, 70);
  
  
  textSize(22);
  text('Está pronto para o nivel 2?', 126, 200);
  
  text('DICA: Você terá que acertar 2 transportes, 1 de \nduas rodas e outro considerado transporte \npúblico.', 20, 250);
  
  textSize(18);
  text('Aperte "ENTER" para ir pra proxima fase.', 35, 385);
  

  if(keyIsDown(ENTER)){
   soundMenuValidate.play();
   tela = 1.2
  }
}
function r3(){
soundCorrect.stop();
soundIncorrect.stop();
soundFase2.stop();
contFrame = 0;
//resetar 
  
canhaoX = 275;
canhaoY = 388;
xAviao = 300; 
yAviao = 180;
xBalao= 500;
yBalao= 220;
xBarco =  100;
yBarco = 140;
xNavio=  200; 
yNavio= 90;
xCarro = 400;
yCarro = 50;
xMoto= 0;
yMoto=260;
contadorAcertos = 0;
disparoEstado = false;
disparoX = 0;
disparoY = 0;
  
  image(imgFundoWin,0,0,555,410);
  imageMode(CENTER);
  
if(mouseX > 435 && mouseX < 435 + 110 && mouseY > 365 && mouseY <365 + 30){
  fill('BLACK');
  rect(435, 365, 110, 30,10);
  if(mouseIsPressed){
    soundMenuBack.play();
    tela = 0;
  }
}
  
  imageMode(CENTER);
  textSize(16);
  textFont('Helvetica');
  fill('RED')
  textStyle(BOLD);
  text('VOLTAR',445,385);
  image(imgBack,530,380, 15,15);
  imageMode(CORNER);
  
  erase(150);
  strokeWeight(4);
  rect(17, 225, 510, 90,5);
  noErase();

  textFont(fontStep);
  textStyle(NORMAL);
  fill(10);
  
  textSize(36);
  text('PARABÉNS', 200, 30);
  
  textSize(28);
  text('Você desbloqueou a proxima fase', 70, 70);
  
  image(imgCadeado, 255,90, 70, 70);
  
  textSize(22);
  text('Está pronto para o nivel 3?', 126, 200);
  
  text('DICA: Você terá que acertar 4 transportes, 2 \ndeles podem voar, e com os outros dois é \npossivel ver os peixes em seu habitat.', 20, 250);
  
  textSize(18);
  text('Aperte "ENTER" para ir pra proxima fase.', 35, 385);
  
  if(keyIsDown(ENTER)){
    soundMenuValidate.play();
    tela = 1.3
  }
}
function r4(){
soundFase3.stop();  
contFrame = 0;
soundCorrect.stop();
soundIncorrect.stop();
  
background(10);
  
//resetar 
canhaoX = 275;
canhaoY = 388;
xAviao = 500;
yAviao = 220;
xBalao= 300;
yBalao= 180;
xBarco =  400;
yBarco = 50;
xNavio=  200;  
yNavio= 90;
xCarro = 100;
yCarro = 140;
xMoto= 0;
yMoto=260;
contadorAcertos = 0;
disparoEstado = false;
disparoX = 0;
disparoY = 0;
  
  image(imgFundoWin,0,0,555,410);
  imageMode(CENTER);
  
if(mouseX > 435 && mouseX < 435 + 110 && mouseY > 365 && mouseY <365 + 30){
  fill('BLACK');
  rect(435, 365, 110, 30,10);
  if(mouseIsPressed){
    soundMenuBack.play();
    tela = 0;
  }
}
  
  imageMode(CENTER);
  textSize(16);
  textFont('Helvetica');
  fill('RED')
  textStyle(BOLD);
  text('VOLTAR',445,385);
  image(imgBack,530,380, 15,15);
  imageMode(CORNER);
  
  erase(150);
  strokeWeight(4);
  rect(17, 225, 510, 90,5);
  noErase();

  textFont(fontStep);
  textStyle(NORMAL);
  fill(10);
  
  textSize(36);
  text('PARABÉNS', 200, 30);
  
  textSize(28);
  text('Você desbloqueou a proxima fase', 70, 70);
  
  image(imgCadeado, 255,90, 70, 70);
  
  textSize(22);
  text('Está pronto para o nivel 4?', 126, 200);
  
  text('DICA: Você terá que acertar 2 transportes, 1 é \nde uso coletivo e o outro é individual. Os dois \nboiam pelo mar.', 20, 250);
  
  textSize(18);
  text('Aperte "ENTER" para ir pra proxima fase.', 35, 385);
  
  if(keyIsDown(ENTER)){
    soundMenuValidate.play();
    tela = 1.4
  }
  
}
function r5(){
  
soundFase4.stop();  
contFrame = 0;  
soundCorrect.stop();
soundIncorrect.stop();
  
background(10);
  
//resetar 
canhaoX = 275;
canhaoY = 388;
xAviao = 200;
yAviao = 90;
xBalao= 300;
yBalao= 180;
xBarco =  100;
yBarco = 140;
xNavio=  500; 
yNavio= 220;
xCarro = 400;
yCarro = 50;
xMoto= 0;
yMoto=260;
contadorAcertos = 0;
disparoEstado = false;
disparoX = 0;
disparoY = 0;
  
  image(imgFundoWin,0,0,555,410);
  imageMode(CENTER);
  
if(mouseX > 435 && mouseX < 435 + 110 && mouseY > 365 && mouseY <365 + 30){
   fill('BLACK');
   rect(435, 365, 110, 30,10);
  if(mouseIsPressed){
    soundMenuBack.play();
    tela = 0;
  }
}
  
  imageMode(CENTER);
  textSize(16);
  textFont('Helvetica');
  fill('RED')
  textStyle(BOLD);
  text('VOLTAR',445,385);
  image(imgBack,530,380, 15,15);
  imageMode(CORNER);
  
  erase(150);
  strokeWeight(4);
  rect(17, 225, 510, 90,5);
  noErase();

  textFont(fontStep);
  textStyle(NORMAL);
  fill(10);
  
  textSize(36);
  text('PARABÉNS', 200, 30);
  
  textSize(28);
  text('Você desbloqueou a proxima fase', 70, 70);
  
  
  image(imgCadeado, 255,90, 70, 70);
  
  
  textSize(22);
  text('Está pronto para o nivel 5?', 126, 200);
  
  text('DICA: Você terá que acertar 3 transportes, 1 de \nduas rodas outro utilizado pra pescar e o outro \nflutua pelo céu.', 20, 250);
  
  textSize(18);
  text('Aperte "ENTER" para ir pra proxima fase.', 35, 385);
  
  if(keyIsDown(ENTER)){
    soundMenuValidate.play();
    tela = 1.5
  }
  
}
function r6(){
soundFase5.stop();  
contFrame = 0;
soundCorrect.stop();
soundIncorrect.stop();
  
  background(10);
  
//resetar 
xAviao = 100;
yAviao = 140;
xBalao= 0;
yBalao= 260;
xBarco = 200;
yBarco = 90;
xNavio= 400;
yNavio= 50;
xCarro = 500;
yCarro = 220;
xMoto= 300;
yMoto=180;
contadorAcertos = 0;
disparoEstado = false;
disparoX = 0;
disparoY = 0;
 
  image(imgFundoWin,0,0,555,410);
  imageMode(CENTER);
  
if(mouseX > 435 && mouseX < 435 + 110 && mouseY > 365 && mouseY <365 + 30){
  fill('BLACK');
  rect(435, 365, 110, 30,10);
  if(mouseIsPressed){
    soundMenuBack.play();
    tela = 0;
  }
}
  
  imageMode(CENTER);
  textSize(16);
  textFont('Helvetica');
  fill('RED')
  textStyle(BOLD);
  text('VOLTAR',445,385);
  image(imgBack,530,380, 15,15);
  imageMode(CORNER);
  
  erase(150);
  strokeWeight(4);
  rect(17, 225, 520, 90,5);
  noErase();

  textFont(fontStep);
  textStyle(NORMAL);
  fill(10);
  
  textSize(36);
  text('PARABÉNS', 200, 30);
  
  textSize(28);
  text('Você desbloqueou a ultima fase!', 70, 70);
  
  image(imgCadeado, 255,90, 70, 70);
  
  textSize(22);
  text('Está pronto para o nivel 6?', 126, 200);
  
  textSize(20);
  text('DICA: Você terá que acertar 3 transportes, 1 utilizado \npra fazer viagens entre estados, outro utilizado pra \nfazer cruzeiros e o outro considerado público.' , 20, 250);
  
  textSize(18);
  text('Aperte "ENTER" para ir pra proxima fase.', 35, 385);
  
  if(keyIsDown(ENTER)){
    soundMenuValidate.play();
    tela = 1.6
  }

}
function informacoes(){
  image(imgFundoInf,-5,-5,560,410);
  image(imgSeta,368,10, 35, 35);
  
if(mouseX > 435 && mouseX < 435 + 110 && mouseY > 365 && mouseY <365 + 30){
  rect(435, 365, 110, 30,10);
  if(mouseIsPressed){
    soundMenuBack.play();
    tela = 0;
  }
}
  
  imageMode(CENTER);
  textSize(16);
  fill('RED')
  textStyle(BOLD);
  text('VOLTAR',445,385);
  image(imgBack,530,380, 15,15);
  imageMode(CORNER);
  
  erase(200);
  strokeWeight(4);
  rect(25, 50, 500, 300,10);
  noErase();
  
  textSize(26);
  fill(2);
  text('Informações', 195, 25);
  
  textFont('Helvetica');
  textStyle(NORMAL);
  textSize(14);
  fill(2);
  text(' TRANSPORTES MANIA é um jogo educativo destinado aos alunos do 2º ano' + '\n' + ' do Ensino Fundamental I. Seu objetivo principal fundamenta-se em mediar os' + '\n' + ' discentes, de forma lúdica, ao reconhecimento dos meios de transporte, além' + '\n' + ' de auxiliá-los em sua classificação, ou seja, terrestres, aquáticos e aéreos. O' + '\n' + ' jogo apresentará diversos meios de transporte passando rapidamente na parte' + '\n' + ' de cima da tela e, de acordo com as instruções em cada fase, o jogador' + '\n' + ' deverá acertar o maior número de meios de transporte conforme sua' + '\n' + ' especificação (ex: acerte dois transportes terrestres). O jogo terá 5 níveis' + '\n' + ' distribuídos em fácil, moderado e difícil, e a medida em que o jogador for' + '\n' + ' acertando, o nível acima é alcançado. Ou seja, quem chegar ao último nível' + '\n' + ' de dificuldade, obterá a vitória.', 27 ,69);
  text(' Habilidade de acordo com a BNCC:(EF02GE03) Comparar diferentes meios' + '\n' + ' de transporte e de comunicação, indicando o seu papel na conexão entre' + '\n' + ' lugares, e discutir os riscos para a vida e para o meio ambiente e os cuidados' + '\n' + ' em seu uso.',27, 280);
  
}
function creditos(){
   image(imgFundoCred,-5,-5,560,410);
  
  if(mouseX > 435 && mouseX < 435 + 110 && mouseY > 365 && mouseY <365 + 30){
  rect(435, 365, 110, 30,10);
  if(mouseIsPressed){
    soundMenuBack.play();
    tela = 0;
  }
}
  
  imageMode(CENTER);
  textSize(16);
  fill('RED')
  textStyle(BOLD);
  text('VOLTAR',445,385);
  image(imgBack,530,380, 15,15);
  imageMode(CORNER);

  erase(200);
  strokeWeight(4);
  rect(25, 50, 240, 300,10);
  noErase();
  
  erase(200);
  strokeWeight(4);
  rect(300, 50, 240, 300,10);
  noErase();
  
  image(imgBarb,75, 120, 125,125);
  image(imgTH,355, 120, 125,125);
  
  textSize(28);
  fill(0);
  text('Créditos', 210, 25);
  
  textStyle(NORMAL);
  textSize(26);
  fill(2);
  text('Bárbara Gabriely', 45, 100);
  text('Thailson Bezerra', 330, 100);
  
  textSize(22);
  fill(2);
  text('Estudante',87, 280); 
  text('de',120, 310);   
  text('Pedagogia', 86, 340);
    
  text(' Estudante', 365, 280); 
  text('de', 405, 310); 
  text( 'Ciências e Tecnologia', 315, 340);
}
function keyTyped(){
  if(keyIsDown(ESCAPE)){
    soundMenuBack.play();
    tela = 0; 
    soundFase1.stop();
    soundFase2.stop();
    soundFase3.stop();
    soundFase4.stop();
    soundFase5.stop();
    soundFase6.stop();
    
  }
}




  
