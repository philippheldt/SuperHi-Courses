const todaySvg = d3.select("svg.today");

const barScale = d3.scaleLinear()
    .domain([0, 2000])
    .range([2, 112])

const hourFormat = d3.format("02")
const stepsFormat = d3.format(",")

const todayGroups = todaySvg
    .selectAll("g")
    .data(todayData)
    .enter()
    .append("g")
    .attr("transform", (d,i)=>{return "translate("+(i*36)+",0)"})

todayGroups
    .append("rect")
    .attr("y", (d, i)=>{return 120})
    .attr("x", 0)
    .attr("width", 20)
    .attr("height", 0)
    .transition()
    .delay((d,i) =>{return i*20 + 300})
    .attr("height", (d, i)=>{return barScale(d)})
    .attr("y", (d, i)=>{return 120-barScale(d)})

todayGroups
    .append("text")
    .attr("y", 140)
    .attr("x", 12)
    .attr("class", "hours")
    .text((d, i)=>{return hourFormat(i)})

todayGroups
    .append("text")
    .attr("y", (d, i)=>{return 110-barScale(d)})
    .attr("x", 12)
    .attr("class", "steps")
    .text((d, i)=>{return stepsFormat(d)})
    
todayGroups
    .append("rect")
    .attr("y", 0)
    .attr("x", 0)
    .attr("width", 24)
    .attr("height", 140)
    .attr("class", "transparent")
    