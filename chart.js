function getChartX(DataX) {
    DataX = document.querySelector("#xValue").value;
    return DataX;
}

function getChartY(DataY) {
    DataY = document.querySelector("#yValue").value;
    return DataY;
}

// function refreshDiv() {
//     var container = document.getElementById("title");
//     var content = container.innerHTML;
//     container.innerHTML= content;
//     console.log("2");
// }

function refreshDiv()
{ 
    $( "#container_chart" ).load(window.location.href + " #container_chart" );
}

var ctx = document.querySelector('#myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
        data: {
            labels: ['X', 'Y'],
                datasets: [{
                    // label: '# of Votes',
                    data: [getChartX(), getChartY()],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: { 
               
            }
        });

        