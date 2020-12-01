
// function makeResponsive() {

//   // if the SVG area isn't empty when the browser loads,
//   // remove it and replace it with a resized version of the chart
// var svgArea = d3.select("body").select("svg");

// if (!svgArea.empty()) {
//   svgArea.remove();
// }



var svgWidth = 700;
var svgHeight = 500;

var margin = {
  top: 40,
  right: 80,
  bottom: 60,
  left: 80
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append an SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);


   d3.csv("/data/marijuana_df2.csv", function(maindata) {
    console.log(maindata);
    // parse data
    maindata.forEach(function(idata) {
          idata.state = idata.state;
          idata.count = +idata.count;
        
  
      
    });
  
var chosenXAxis = "state";
var chosenYAxis = "count"

  var xLinearScale = d3.scaleBand()
    .domain (maindata.map ( d => d.state))
    
    .range([0, width])
    .padding(0.1);

  

var yLinearScale = d3.scaleLinear()
    .domain([0,d3.max(maindata, d => d.count)])
    .range([height,0]);

    var bottomAxis = d3.axisBottom(xLinearScale)
    var leftAxis = d3.axisLeft(yLinearScale)
// Add X axis label:
svg.append("text")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height + margin.top + 30)
    .text("States");

// Y axis label:
svg.append("text")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left+60)
    .attr("x", -margin.top+10)
    .text("Count of Dispensaries")


    chartGroup.append('g')
    .attr("transform", `translate(0,${height})`)
    .call(bottomAxis);

    chartGroup.append('g')
    // .attr("transform", `translate(0,${height})`)
    .call(leftAxis);

    var barspacing=10;
    var barscale=20;
    // var barwidth = width - ()
    var barsGroup = chartGroup.selectAll(".bar")
    .data(maindata)
        .enter()
        .append("rect")
        .attr("class","bar")
        .attr("x", d => xLinearScale(d.state))
        .attr("y", d => yLinearScale(d.count))
        .attr("width", xLinearScale.bandwidth())
        .attr("height", d => height - yLinearScale(d.count))
        .attr("fill", "green")
        
        var toolTip = d3.tip()
        .attr("class","tooltip d3-tip")
        .offset([20, 30])
        .html(function(d) {
            return(`${d.state}<br>Count: ${d.count} <br>`);
        });
     barsGroup.call(toolTip);
     barsGroup.on("mouseover", function(d){
        toolTip.show(d, this)
        .attr("fill", "green");
        })
        .on("mouseout", function(d){
            toolTip.hide(d);
            });
     
}
   )

// }
  

// makeResponsive();

// // Event listener for window resize.
// // When the browser window is resized, makeResponsive() is called.
// d3.select(window).on("resize", makeResponsive);