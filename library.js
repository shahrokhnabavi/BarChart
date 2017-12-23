function randomColor(palette){
    let colors = [
            ["be6e46","cde7b0","a3bfa8","7286a0","59594a"],
            ["01161e","124559","598392","aec3b0","eff6e0"],
        //99621e-d38b5d-f3ffb6-739e82-2c5530
        ],
        random = Math.floor(Math.random() * 5),
        color = palette ? colors[palette][random] : colors[0][random];
    return "#" + color;
}

function rand(min, max){
    return Math.floor(Math.random() * max) + min;
}