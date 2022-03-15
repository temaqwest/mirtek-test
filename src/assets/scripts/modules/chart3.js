/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */
import ApexCharts from 'apexcharts';

let options3 = {
    series: [{
        name: "Dollars $",
        data: [10, 21, 19, 24, 23, 16, 21, 9]
    }],
    chart: {
        height: 220,
        type: 'line',
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#7e57c2'],
    stroke: {
        show: true,
        width: 2,
    },
    markers: {
        size: 5,
        colors: '#7e57c2',
        shape: 'circle',
    },
    grid: {
        borderColor: '#e7ebf0',
        row: {},
    },
    xaxis: {
        categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
    }
};

export const chart3 = new ApexCharts(document.querySelector("#apex_chart_3"), options3);