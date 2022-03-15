/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */
import ApexCharts from 'apexcharts';

let options5 = {
    chart: {
        id: 'spark1',
        group: 'sparks',
        type: 'line',
        height: 80,
        sparkline: {
            enabled: true
        },
    },
    series: [{
        data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
    }],
    stroke: {
        curve: 'smooth'
    },
    markers: {
        size: 0
    },
    grid: {
        padding: {
            top: 20,
            bottom: 10,
            left: 20
        }
    },
    colors: ['#ec407a'],
    tooltip: {
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function formatter(val) {
                    return '';
                }
            }
        }
    }
}

export const chart5 = new ApexCharts(document.querySelector("#apex_chart_5"), options5);