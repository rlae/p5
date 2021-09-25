function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let cam
let cls
function preload(){
 cls = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/loKUkRhfh/"+"model.json")
 print(cls)

}


function setup() {
  createCanvas(400, 400);
  cam=createCapture(VIDEO)
  cam.size(400,400)
  cam.hide()

  cls.classify(cam, result)
}

function result(e,r){
  print(r[0].label)
  if(r[0].label=="1"){
    x=x-1
  }
  if(r[0].label=="-1"){
    x=x+1
  }
  print(r[0])
  cls.classify(cam, result)
}
x=200
y=200
w=50

function draw() {
  background(50)
  image(cam,0,0,400,400)
  rect(x,y,w,w)
  
  if(keyIsDown(37)){
    x=x-1
  }
  if(keyIsDown(39)){
    x=x+1
  }
  if(keyIsDown(38)){
    y=y-1
  }
  if(keyIsDown(40)){
    y=y+1
  }
}
