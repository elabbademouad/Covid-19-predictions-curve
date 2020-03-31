Chart.defaults.global.defaultFontFamily ="Almarai', sans-serif";
var ctx = document.getElementById('covid-curve');
var dataCurve = {
    labels: dates,
    datasets: [{
            data: cases,
            label: "الحالات",
            borderColor: "#3f51b5",
            fill: false
        }, {
            data: activeCases,
            label: "الحالات النشطة",
            borderColor: "#f9a825",
            fill: false
        }, {
            data: deaths,
            label: "الوفيات",
            borderColor: "#f44336",
            fill: false
        }, {
            data: recoverd,
            label: "المتعافون",
            borderColor: "#2e7d32",
            fill: false
        }, {
            data: predections,
            label: "التوقعات",
            borderColor: "#808e95",
            fill: false
        },
        {
            data: beds,
            label: "الأسرة المتاحة في المستشفيات",
            borderColor: "#9c27b0",
            fill: false
        }
    ]
};
var myChart = new Chart(ctx, {
    type: 'line',
    data: dataCurve,
    options: {
        title: {
            display: false,
            text: ''
        }
    }
});
