



const ctx = document.getElementById('myChart');
const labels = [
    "97-98", "98-99", "99-00", "2000-2001", "01-02", "02-03", "03-04", "04-05", "05-06", "06-07", "07-08", "08-09", "09-10", "10-11", "11-12", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21"
];

const data = {
    labels: labels,
    datasets: [{
        label: "Cotton Seed",
        backgroundColor: "rgba(55, 97, 32, 0.9)",
            borderWidth: 0,
            
        //     radius: 0,
        data: [6997, 8010, 12900, 15000, 18102, 21500, 28000, 23080, 21400, 33900, 42899, 47988],
        cubicInterpolationMode: 'monotone',
      tension: 0.4,
      fill:true
    },
    {
        label: "Cotton Lint",
        backgroundColor: "rgba(255, 99, 132, 0.9",
            borderWidth: 0,
            // radius: 0,
        data: [14900, 15800, 16200, 16800, 18010, 19400, 21509, 22000, 23900, 24800, 26001, 29800, 31200, 33005, 35000, 36500, 37300, 35000, 33500, 39300, 41200, 43000, 48000, 50100, 54000, 56900, 58800],
        cubicInterpolationMode: 'monotone',
      tension: 0.4,
      fill:true
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        animation:{
            duration: 3000,
        easing: "easeInOutBounce"
        },
      
      plugins: {
        title: {
          display: true,
          text: 'Cotton Seed & Cotton Lint Trade Chart'
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
            text: 'Green: Number of Bags  Pink:number of Bales'
          },
          suggestedMin: 0,
          suggestedMax: 6000
        }
      }
    },
  };







let myChart = new Chart(
    ctx,
    config
);
function render(){
    myChart.destroy();
    myChart = new Chart(
        ctx,
        config
    );

}
setInterval(render,8000);





