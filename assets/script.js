$('#table1').before('<div id="chartContainer">Test</div>');

var svg = dimple.newSvg("#chartContainer", 590, 400);
d3.tsv("data.csv", function (data) {
  data = dimple.filterData(data, "Owner", ["Aperture", "Black Mesa"])
  var myChart = new dimple.chart(svg, data);
  myChart.setBounds(60, 30, 505, 305);
  var x = myChart.addCategoryAxis("x", "Month");
  x.addOrderRule("Date");
  myChart.addMeasureAxis("y", "Unit Sales");
  var s = myChart.addSeries("Channel", dimple.plot.line);
  s.interpolation = "cardinal";
  myChart.addLegend(60, 10, 500, 20, "right");
  myChart.draw();
});
