var formGraph = document.querySelector("#form");
formGraph.addEventListener("submit", getGraph);

function getGraph(e) {
    
    e.preventDefault();
    var x = e.target.querySelector("#xValue").value;
    var y = e.target.querySelector("#yValue").value;
    var ctx = document.querySelector('#myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
            data: {
                labels: ['X', 'Y'],
                    datasets: [{
                        // label: '# of Votes',
                        data: [x, y],
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
}


        