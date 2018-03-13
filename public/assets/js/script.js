$('.featlist>li:first-of-type').click(function(){
  $('.regcomp').hide("");
  $('.checkstatus').hide("");
  $('.feedbackpg').hide("");
  $('.home').show("");
});
$('.featlist>li:nth-of-type(2)').click(function(){
  $('.home').hide("");
  $('.checkstatus').hide("");
  $('.feedbackpg').hide("");
  $('.regcomp').show("");
});
$('.featlist>li:nth-of-type(3)').click(function(){
  $('.regcomp').hide("");
  $('.home').hide("");
  $('.feedbackpg').hide("");
  $('.checkstatus').show("");
});
$('.featlist>li:nth-of-type(4)').click(function(){
  $('.regcomp').hide("");
  $('.checkstatus').hide("");
  $('.home').hide("");
  $('.feedbackpg').show("");
});


// CHARTS
var ctx = document.getElementById("chart1");
var ctx1 = document.getElementById("chart2");
ctx.height= 300;
ctx.width = 300;
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Submitted", "Resolved", "Pending"],
        datasets: [{
            label: '# of Votes',
            data: [200, 130, 70],
            backgroundColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
var myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [{
            label: 'Number Of Citizens Registered',
            data: [10, 30, 18, 20],
            backgroundColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            fill:false,
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 3
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});