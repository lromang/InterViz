/*
 * Function to execute on document ready
 */
$(document).ready(function(){
    // Var data
    let data = [1, 2, 3, 10, 5];
    // Global variables
    var height  = 200
    var width   = 200
    // Block
    var blockW  = width/(2 * data.length)
    var marginy = 50
    // X Linear Mapper
    var LinearMapper = function(value, domain, range){
        var lineMap =  d3.scaleLinear(value)
                         .domain(domain)
                         .range(range)
        // Return
        return lineMap(value)

    }
    // D3 select
    let svg  = d3.select('body')
                 .append('svg')
                 .attr('height', height + 'px')
                 .attr('width',  width  + 'px')
    // Append a Group
    let bars = svg.append('g')
                  .selectAll('rect')
                  .data(data)
                  .enter()
                  .append('rect')
                  .attr('x', (d, i) => LinearMapper(i, [0, (data.length - 1)], [blockW, width - blockW]))
                  .attr('y', (d, i) => LinearMapper(d, [d3.min(data), d3.max(data)], [height, marginy]))
                  .attr('height', (d, i) => LinearMapper(d, [d3.min(data), d3.max(data)], [height - marginy, marginy]))
                  .attr('width', blockW + 'px')
                  .attr('fill', 'blue')

})
