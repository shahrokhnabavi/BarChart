"use strict";


var canvas = document.getElementById("chart"),
    context = canvas.getContext("2d"),
    width = 500,
    height = 250,
    pivotEage = 20,
    pivotTop = 10,
    hText = 'X Axis',
    vText = 'Y Axis',
    barWidth = 20,
    barSpace = 5,
    data = [
        {color: 'red', value: 80},
        {color: 'green', value: 20},
        {color: 'blue', value: 100},
        {color: 'silver', value: 50},
    ],
    barWidth = Math.floor((height - pivotTop - pivotEage - barSpace) / data.length ) - barSpace;

canvas.width  = width;
canvas.height = height;

//Axis
context.beginPath();
context.moveTo(pivotEage,pivotTop);
context.lineTo(pivotEage,height - pivotEage);
context.lineTo(width - pivotTop,height - pivotEage);
context.stroke();

// Text
context.fillStyle = '#000000';
context.textAlign = 'center';
context.textBaseline = 'middle';
context.font = '12px Verdana';
context.fillText(hText, Math.floor(width/2), height - 10);

context.translate(pivotTop ,Math.floor(height/2));
context.rotate(3 * Math.PI / 2)
context.fillText(vText,0,0);

// Bars
context.setTransform(1, 0, 0, 1, 0, 0);
var percent = width - pivotTop - pivotEage;
data.forEach( (item, index) => {
    var value = item.value*percent/100;
    context.fillStyle = item.color;
    context.fillRect(pivotEage+1,(index*(barWidth+barSpace)) + pivotTop + barSpace, value, barWidth);
});
