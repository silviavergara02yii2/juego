var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["284a5ec6-9c5b-4ff5-b7f5-ae4f4d65894b","e16e5dc2-af50-4355-9224-72b9b250d6ca","2c54332a-bac2-4c8c-add2-b08a449bfbbb","fbd5ff6a-5fc6-4410-9183-1913709339b2","884bfd52-597d-4e3d-813d-fde4b5c882f2","76e6c5b5-0390-4095-a634-b7bb87c5fdd6"],"propsByKey":{"284a5ec6-9c5b-4ff5-b7f5-ae4f4d65894b":{"name":"boxcar_07_1","sourceUrl":null,"frameSize":{"x":10,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"VFhxyy8CnJzLd08l5DEdIa.9oJWWBF.7","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":200},"rootRelativePath":"assets/284a5ec6-9c5b-4ff5-b7f5-ae4f4d65894b.png"},"e16e5dc2-af50-4355-9224-72b9b250d6ca":{"name":"boxcar_11_1","sourceUrl":null,"frameSize":{"x":10,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"tH0M2bIU_gKLK_fhT__T0VdjAOYsc4R9","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":10},"rootRelativePath":"assets/e16e5dc2-af50-4355-9224-72b9b250d6ca.png"},"2c54332a-bac2-4c8c-add2-b08a449bfbbb":{"name":"soccer_bw_1","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"9Cmq07qPPbCprJ2SgktxxOS_zW59wktJ","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/2c54332a-bac2-4c8c-add2-b08a449bfbbb.png"},"fbd5ff6a-5fc6-4410-9183-1913709339b2":{"name":"retroship_12_1","sourceUrl":null,"frameSize":{"x":5,"y":5},"frameCount":1,"looping":true,"frameDelay":12,"version":"ThO6.iTvZTS5O0pbBZ5MB5a71hK4O7UA","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":5,"y":5},"rootRelativePath":"assets/fbd5ff6a-5fc6-4410-9183-1913709339b2.png"},"884bfd52-597d-4e3d-813d-fde4b5c882f2":{"name":"spacebattle_07_1","sourceUrl":null,"frameSize":{"x":6,"y":6},"frameCount":1,"looping":true,"frameDelay":12,"version":"Arz1aQWiwE7x.6NTQNi780e0kUPJ3pEo","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":6,"y":6},"rootRelativePath":"assets/884bfd52-597d-4e3d-813d-fde4b5c882f2.png"},"76e6c5b5-0390-4095-a634-b7bb87c5fdd6":{"name":"boxcar_09_1","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"VvMq2ARqsVFsOEqi.v7w7V5wpjJVDKjB","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/76e6c5b5-0390-4095-a634-b7bb87c5fdd6.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
 
//Agrega velocidad para hacer que el auto se mueva.
car1.velocityY=8;
car2.velocityY=8;
car3.velocityY=-8;
car4.velocityY=-8;
function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// Crea la función bounceoff para hacer que el auto rebote en los límites.
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2),
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);
//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
if(keyDown("right")){
  sam.x=sam.x+4;
}
if(keyDown("left")){
  sam.x=sam.x-4;
}
//Agregar la condición de reducir la vida de Sam si toca el carro.
if(
  sam.isTouching(car1)||
  sam.isTouching(car2)||
  sam.isTouching(car3)||
  sam.isTouching(car4))
  {
    sam.x=20;
    sam.y=190;
life=life+1;
  }
//if para límite de 5 vidas  
if(
  life==5)
  {stroke("blue"); 
  textSize(18); 
  text("¡Fin del juego!",170,160); }
  
  car1.setAnimation("boxcar_09_1")
  

 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
