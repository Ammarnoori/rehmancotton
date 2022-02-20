



const ctx2 = document.getElementById('myChart2');
const labels2 = [
    "09-10", "10-11", "11-12", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21","21-22"
];

const data2 = {
    labels: labels2,
    datasets: [{
        label: "Cotton Lint Prodution",

        backgroundColor: "rgba(155, 197, 132, 0.5)",
        // borderWidth: 0,

        //     radius: 0,
        data: [9900, 10500, 10900, 11300, 11700, 12200, 12900, 11000, 12400, 10300, 8900, 8100, 13700, 14300,16400],
        cubicInterpolationMode: 'monotone',
        borderWidth:4,
        borderColor:"rgba(55, 97, 32, 0.99)",
        tension: 0.4,
        fill: true
    }
    ]
};

const config2 = {
    type: 'line',
    data: data2,
    options: {
        responsive: true,
        animation: {
            duration: 3000,
            easing: "easeInOutBounce"
        },

        plugins: {
            title: {
                display: true,
                text: 'Production of Cotton Lint Chart'
            },
        },
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Years'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Number of bales(1 bale=170kg)'
                },
                suggestedMin: 0,
                suggestedMax: 6000
            }
        }
    },
};







let myChart2 = new Chart(
    ctx2,
    config2
);
function render() {
    // ctx2.destroy();
    myChart2.destroy();
    myChart2 = new Chart(
        ctx2,
        config2
    );

}
setInterval(render, 8000);





