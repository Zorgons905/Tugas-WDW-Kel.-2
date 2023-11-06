function calculateResistance() {
    var color1 = document.getElementById("color1").value;
    var color2 = document.getElementById("color2").value;
    var color3 = document.getElementById("color3").value;
    var color4 = document.getElementById("color4").value;
    var color5 = document.getElementById("color5").value;

    var colors = {
        "hitam": 0,
        "coklat": 1,
        "merah": 2,
        "jingga": 3,
        "kuning": 4,
        "hijau": 5,
        "biru": 6,
        "ungu": 7,
        "kelabu": 8,
        "putih": 9,
        "emas": -1,
        "perak": -2,
        "t-hijau": 0.5,
        "t-biru": 0.25,
        "t-ungu": 0.1,
        "t-kelabu": 0.05,
        "t-emas": 5,
        "t-perak": 10,
    };

    var resistance = "";
    var resistance2 = "";
    resistance += colors[color1];
    resistance += colors[color2];
    resistance += colors[color3];
    resistance2 = resistance * Math.pow(10, colors[color4]);
    if (resistance2 % Math.pow(10, 9) == 0) {
        resistance = resistance2/1000000000 + "G Ohm";
    }
    else if (resistance2 % Math.pow(10, 8) == 0) {
        resistance = resistance2/1000000000 + "G Ohm";
    }
    else if (resistance2 % Math.pow(10, 6) == 0) {
        resistance = resistance2/1000000 + "M Ohm";
    }
    else if (resistance2 % Math.pow(10, 5) == 0) {
        resistance = resistance2/1000000 + "M Ohm";
    }
    else if (resistance2 % Math.pow(10, 4) == 0) {
        resistance = resistance2 /1000 + "k Ohm";
    }
    else if (resistance2 % Math.pow(10, 3) == 0) {
        resistance = resistance2/1000 + "k Ohm";
    }
    else if (resistance2 % Math.pow(10, 2) == 0) {
        resistance = resistance2/1000 + "k Ohm";
    }
    else {
        resistance = resistance2 + " Ohm";
    };
    resistance += " ± " + colors[color5] + "%";

    document.getElementById("resistance").innerHTML = resistance;
}

function changeColor() {
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    var box4 = document.getElementById("box4");
    var box5 = document.getElementById("box5");
    var color1 = document.getElementById("color1").value;
    var color2 = document.getElementById("color2").value;
    var color3 = document.getElementById("color3").value;
    var color4 = document.getElementById("color4").value;
    var color5 = document.getElementById("color5").value;    
    var colors = {
        "hitam": "linear-gradient(to top, #000, #909090)",
        "coklat": "linear-gradient(to top, #741e1e, #d03737)",
        "merah": "linear-gradient(to top, #dd0000, #ff8888)",
        "jingga": "linear-gradient(to top, #ff5400, #ffda00)",
        "kuning": "linear-gradient(to top, #ffee05, #ffffbb)",
        "hijau": "linear-gradient(to top, #048042, #00ff7f 80%)",
        "biru": "linear-gradient(to top, #006666, #00ffff 80%)",
        "ungu": "linear-gradient(to top, #a202a2, #ff00ff 80%)",
        "kelabu": "linear-gradient(to top, #808080 60%, #dadada)",
        "putih": "linear-gradient(to top, #e1e1e1 10%, #fff 90%)",
        "emas": "linear-gradient(to top, #ffd700 60%, #fff)",
        "perak": "linear-gradient(to top, #c0c0c0 60%, #efefef)",
        "t-hijau": "linear-gradient(to top, #048042, #00ff7f 80%)",
        "t-biru": "linear-gradient(to top, #006666, #00ffff 80%)",
        "t-ungu": "linear-gradient(to top, #a202a2, #ff00ff 80%)",
        "t-kelabu": "linear-gradient(to top, #808080, #dadada)",
        "t-emas": "linear-gradient(to top, #ffd700 60%, #fff)",
        "t-perak": "linear-gradient(to top, #c0c0c0 60%, #efefef)",
    };
    box1.style.backgroundImage = colors[color1];
    box2.style.backgroundImage = colors[color2];
    box3.style.backgroundImage = colors[color3];
    box4.style.backgroundImage = colors[color4];
    box5.style.backgroundImage = colors[color5];
}