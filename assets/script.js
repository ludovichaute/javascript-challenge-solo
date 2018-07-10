
let pays = document.getElementById('table1').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
console.log(pays);
let test = pays[1].children[1];
console.log(test);

$(pays).click(function() {
    let test = pays[1].children[1];
    if (test === 1) {
        console.log("1");
    }
    
    
    
  });

$('#table1').before('<div id="chart1"></div>');

var svg = dimple.newSvg("#chart1", 700, 400);
data = [
    { "Brand":"Belgique", "Années":"2001", "Nombres":900 },
    { "Brand":"Belgique", "Années":"2002", "Nombres":1100 },
    { "Brand":"Belgique", "Années":"2003", "Nombres":900 },
    { "Brand":"Belgique", "Années":"2004  ", "Nombres":900 },
];

var myChart = new dimple.chart(svg, data);
myChart.addCategoryAxis("x", "Années");
myChart.addMeasureAxis("y", "Nombres");
myChart.addSeries("Brand", dimple.plot.line);
myChart.addLegend(6, 10, 700, 30, "right");
myChart.draw();