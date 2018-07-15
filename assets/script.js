let data = [];
let table = document.getElementById('table1');
let years = table.getElementsByTagName('tr')[1].children;
let tableYears= [];
for (let i = 2; i < years.length; i++) {
    let content = years[i].innerHTML;
    tableYears.push(content);
}
let rows = table.getElementsByTagName('tr');
for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName('td');
    for (let j = 0; j < cells.length; j++) {
        if(j === 0) {
          var country = cells[j].innerHTML;
        }
        else if (cells[j].innerHTML != ":"){
            data.push({Pays:country, Années:tableYears[j-1],Nombres:cells[j].innerHTML });
        }
    }
}

var colorList = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32",
  };
  var tabColor = [];

for (var value in colorList) {
    let val = colorList[value];
    tabColor.push(new dimple.color(val));
}


$('#table1').before('<div id="chart1"></div>');

var svg = dimple.newSvg("#chart1", 900, 600);
var myChart = new dimple.chart(svg, data);
myChart.defaultColors = tabColor;
myChart.addCategoryAxis("x", "Années");
myChart.addMeasureAxis("y", "Nombres");
myChart.addSeries("Pays", dimple.plot.line);
myChart.addLegend(-100, 30, 100, 600);
myChart.draw();



/**** Table 2 ****/

let data2 = [];
let table2 = document.getElementById('table2');
let years2 = table2.getElementsByTagName('tr')[0].children;
let tableYears2= [];


for (let i = 2; i < years2.length; i++) {
    
    let content2 = years2[i].innerHTML;
    tableYears2.push(content2);

}
let rows2 = table2.getElementsByTagName('tr');
for (let i = 0; i < rows2.length; i++) {
    let cells2 = rows2[i].getElementsByTagName('td');
    for (let j = 0; j < cells2.length; j++) {
        if(j === 0) {
          var country2 = cells2[j].innerHTML;
        }
        else{
            data2.push({pays2:country2, années:tableYears2[j-1],nombres:cells2[j].innerHTML});
            
        }
    }
}

$('#table2').before('<div id="chart2"></div>');

var svg = dimple.newSvg("#chart2", 900, 600);
var myChart2 = new dimple.chart(svg, data2);
myChart2.defaultColors =  [new dimple.color("Blue"),new dimple.color("red")];

myChart2.addCategoryAxis("x", ["pays2", "années"]);
myChart2.addMeasureAxis("y", "nombres");
myChart2.addSeries("années", dimple.plot.bar);
myChart2.addLegend(-100, 30, 100, 600);
myChart2.draw();

/*** Table 3 ***/

function makeRequest(url) {
    var httpRequest = false;
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() { alertContents(httpRequest); };
    httpRequest.open('GET', url, true);
    httpRequest.send(null);
}

function alertContents(httpRequest) {
    if (httpRequest.readyState == XMLHttpRequest.DONE) {
        var dataRecup = []; 
        if (httpRequest.status == 200) {

            var dataJ = JSON.parse(httpRequest.responseText);
            
            for (let j = 0; j < dataJ.length; j++) {
                let index = dataJ[j][0];
            for (let k = 0; k < dataJ.length; k++) {
                var taux = dataJ[j][1];
            }
            dataRecup.push({"Time":index, "Taux":taux});
        }
            var svg = dimple.newSvg("#chartJ", 800, 600);
            var myChartJ = new dimple.chart(svg, dataRecup);
            myChartJ.defaultColors = [new dimple.color("#FF0000", "Blue")]; 
            myChartJ.addCategoryAxis("x", "Time");
            myChartJ.addMeasureAxis("y", "Taux");
            myChartJ.addSeries("", dimple.plot.line);   
            myChartJ.draw();
        } else {
            console.log('Un problème est survenu avec la requête.');
        }
    }
}

 
setInterval(function(){ 

    makeRequest('https://inside.becode.org/api/v1/data/random.json?min=-50&max=50'); 
    $('#chartJ').remove();
    $('#firstHeading').after('<div id="chartJ"></div>');
    }, 1000);

