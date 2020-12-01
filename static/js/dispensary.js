function makeResponsive() {
    // if the SVG area isn’t empty when the browser loads,
    // remove it and replace it with a resized version of the chart
  var svgArea = d3.select("body").select("svg");
  if (!svgArea.empty()) {
    svgArea.remove();
  }
  
  var svgWidth = 700;
  var svgHeight = 500;
  var margin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30
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
      chartGroup.append('g')
      .attr("transform", `translate(0,${height})`)
      .call(bottomAxis);
      chartGroup.append('g')
      // .attr("transform", `translate(0,${height})`)
      .call(leftAxis);
      var barspacing=10;
      var barscale=10;
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
  }
  makeResponsive();
  // Event listener for window resize.
  // When the browser window is resized, makeResponsive() is called.
  d3.select(window).on("resize", makeResponsive);
  
var candata = d3.csv("/data/marijuana_df2.csv", function(candata) {
          //     // makeplot();
var selectTag = d3.select("select");
    var options = selectTag.selectAll('option')
    .data(state)
    .enter().append('option')
    .attr('value', function (d) { return d;})
    .text(function (d) {return d;} )
});
var candata =  d3.csv("/data/marijuana_df2.csv", function(candata) {
    // var names = candata.name;
    // // use filter () to pass the function as its argument
    var name = candata.map(x => x.name);
    var m = d3.select("#sample-metadata");
    //make sure to empty html before appending and loading data
    m.html("")
    Object.entries(city[0]).forEach(function ([key, value]) {
        console.log(key, value);
        m.append("h3").text(value);
    });
});
     var candata =  d3.csv("/data/marijuana_df2.csv", function(candata) {
        console.log("candata",candata);
        var state = candata.map(x => x.state);
        var city = candata.map(x => x.city);
        var count = candata.map(x => x.count);
        console.log("state", state);
        console.log("count", count);
      //     // //  Create the Traces
          var trace1 = {
            x: state,
            y: count,
            type: "bubble",
            mode: 'markers',
              marker: {
                  size: [60,50,20,40,30,20,40,50,20]
              }
          };
          // Create the data array for the plot
          var data = [trace1];
          // Define the plot layout
          var layout = {
            title: "CORRELATION OF DISPENSARIES AND STATE",
            showlegend: false,
              height: 400,
              width: 500
          };
          // // Plot the chart to a div tag with id "plot"
          Plotly.newPlot("bubble", data, layout);
        });
    // var candata =  d3.csv("/data/marijuana_df2.csv", function(candata) {
    //   console.log(candata);
    //   var state =
    //   var state = candata.map(x => x.state);
    //   var city = candata.map(x => x.city);
    //   // var c= candata.map(x => x.count);
    //   var count = candata.map(x=>parseInt(x.count))
      d3.csv("/data/marijuana_df2.csv", function(maindata) {
        console.log(maindata);
        // parse data
        maindata.forEach(function(idata) {
              idata.state = idata.state;
              idata.count = +idata.count;
        });
      // var result = count.map(c => c.value > 50);
      // function checkCount(candata) {
      //   // console.log(candata);
      //   return count > 20 ;
      // }
      // var result = candata.filter(count);
    console.log("state",state)
    // console.log("result",result)
    // console.log("state",state)
    var data = [{
      values: idata.count,
      labels: idata.state,
      type: "pie"
    }];
    var layout = {
      height: 400,
      width: 500
    };
  });
    Plotly.newPlot("pie", data, layout);
  
var candata1=  d3.csv("/data/marijuana_df2.csv", function(candata1) {
    var tbody = d3.select("tbody");
        var row = tbody.append("tr");
        Object.entries(candata1).forEach(function([key,value]){
            console.log(key,value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });

var input = d3.select("#state")
var button = d3.select("#filter-btn");
var form = d3.select("#form");
button.on("click",runenter);
form.on("submit",runenter);

function runenter () {
d3.event.preventDefault();
var input = d3.select("#state");
var inputValue = input.property("value");
// console.log(inputValue);
var filteredData = tableData.filter(date => date.state === inputValue);
// console.log(filteredData);
var tbody = d3.select("tbody");
tbody.html("");

filteredData.forEach(function(data){
var row = tbody.append("tr");
Object.entries(data).forEach(function([key,value]){
    console.log(key,value);
    var cell = tbody.append("td");
    cell.text(value);
    });
});
}
//
  //     var candata1=  d3.csv("/data/marijuana.csv", function(candata1) {
  //       var tbody = d3.select("tbody");
  //           var row = tbody.append("tr");
  //           Object.entries(candata1).forEach(function([key,value]){
  //               console.log(key,value);
  //               var cell = tbody.append("td");
  //               cell.text(value);
  //           });
  //       });
  //       // var input = d3.select("#datetime")
        //  var button = d3.select("#filter-btn");
        //  var form = d3.select("#form");
        //  button.on("click",runenter);
        //  form.on("submit",runenter);
        //  function runenter (){
        //  d3.event.preventDefault();
        //  var input = d3.select("#datetime");
        //  var inputValue = input.property("value");
        //  console.log(inputValue);
        //  var filteredData = tableData.filter(date => date.state === inputValue);
        //   console.log(filteredData);
        //   var tbody = d3.select("tbody");
        //   tbody.html("");
        //   filteredData.forEach(function(data){
        //     var row = tbody.append("tr");
        //     Object.entries(data).forEach(function([key,value]){
        //         console.log(key,value);
        //         var cell = tbody.append("td");
        //         cell.text(value);