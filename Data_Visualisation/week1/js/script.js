const data = [112, 92, 82, 10, 100, 110, 
    112, 92, 82, 10, 100, 110, 
    112, 92, 82, 10, 100, 110, 
    112, 92, 82, 10, 100, 110];
const todaySvg = document.querySelector('svg');

data.forEach((d, i)=>{
    const rectTag = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectTag.setAttribute("x", i*36);
    rectTag.setAttribute("y", 112-d);
    rectTag.setAttribute("width", 24);
    rectTag.setAttribute("height", d);

    todaySvg.append(rectTag);
})