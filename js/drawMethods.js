/* 
*绘制矩形
*ctx:canvas对象
*x:初始X坐标；y:初始Y坐标；width:矩形长度；height:矩形宽度；fillColor:矩形填充颜色；
*borderWidth:矩形边宽度；borderColor:矩形边颜色
*/
function drawRect(ctx, x, y, width, height, fillColor, borderWidth, borderColor){
    ctx.beginPath();
    debugger
    ctx.rect(x, y, width, height);

    if (borderWidth) {
        ctx.lineWidth = borderWidth;
    }
    if (borderColor) {
        ctx.strokeStyle = borderColor;
    }
    if (fillColor) {
        ctx.fillStyle = fillColor;
    }

    ctx.fill();
    ctx.stroke();
}

/* 
*绘制圆角矩形
*ctx:canvas对象
*x:初始X坐标；y:初始Y坐标；width:矩形长度；height:矩形宽度；fillColor:矩形填充颜色；
*borderWidth:矩形边宽度；borderColor:矩形边颜色;
*radius:圆角的半径；
*/
function drawRoundRect(ctx, x, y, width, height, fillColor, borderWidth, borderColor, radius){
    ctx.beginPath();
    ctx.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2);
    ctx.lineTo(width - radius + x, y);
    ctx.arc(width - radius + x, radius + y, radius, Math.PI * 3 / 2, Math.PI * 2);
    ctx.lineTo(width + x, height + y - radius);
    ctx.arc(width - radius + x, height - radius + y, radius, 0, Math.PI * 1 / 2);
    ctx.lineTo(radius + x, height +y);
    ctx.arc(radius + x, height - radius + y, radius, Math.PI * 1 / 2, Math.PI);
    ctx.closePath();

    if (borderWidth) {
        ctx.lineWidth = borderWidth;
    }
    if (borderColor) {
        ctx.strokeStyle = borderColor;
    }
    if (fillColor) {
        ctx.fillStyle = fillColor;
    }
    
    ctx.stroke();
    ctx.fill();
}