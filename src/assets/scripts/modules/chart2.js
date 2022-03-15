/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */
import ApexCharts from 'apexcharts';

let options2 = {
    series: [44, 55, 41],
    chart: {
        width: 335,
        type: 'donut',
    },
    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 270
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#ff80ab', '#ff4081', '#f50057'],
    fill: {
        type: 'solid',
        colors: ['#ff80ab', '#ff4081', '#f50057']
    },
    legend: {
        formatter: function(val, opts) {
            console.log(val, opts)
            return val + "      " + opts.w.globals.series[opts.seriesIndex]
        },
        horizontalAlign: 'center',
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: 'Avenir Next LT Pro, sans-serif',
        fontWeight: 400,
        width: 200,
        offsetX: 50,
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

export const chart2 = new ApexCharts(document.querySelector("#apex_chart_2"), options2);