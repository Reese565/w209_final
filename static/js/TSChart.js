


var margin = {top: 20, right: 10, bottom: 60, left: 70, xlab: 20},
    width = 650,
    height = 400,
    xValue = null,
    yValue = null,
    xScale = d3.scaleLinear().range([margin.left, width - margin.right]),
    yScale = d3.scaleLinear().range([height - margin.bottom,margin.top]),
    xDomain = null,
    yDomain = null,
    xAxis = null,
    yAxis = null,
    chart_data = null,
    sbg = null,
    gTop = null;



function buildChart(selector){
  svg = d3.select(selector).append('svg');
  gTop = svg.append('g').attr('class','gTop');

  svg.attr('width',width)
     .attr('height',height)
     .attr('class','tsChartSVG');


  function setParams(){

  }

  function chart(data){

    if (xDomain == null){
      xDomain = d3.extent(data, function(d) { return xValue(d); })
    }
    console.log(xDomain)

    if (yDomain == null){
      yDomain = d3.extent(data, function(d) { return yValue(d); })
    }

    gTop.append('g').attr('class','x axis');
    gTop.append('g').attr('class','y axis');
    gTop.append('g').attr('class','geoms');
    gTop.append("g").attr("class", "chartTitle");
    gTop.append("g").attr("class", "xLab");
    gTop.append("g").attr("class", "yLab");

    xScale.domain(xDomain)
    yScale.domain(yDomain)

    yAxis = d3.axisLeft(yScale);
    xAxis = d3.axisBottom(xScale)
      .tickSize(10, 0)
      .tickFormat(d3.format("d"));


    // Update the x-axis.
    gTop.select(".y.axis")
        .attr("transform", "translate(" + (xScale.range()[0] - 1) + ",0)")
        .style('stroke-opacity',0.30)
        .call(yAxis);

    // Update the x-axis.
    gTop.select(".x.axis")
        .attr("transform", "translate(0," + (yScale.range()[0]) + ")")
        .style('stroke-opacity',0.30)
        .call(xAxis);

  }

  setParams.width = function(_) {
    if (!arguments.length) return width;
    width = _;
    return setParams;
  };

  setParams.height = function(_) {
    if (!arguments.length) return height;
    height = _;
    return setParams;
  };

  setParams.x = function(_) {
    if (!arguments.length) return xValue;
    xValue = _;
    return setParams;
  };

  setParams.y = function(_) {
    if (!arguments.length) return yValue;
    yValue = _;
    return setParams;
  };

  setParams.data = function(data){
    chart_data = data;
    return setParams
  }

  setParams.build = function(){
    chart(chart_data)
    return setParams
  }

  setParams.xDomain = function(domain){
    xDomain = domain
    return setParams
  }

  setParams.yDomain = function(domain){
    yDomain = domain
    return setParams
  }

  setParams.xScaler = function(){
    return xScale
  }

  setParams.yScaler = function(){
    return yScale
  }

  setParams.xAxis = function(){
    return xAxis
  }




return setParams

}




function updateChartData(selector){



}


