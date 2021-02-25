canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
nasa_array=["1000ML0044631290305226E03_DXXX.jpg","1000MR0044631300503690E01_DXXX.jpg","FLB_486265257EDR_F0481570FHAZ00323M_.jpg","RLB_486265291EDR_F0481570RHAZ00323M_.jpg"];
random=Math.floor(Math.random()* 4);
console.log(random);
Rover_width=100;
Rover_height=90;

Rover_x=10;
Rover_y=10;

bgimage=nasa_array[random];
console.log("background_image = " + bgimage);
Iimage="images (1).jpg";
I2image="images.jpg";

function add(){
    bgimage_tag=new Image();
    bgimage_tag.onload=uploadBackground;
    bgimage_tag.src=bgimage;

    rimage_tag=new Image();
    rimage_tag.onload=uploadrover;
    rimage_tag.src=rimage;
}
function uploadBackground(){
    ctx.drawImage( bgimage_tag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage( rimage_tag,Rover_x,Rover_y,Rover_width,Rover_height)
}

function add(){
    bgimage_tag=new Image();
    bgimage_tag.onload=uploadBackground;
    bgimage_tag.src=bgimage;

    rimage_tag=new Image();
    rimage_tag.onload=uploadrover;
    rimage_tag.src=rimage;
}
function uploadBackground(){
    ctx.drawImage( bgimage_tag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage( rimage_tag,Rover_x,Rover_y,Rover_width,Rover_height)
}

