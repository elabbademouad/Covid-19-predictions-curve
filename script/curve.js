var ctx = document.getElementById('covid-curve');
var dataCurve = {
    labels: dates,
    datasets: [{
            data: cases,
            label: "الحالات",
            borderColor: "#3e95cd",
            fill: false
        }, {
            data: activeCases,
            label: "الحالات النشطة",
            borderColor: "#8e5ea2",
            fill: false
        }, {
            data: deaths,
            label: "الوفيات",
            borderColor: "#3cba9f",
            fill: false
        }, {
            data: recoverd,
            label: "المتعافون",
            borderColor: "#e8c3b9",
            fill: false
        }, {
            data: predections,
            label: "التوقعات",
            borderColor: "#c45850",
            fill: false
        },
        {
            data: beds,
            label: "الأسرة المتاحة في المستشفيات",
            borderColor: "green",
            fill: false
        }
    ]
};
var myChart = new Chart(ctx, {
    type: 'line',
    data: dataCurve,
    options: {
        title: {
            display: true,
            text: ''
        }
    }
});
