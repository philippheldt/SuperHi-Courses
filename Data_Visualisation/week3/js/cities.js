// Run functions:
// onload
// on Selectbox change

const svg = d3.select("svg")

svg
    .attr("width", 960)
    .attr("height", 720)

const placeCities = function(){
    let inputX = document.querySelector("select[name=valueX]")
    let inputY = document.querySelector("select[name=valueY]")
    
    let valueX = inputX.value
    let valueY = inputY.value


    // find max value of the data

    let maxValueX = d3.max(data, (d,i) => {return d[valueX]} )
    let maxValueY = d3.max(data, (d,i) => {return d[valueY]} )

    const scaleX = d3.scaleLinear()
        .domain([0, maxValueX])
        .range([100,860])

    const scaleY = d3.scaleLinear()
        .domain([0, maxValueY])
        .range([620,100])

    const cities = svg
        .selectAll("g.city")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "city")
        .attr("transform", (d,i) => {
            const x = scaleX(d[valueX])
            const y = scaleY(d[valueY])
            return `translate(${x},${y})`
        })

    cities
        .append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 15)

    svg
        .selectAll("g.city")
        .transition()
        .duration(500)
        .attr("transform", (d,i) => {
            const x = scaleX(d[valueX])
            const y = scaleY(d[valueY])
            return `translate(${x},${y})`
        })
}

placeCities()

const selectTags = document.querySelectorAll("select")
selectTags.forEach((selectTag) => {
    selectTag.addEventListener("change", function(){
        placeCities()
    })
})