
window.onload = function() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;
    console.log(width, height);
    // context.fillRect(0, 0, width, height);

    for(let i = 0; i < 100; i++) {
        context.beginPath();
        context.moveTo(Math.random() * width, Math.random() * height);
        context.lineTo(Math.random() * width, Math.random() * height);
        context.stroke();
    }

};