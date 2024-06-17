img=""
objects=[]
status1=""

function preload(){
   img=loadImage("dog_cat.jpg")

}

function setup(){
 canvas=createCanvas(640,420)
 canvas.center()
 objectDetector=ml5.objectDetector('cocossd',modelLoaded)
 document.getElementById("status").innerHTML="status:detecting objects"
}

function draw(){
  image(img,0,0,640,420)
   if(status1 != ""){
      for(i=0;i<objects.length;i++){
         document.getElementById("status").innerHTML="status:objects detected"
         fill("#0000FF")
         percent=floor(objects[i].confidence*100)
         text(objects[i].label+"-"+ percent+"%",objects[i].x,objects[i].y+10)
         noFill()
         stroke("#0000FF")
         rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)

      }
   }
}

function modelLoaded(){
  console.log('modelLoaded')
  status1=true
  objectDetector.detect(img,gotResult)
}

function gotResult(error,results){
   if(error){
    console.log(error)
    
   }

   console.log(results)
   objects=results
}