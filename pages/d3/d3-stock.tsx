import * as d3 from 'd3'

import { useEffect } from 'react'

const margin = { top: 10, right: 20, bottom: 30, left: 30 }
const width = 400 - margin.left - margin.right
const height = 565 - margin.top - margin.bottom
const parseTime = d3.timeParse('%Y/%m/%d')
type CompanyType = {
  ticker: string
  values: Array<{
    date: Date
    close: number
  }>
}
const data: Array<CompanyType> = [
  {
    ticker: 'AMZN',
    values: [
      {
        date: '2016/09/30',
        close: 837.31,
      },
      {
        date: '2016/09/29',
        close: 829.05,
      },
      {
        date: '2016/09/28',
        close: 828.72,
      },
      {
        date: '2016/09/27',
        close: 816.11,
      },
      {
        date: '2016/09/26',
        close: 799.16,
      },
      {
        date: '2016/09/23',
        close: 805.75,
      },
      {
        date: '2016/09/22',
        close: 804.7,
      },
      {
        date: '2016/09/21',
        close: 789.74,
      },
      {
        date: '2016/09/20',
        close: 780.22,
      },
      {
        date: '2016/09/19',
        close: 775.1,
      },
      {
        date: '2016/09/16',
        close: 778.52,
      },
      {
        date: '2016/09/15',
        close: 769.69,
      },
      {
        date: '2016/09/14',
        close: 761.09,
      },
      {
        date: '2016/09/13',
        close: 761.01,
      },
      {
        date: '2016/09/12',
        close: 771.49,
      },
      {
        date: '2016/09/09',
        close: 760.14,
      },
      {
        date: '2016/09/08',
        close: 784.06,
      },
      {
        date: '2016/09/07',
        close: 784.48,
      },
      {
        date: '2016/09/06',
        close: 788.87,
      },
      {
        date: '2016/09/02',
        close: 772.44,
      },
      {
        date: '2016/09/01',
        close: 770.62,
      },
      {
        date: '2016/08/31',
        close: 769.16,
      },
      {
        date: '2016/08/30',
        close: 767.58,
      },
      {
        date: '2016/08/29',
        close: 771.29,
      },
      {
        date: '2016/08/26',
        close: 769,
      },
      {
        date: '2016/08/25',
        close: 759.22,
      },
      {
        date: '2016/08/24',
        close: 757.25,
      },
      {
        date: '2016/08/23',
        close: 762.45,
      },
      {
        date: '2016/08/22',
        close: 759.48,
      },
      {
        date: '2016/08/19',
        close: 757.31,
      },
      {
        date: '2016/08/18',
        close: 764.46,
      },
      {
        date: '2016/08/17',
        close: 764.63,
      },
      {
        date: '2016/08/16',
        close: 764.04,
      },
      {
        date: '2016/08/15',
        close: 768.49,
      },
      {
        date: '2016/08/12',
        close: 772.56,
      },
      {
        date: '2016/08/11',
        close: 771.24,
      },
      {
        date: '2016/08/10',
        close: 768.56,
      },
      {
        date: '2016/08/09',
        close: 768.31,
      },
      {
        date: '2016/08/08',
        close: 766.56,
      },
      {
        date: '2016/08/05',
        close: 765.98,
      },
      {
        date: '2016/08/04',
        close: 760.77,
      },
      {
        date: '2016/08/03',
        close: 754.64,
      },
      {
        date: '2016/08/02',
        close: 760.58,
      },
      {
        date: '2016/08/01',
        close: 767.74,
      },
      {
        date: '2016/07/29',
        close: 758.81,
      },
      {
        date: '2016/07/28',
        close: 752.61,
      },
      {
        date: '2016/07/27',
        close: 736.67,
      },
      {
        date: '2016/07/26',
        close: 735.59,
      },
      {
        date: '2016/07/25',
        close: 739.61,
      },
      {
        date: '2016/07/22',
        close: 744.86,
      },
      {
        date: '2016/07/21',
        close: 744.43,
      },
      {
        date: '2016/07/20',
        close: 745.72,
      },
      {
        date: '2016/07/19',
        close: 739.95,
      },
      {
        date: '2016/07/18',
        close: 736.07,
      },
      {
        date: '2016/07/15',
        close: 735.44,
      },
      {
        date: '2016/07/14',
        close: 741.2,
      },
      {
        date: '2016/07/13',
        close: 742.63,
      },
      {
        date: '2016/07/12',
        close: 748.21,
      },
      {
        date: '2016/07/11',
        close: 753.78,
      },
      {
        date: '2016/07/08',
        close: 745.81,
      },
      {
        date: '2016/07/07',
        close: 736.57,
      },
      {
        date: '2016/07/06',
        close: 737.61,
      },
      {
        date: '2016/07/05',
        close: 728.1,
      },
      {
        date: '2016/07/01',
        close: 725.68,
      },
    ],
  },
  {
    ticker: 'GOOG',
    values: [
      {
        date: '2016/09/30',
        close: 777.29,
      },
      {
        date: '2016/09/29',
        close: 775.01,
      },
      {
        date: '2016/09/28',
        close: 781.56,
      },
      {
        date: '2016/09/27',
        close: 783.01,
      },
      {
        date: '2016/09/26',
        close: 774.21,
      },
      {
        date: '2016/09/23',
        close: 786.9,
      },
      {
        date: '2016/09/22',
        close: 787.21,
      },
      {
        date: '2016/09/21',
        close: 776.22,
      },
      {
        date: '2016/09/20',
        close: 771.41,
      },
      {
        date: '2016/09/19',
        close: 765.7,
      },
      {
        date: '2016/09/16',
        close: 768.88,
      },
      {
        date: '2016/09/15',
        close: 771.76,
      },
      {
        date: '2016/09/14',
        close: 762.49,
      },
      {
        date: '2016/09/13',
        close: 759.69,
      },
      {
        date: '2016/09/12',
        close: 769.02,
      },
      {
        date: '2016/09/09',
        close: 759.66,
      },
      {
        date: '2016/09/08',
        close: 775.32,
      },
      {
        date: '2016/09/07',
        close: 780.35,
      },
      {
        date: '2016/09/06',
        close: 780.08,
      },
      {
        date: '2016/09/02',
        close: 771.46,
      },
      {
        date: '2016/09/01',
        close: 768.78,
      },
      {
        date: '2016/08/31',
        close: 767.05,
      },
      {
        date: '2016/08/30',
        close: 769.09,
      },
      {
        date: '2016/08/29',
        close: 772.15,
      },
      {
        date: '2016/08/26',
        close: 769.54,
      },
      {
        date: '2016/08/25',
        close: 769.41,
      },
      {
        date: '2016/08/24',
        close: 769.64,
      },
      {
        date: '2016/08/23',
        close: 772.08,
      },
      {
        date: '2016/08/22',
        close: 772.15,
      },
      {
        date: '2016/08/19',
        close: 775.42,
      },
      {
        date: '2016/08/18',
        close: 777.5,
      },
      {
        date: '2016/08/17',
        close: 779.91,
      },
      {
        date: '2016/08/16',
        close: 777.14,
      },
      {
        date: '2016/08/15',
        close: 782.44,
      },
      {
        date: '2016/08/12',
        close: 783.22,
      },
      {
        date: '2016/08/11',
        close: 784.85,
      },
      {
        date: '2016/08/10',
        close: 784.68,
      },
      {
        date: '2016/08/09',
        close: 784.26,
      },
      {
        date: '2016/08/08',
        close: 781.76,
      },
      {
        date: '2016/08/05',
        close: 782.22,
      },
      {
        date: '2016/08/04',
        close: 771.61,
      },
      {
        date: '2016/08/03',
        close: 773.18,
      },
      {
        date: '2016/08/02',
        close: 771.07,
      },
      {
        date: '2016/08/01',
        close: 772.88,
      },
      {
        date: '2016/07/29',
        close: 768.79,
      },
      {
        date: '2016/07/28',
        close: 745.91,
      },
      {
        date: '2016/07/27',
        close: 741.77,
      },
      {
        date: '2016/07/26',
        close: 738.42,
      },
      {
        date: '2016/07/25',
        close: 739.77,
      },
      {
        date: '2016/07/22',
        close: 742.74,
      },
      {
        date: '2016/07/21',
        close: 738.63,
      },
      {
        date: '2016/07/20',
        close: 741.19,
      },
      {
        date: '2016/07/19',
        close: 736.96,
      },
      {
        date: '2016/07/18',
        close: 733.78,
      },
      {
        date: '2016/07/15',
        close: 719.85,
      },
      {
        date: '2016/07/14',
        close: 720.95,
      },
      {
        date: '2016/07/13',
        close: 716.98,
      },
      {
        date: '2016/07/12',
        close: 720.64,
      },
      {
        date: '2016/07/11',
        close: 715.09,
      },
      {
        date: '2016/07/08',
        close: 705.63,
      },
      {
        date: '2016/07/07',
        close: 695.36,
      },
      {
        date: '2016/07/06',
        close: 697.77,
      },
      {
        date: '2016/07/05',
        close: 694.49,
      },
      {
        date: '2016/07/01',
        close: 699.21,
      },
    ],
  },
].map((company) => ({
  ...company,
  values: company.values.map<CompanyType['values'][0]>((d) => ({
    date: parseTime(d.date) as Date,
    close: d.close,
  })),
}))

export default function D3() {
  useEffect(() => {
    const svg = d3
      .select('.chart')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .call(responsivefy)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    const xScale = d3
      .scaleTime()
      .domain([
        d3.min(data, (co) => d3.min(co.values, (d) => d.date)),
        d3.max(data, (co) => d3.max(co.values, (d) => d.date)),
      ])
      .range([0, width])
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).ticks(5))

    const yScale = d3
      .scaleLinear()
      .domain([
        d3.min(data, (co) => d3.min(co.values, (d) => d.close)),
        d3.max(data, (co) => d3.max(co.values, (d) => d.close)),
      ])
      .range([height, 0])
    svg.append('g').call(d3.axisLeft(yScale))

    const line = d3
      .line<{ date: Date; close: number }>()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.close))
      .curve(d3.curveCatmullRom.alpha(0.5))

    svg
      .selectAll('.line')
      .data(data)
      .enter()
      .append('path')
      .attr('class', 'line')
      .attr('d', (d) => line(d.values))
      .style('stroke', (d, i) => ['#FF9900', '#3369E8'][i])
      .style('stroke-width', 2)
      .style('fill', 'none')
  }, [])

  return (
    <div className="chart">
      <style global jsx>{`
        .chart {
          background-color: lightgray;
          border: 1px solid black;
          // height: 100%;
        }
        rect {
          fill: steelblue;
        }
        rect:hover {
          fill: turquoise;
        }
      `}</style>
    </div>
  )
}

function responsivefy(svg) {
  // get container + svg aspect ratio
  var container = d3.select(svg.node().parentNode),
    width = parseInt(svg.style('width')),
    height = parseInt(svg.style('height')),
    aspect = width / height
  // add viewBox and preserveAspectRatio properties,
  // and call resize so that svg resizes on inital page load
  svg
    .attr('viewBox', '0 0 ' + width + ' ' + height)
    .attr('preserveAspectRatio', 'xMinYMid')
    .call(resize)
  // to register multiple listeners for same event type,
  // you need to add namespace, i.e., 'click.foo'
  // necessary if you call invoke this function for multiple svgs
  // api docs: https://github.com/mbostock/d3/wiki/Selections#on
  d3.select(window).on('resize.' + container.attr('id'), resize)
  // get width of container and resize svg to fit it
  function resize() {
    var targetWidth = parseInt(container.style('width'))
    svg.attr('width', targetWidth)
    svg.attr('height', Math.round(targetWidth / aspect))
  }
}
