const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png" ;
var hours;
var response;
var responseJSON;
var dt;
var AmPm;
function preload() {
    // create getBackgroundImg( ) here
    
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;  
}

function draw(){
    
    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
        
    }

    Engine.update(engine);

    fill("black");
    textSize(25);

    if(hours >= 12 ){
        text("Time : " + hours%12 + " PM", 150 ,70);  
    }
    else if(hours === 0){
        text("Time : 12 AM", 150 ,70);  
    }
    else{
        text("Time : " + hours%12  + " AM", 150 ,70);  
    }
    
    
}


async function getBackgroundImg(){
   
    // write code to fetch time from API    
        response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        console.log(response);

    //change the data in JSON format
        responseJSON = await response.json();

     // write code to slice the datetime
        dt = responseJSON.datetime;
        console.log(dt);
        hours = dt.slice(11,13);
        console.log(hours);
       
    // add conditions to change the background images from sunrise to sunset
        if(hours >= 04 && hours <= 06 ){
            debugger;
            bg = "sunrise1.png";
        }
        else if(hours >= 06 && hours <= 07){
            debugger;
            bg = "sunrise2.png";
        }
        else if(hours >= 07 && hours <= 08){
            debugger;
            bg = "sunrise3.png";
        }
        else if(hours >= 08 && hours <= 10){
            debugger;
            bg = "sunrise4.png";
        }
        else if(hours >= 10 && hours <= 13){
            debugger;
            bg = "sunrise5.png";
        }
        else if(hours >= 13 && hours <= 16){
            debugger;
            bg = "sunrise6.png";
        }
        else if(hours >= 16 && hours <= 17){
            debugger;
            bg = "sunset7.png";
        }
        else if(hours >= 17 && hours <= 18){
            debugger;
            bg = "sunset9.png";
        }
        else if(hours >= 18 && hours <= 19){
            debugger;
            bg = "sunset10.png";
        }
        else if(hours >= 19 && hours == 0){
            debugger;
            bg = "sunset11.png";
        }
        else{
            debugger;
            bg = "sunset12.png";
        }
        
    //load the image in backgroundImg variable here
        backgroundImg = loadImage(bg);           
    }
    /*async function Time(){
        var response1 = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON1 = await response1.json();
        var dt1 = responseJSON1.datetime;
        var hours1 = dt1.slice(11,13);
        
             
    }*/

    
   


    


    

