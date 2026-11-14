var btn_circle = document.getElementById('btnC');
var btn_rect = document.getElementById('btnR');
var btn_triangle = document.getElementById('btnT');


var circle = document.getElementById('circle');
var rect = document.getElementById('rectangle');
var triangle = document.getElementById('triangle');

btn_circle.onclick = function(){
    
    circle.setAttribute("class" , "shapes_circle");
}

btn_rect.onclick = function(){

    rect.setAttribute("class" , "shapes_rect");
}

btn_triangle.onclick = function(){

    triangle.setAttribute("class" , "shapes_triangle");
}
