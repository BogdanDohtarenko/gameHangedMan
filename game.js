const canvas = document.getElementById("graphic");
const ctx = canvas.getContext("2d");

function drawLine(x, y, x1, y1) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.stroke();
};

const drawHead = () => {
    ctx.beginPath();
    ctx.arc(200, 200, 20, 0, Math.PI * 2, true);
    ctx.stroke();

    //ctx.beginPath();
    //ctx.arc(200, 203, 5, 0, Math.PI, false);
    //ctx.stroke();

    //ctx.beginPath();
    //ctx.arc(195, 195, 2, 0, Math.PI * 2, true);
    //ctx.stroke();

    //ctx.beginPath();
    //ctx.arc(205, 195, 2, 0, Math.PI * 2, true);
    //ctx.stroke();
};

const input = document.getElementById("input");

input.addEventListener('keydown', function (event) {
    if (event.key == "Enter") {
        let enteredLetter = event.target.value;
        console.log("entered letter : " + enteredLetter);
    }
});

drawLine(100, 325, 180, 325);//found
drawLine(140, 325, 140, 150);//pillar
drawLine(140, 150, 200, 150);//highest
drawLine(200, 150, 200, 180);//rope
drawHead();
drawLine(200, 220, 200, 270);//body
drawLine(200, 270, 180, 300);//1leg
drawLine(200, 270, 220, 300);//2leg
drawLine(200, 235, 230, 260);//1arm
drawLine(200, 235, 170, 260);//2arm