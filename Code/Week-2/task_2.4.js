var width = 500;
var height = 100;
var padding = 1;

d3.csv("Task_2.4_data.csv").then(function(data){
    var dataset = data
    console.log(dataset)
    barChart(dataset)

}); 

function barChart(dataset){
    var svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function(d, i){
            return i * width / dataset.length;
        })
        .attr("y", function(d){
            return height - d.wombats * 4 - 12;
        })
        .attr("width", width / dataset.length - padding)
        .attr("height", function(d){
            return d.wombats * 4;
        })
        .attr("fill", function(d){
            return `rgb(0, 0, ${d.wombats * 10})`;
        })
    
    svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d){
        return d.label;
    })
    .attr("x", function(d, i){
        return i * width / dataset.length + (width / dataset.length) / 2;
    })
    .attr("y", height)
    .attr("font-size", "13px")
    .attr("fill", "green");
    
}
