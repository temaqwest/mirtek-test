/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */
import ApexCharts from 'apexcharts';

let options4 = {
    series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201]
    }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17],

    }],
    chart: {
        height: 350,
        type: 'line',
        toolbar: {
            show: false,
        },
    },
    legend: {
        show: false
    },
    stroke: {
        width: [0, 4],
    },
    fill: {
        type: "solid",
        colors: ['#7e57c2', '#ffc400'],
    },
    grid: {
        borderColor: '#e7ebf0',
        row: {},
    },
    colors: ['#7e57c2', '#ffc400'],
    dataLabels: {
        enabled: false,
    },
    markers: {
        size: [0, 7]
    },
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001'],
    xaxis: {
        type: 'datetime',
        labels: {
            format: 'dd.MM'
        }
    },
    yaxis: [{}, { opposite: true }]
};

export const chart4 = new ApexCharts(document.querySelector("#apex_chart_4"), options4);